# Auto-update feed (electron-updater)

## Windows

After `npm run dist:install` in CatalogDesktop, copy these files here before Netlify deploy:

  latest.yml
  Listing-Simulator-Setup-X.Y.Z.exe
  Listing-Simulator-Setup-X.Y.Z.exe.blockmap

## Mac (optional)

After `npm run dist:mac` on a Mac (or from the GitHub Actions artifact):

  latest-mac.yml
  Listing-Simulator-X.Y.Z-mac.dmg
  Listing-Simulator-X.Y.Z-mac.zip
  Listing-Simulator-X.Y.Z-mac.zip.blockmap   (if present)

From:

  CatalogDesktop/dist/

Public URLs (same files on Netlify):

  https://listingsimulator.netlify.app/updates/latest.yml
  https://listingsimulator.netlify.app/updates/latest-mac.yml

Do not commit the .exe / .dmg (~87–95 MB) — see website/.gitignore.
