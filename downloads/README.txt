# Downloads folder

Place installers here before deploying:

  Listing-Simulator-Setup-1.0.11.exe          (Windows)
  Listing-Simulator-1.0.11-mac.dmg            (Mac, ~108 MB)

Windows build (from CatalogDesktop on a Windows PC):

  npm run release:patch

Mac build (must run on macOS, or via GitHub Actions → "Build Mac installer"):

  npm run dist:mac

Copy Mac output from:

  CatalogDesktop/dist/Listing-Simulator-1.0.11-mac.dmg
  CatalogDesktop/dist/Listing-Simulator-1.0.11-mac.zip   (optional; for auto-update)
  CatalogDesktop/dist/latest-mac.yml                     (optional; into ../updates/)

Also copy Windows update feed files into ../updates/ (latest.yml + Setup exe + .blockmap).

The installers are ~87–95 MB — do not commit to git (see .gitignore).
Upload via Netlify deploy or drag the entire website/ folder when publishing.

Without the files on Netlify, /downloads/* returns 404 even with correct links.
