# Auto-update feed — GitHub Releases (not Netlify)

Installers and electron-updater metadata live on GitHub Releases:

  https://github.com/sdfghjmxzx/listing-simulator-website/releases

Assets per release (example v1.0.12):

  latest.yml
  Listing-Simulator-Setup-1.0.12.exe
  Listing-Simulator-Setup-1.0.12.exe.blockmap
  (optional Mac) latest-mac.yml, Listing-Simulator-1.0.12-mac.dmg / .zip

Published by CatalogDesktop:

  npm run release
  npm run release:patch

Do not put .exe / .blockmap files in this folder for Netlify deploy.
This directory may keep a small latest.yml copy for reference only; the live feed is:

  https://github.com/sdfghjmxzx/listing-simulator-website/releases/latest/download/latest.yml
