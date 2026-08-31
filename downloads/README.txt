# Downloads folder

Place the Windows installer here before deploying:

  Listing-Simulator-Setup-1.0.10.exe

Build from CatalogDesktop (on main branch):

  npm run release:patch

Copy from:

  CatalogDesktop/dist/Listing-Simulator-Setup-1.0.10.exe

Also copy update feed files into ../updates/ (latest.yml + Setup exe + .blockmap).

The file is ~87 MB — do not commit to git (see .gitignore).
Upload via Netlify deploy or drag the entire website/ folder when publishing.

Without the .exe on Netlify, /downloads/*.exe returns 404 even with correct links.
