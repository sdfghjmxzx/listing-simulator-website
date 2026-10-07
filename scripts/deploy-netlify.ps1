# Deploy the LIGHT static website to Netlify (HTML/CSS/JS only).
# Installers are NOT included — they live on GitHub Releases.
#
# Preferred: connect Netlify to the GitHub repo and git push.
# This script is for manual CLI deploy of the site root only.
#
# Prerequisite (once):
#   cd website
#   npm install netlify-cli --no-save
#   npx netlify login
#   npx netlify link
#
# Usage:
#   .\scripts\deploy-netlify.ps1
#   .\scripts\deploy-netlify.ps1 -Message "site: header stats"

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

$heavy = @(
  Get-ChildItem (Join-Path $root "downloads\*.exe") -ErrorAction SilentlyContinue
  Get-ChildItem (Join-Path $root "updates\*.exe") -ErrorAction SilentlyContinue
  Get-ChildItem (Join-Path $root "downloads\*.dmg") -ErrorAction SilentlyContinue
  Get-ChildItem (Join-Path $root "updates\*.dmg") -ErrorAction SilentlyContinue
)
if ($heavy -and $heavy.Count -gt 0) {
  Write-Warning "Heavy installers found under downloads/ or updates/. Prefer deleting them before Netlify deploy to save bandwidth."
  $heavy | ForEach-Object { Write-Warning ("  " + $_.FullName) }
}

$args = @("deploy", "--prod", "--dir=.")
if ($Message) { $args += "--message=$Message" }

Write-Host "Deploying LIGHT site $root to Netlify production (no GitHub Release upload here)..."
& node $cli @args
if ($LASTEXITCODE -ne 0) { throw "netlify deploy failed with exit $LASTEXITCODE" }
Write-Host "Done. Installers: https://github.com/sdfghjmxzx/listing-simulator-website/releases"
