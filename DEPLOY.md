# Listing Simulator website — deploy guide

Domain: **listingsimulator.net**

## 1. Prepare files

1. From `CatalogDesktop`, build and stage updates in one step:
   ```
   npm run release
   ```
   Or double-click `CatalogDesktop\release.bat`.

   To bump the version first:
   ```
   npm run release:patch
   ```

   That builds the NSIS installer and copies into `website/updates/` (and `website/downloads/` when present):
   - `latest.yml`
   - `Listing-Simulator-Setup-X.Y.Z.exe`
   - `.blockmap`

2. (Optional) Replace placeholder SVGs in `assets/screenshots/{inventory,listing,export,ai}/` with real PNGs (`01.png`–`05.png`), then update paths in `js/site-config.js` → `galleryAlbums`.
   Clicking any album opens **one continuous gallery** (Inventory 1–5 → Listing 6–10 → Export → AI).
3. Edit `js/site-config.js`:
   - `demoVideoUrl` — YouTube embed URL when ready
   - `cusdisAppId` — from [cusdis.com](https://cusdis.com) (free comments)
   - `feedbackEmail` — your real email

## 2. Deploy on Netlify (recommended)

1. Sign up at [netlify.com](https://www.netlify.com) (free).
2. **Add new site → Deploy manually** — drag the entire `website/` folder.
3. Site gets a URL like `random-name.netlify.app`.

## 3. Connect listingsimulator.net

At your domain registrar (where you bought `.net`):

1. Netlify → **Domain settings → Add domain** → enter `listingsimulator.net` and `www.listingsimulator.net`.
2. Netlify shows DNS records. Typically:
   - **A record** `@` → Netlify load balancer IP (shown in dashboard), or
   - **CNAME** `www` → `your-site.netlify.app`
3. Wait for DNS (minutes to 48 hours). Netlify enables HTTPS automatically.

Set primary domain to `listingsimulator.net` (redirect www → apex or vice versa).

## 4. Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console).
2. Add property `https://listingsimulator.net`.
3. Verify via DNS TXT record (Netlify/registrar) or HTML file upload.
4. Submit sitemap: `https://listingsimulator.net/sitemap.xml`.

## 5. Cusdis comments (free)

1. Register at [cusdis.com](https://cusdis.com).
2. Create a website / project. Set the site URL to `https://listingsimulator.net` (and/or your Netlify URL).
3. Copy the **App ID** (a UUID like `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`) from the dashboard Embed / settings page.
4. Put it in `js/site-config.js`:
   ```js
   cusdisAppId: "paste-app-id-here",
   ```
5. Commit and push (or redeploy). The Comments section appears automatically.
6. **Webhook:** leave **off** unless you want Slack/Telegram notifications. Not required for comments to work.
7. New comments are **hidden until you approve** them in the Cusdis dashboard (by design).

## 6. App auto-updates (electron-updater)

1. Build installer: `npm run release:patch` in `CatalogDesktop` (or `release.bat`).
2. Copy into `website/updates/` (release script does this automatically):
   - `latest.yml`
   - `Listing-Simulator-Setup-X.Y.Z.exe`
   - `Listing-Simulator-Setup-X.Y.Z.exe.blockmap`
3. **Redeploy the full `website/` folder on Netlify** (git push alone does not upload `.exe` files — they are gitignored). From `website/` after a one-time `npx netlify login` + `npx netlify link`:
   ```
   powershell -ExecutionPolicy Bypass -File scripts/deploy-netlify.ps1 -Message "v1.0.10"
   ```
   Or drag-drop the entire `website/` folder in the Netlify dashboard.
4. Confirm in a browser:
   `https://listingsimulator.netlify.app/updates/latest.yml`  
   (must be YAML text, not a 404 HTML page).

Feed URL in the app (`release-config.json` + `package.json` publish.url) is currently:

`https://listingsimulator.netlify.app/updates/`

When `listingsimulator.net` is connected to the same Netlify site, you may switch that URL to `https://listingsimulator.net/updates/` and ship a new installer. Until then, keep Netlify.

**Important:** Builds that still point at `example.com/...` cannot self-update — install the new Setup once by hand, then Check for updates will use the Netlify feed.

## Local preview

Open `website/index.html` in a browser, or:

```
npx serve website
```

Download button works only after the `.exe` is in `downloads/` and the site is served (not `file://`).
