# Downloads folder

Place the Windows installer here before deploying:

  Listing-Simulator-Setup-1.0.4.exe

Build it from CatalogDesktop:

  npm run dist:install

Copy from:

  CatalogDesktop/dist/Listing-Simulator-Setup-1.0.4.exe

Also copy update feed files into ../updates/ (latest.yml + Setup exe + .blockmap).

The file is ~87 MB — do not commit to git (see .gitignore).
Upload via Netlify deploy or drag this folder when publishing.
