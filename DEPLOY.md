# Listing Simulator website — deploy guide

Domain: **listingsimulator.net**  
Repo (source of truth): https://github.com/sdfghjmxzx/listing-simulator-website

## Architecture (after GitHub Releases cutover)

| What | Where |
|------|--------|
| HTML / CSS / JS / screenshots | This git repo → **Netlify** (light deploys) |
| Installers + `latest.yml` + blockmaps | **GitHub Releases** on the same repo |
| Active users (concurrent) + optional daily | Cloudflare Worker `GET /stats` → site shows `active` |

Do **not** upload `.exe` / `.dmg` to Netlify. That burned bandwidth on every deploy and every download.

## 1. Netlify ↔ GitHub (one-time)

1. Netlify → **Add new site → Import an existing project** → connect `sdfghjmxzx/listing-simulator-website`.
2. Publish directory: site root (`.`). No build command needed for a static site.
3. Connect **listingsimulator.net** under Domain settings (DNS as Netlify shows).
4. Prefer **git push** deploys. Stop drag-dropping a folder that contains installers.

## 2. Site content edits

1. Edit `js/site-config.js` (version labels, Cusdis, gallery, `githubOwner` / `githubRepo`).
2. Commit and push to `main` → Netlify redeploys the light site only.

## 3. Ship a new app version (installers)

From `CatalogDesktop`:

```powershell
npm run release:patch
# or: .\scripts\release.ps1 -Bump patch
```

That will:

1. Build the NSIS installer.
2. Update `website/js/site-config.js` version + filenames (**no** binary copy into `website/`).
3. Create/upload a GitHub Release `vX.Y.Z` on `sdfghjmxzx/listing-simulator-website` with:
   - `Listing-Simulator-Setup-X.Y.Z.exe`
   - `Listing-Simulator-Setup-X.Y.Z.exe.blockmap`
   - `latest.yml`
   - Mac assets when present

Requires once: [GitHub CLI](https://cli.github.com/) + `gh auth login`.

Public URLs:

- https://github.com/sdfghjmxzx/listing-simulator-website/releases/latest/download/Listing-Simulator-Setup-X.Y.Z.exe
- https://github.com/sdfghjmxzx/listing-simulator-website/releases/latest/download/latest.yml

## 4. First cutover (manual once)

If Releases are empty, upload the current build once:

```powershell
cd CatalogDesktop\dist
gh release create v1.0.12 `
  "Listing-Simulator-Setup-1.0.12.exe" `
  "Listing-Simulator-Setup-1.0.12.exe.blockmap" `
  "latest.yml" `
  --repo sdfghjmxzx/listing-simulator-website `
  --title "Listing Simulator 1.0.12" `
  --generate-notes
```

Then push the website repo (site-config already points at GitHub) so download buttons work.

Ship **one new desktop build** that uses `updateProvider: "github"` so installed apps leave the old Netlify `/updates/` feed.

## 5. Cusdis / Search Console

Unchanged — see prior setup. Cusdis App ID lives in `js/site-config.js`.

## 6. Local preview

```
npx serve website
```

Download buttons hit GitHub (need a published Release). Stats use Cloudflare + GitHub API from the browser.

## Auto-update (desktop)

`CatalogDesktop/release-config.json` and `package.json` `build.publish` use GitHub Releases on this repo. Local generic test:

```
set LISTING_SIMULATOR_UPDATE_URL=http://127.0.0.1:8787/
```
