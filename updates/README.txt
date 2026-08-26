# Auto-update feed (electron-updater)

After `npm run dist:install` in CatalogDesktop, copy these files here before Netlify deploy:

  latest.yml
  Listing-Simulator-Setup-X.Y.Z.exe
  Listing-Simulator-Setup-X.Y.Z.exe.blockmap

From:

  CatalogDesktop/dist/

Public URLs (same files on Netlify):

  https://listingsimulator.netlify.app/updates/latest.yml
  (later, same path on https://listingsimulator.net/updates/ when DNS is connected)

Do not commit the .exe (~87 MB) — see website/.gitignore.
