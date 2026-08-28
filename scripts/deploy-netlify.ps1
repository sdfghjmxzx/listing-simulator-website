# Deploy the full website folder to Netlify (includes .exe files not in git).
# Prerequisite: netlify login (once) from this folder:
#   cd website
#   npm install netlify-cli --no-save
#   npx netlify login
#   npx netlify link   # pick listingsimulator site if prompted
#
# Usage:
#   .\scripts\deploy-netlify.ps1
#   .\scripts\deploy-netlify.ps1 -Message "v1.0.10"

param(
  [string]$Message = ""
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

$cli = Join-Path $root "node_modules\netlify-cli\bin\run.js"
if (-not (Test-Path $cli)) {
  Write-Host "Installing netlify-cli..."
  npm install netlify-cli --no-save
  if ($LASTEXITCODE -ne 0) { throw "npm install netlify-cli failed" }
}

$setup = Get-ChildItem (Join-Path $root "downloads\Listing-Simulator-Setup-*.exe") | Sort-Object Name -Descending | Select-Object -First 1
if (-not $setup) { throw "No installer in downloads/. Run CatalogDesktop release first." }

$yml = Get-Content (Join-Path $root "updates\latest.yml") -Raw
if ($yml -notmatch [regex]::Escape($setup.Name)) {
  Write-Warning "latest.yml may not match $($setup.Name) - check updates/latest.yml"
}

$args = @("deploy", "--prod", "--dir=.")
if ($Message) { $args += "--message=$Message" }

Write-Host "Deploying $root to Netlify production..."
Write-Host "  Installer: $($setup.Name)"
& node $cli @args
if ($LASTEXITCODE -ne 0) { throw "Netlify deploy failed (run: npx netlify login)" }

Write-Host "Done. Verify:"
Write-Host "  https://listingsimulator.netlify.app/updates/latest.yml"
Write-Host "  https://listingsimulator.netlify.app/downloads/$($setup.Name)"
