# Listing Simulator website — deploy guide

Domain: **listingsimulator.net**

## 1. Prepare files

1. Build the installer (from `CatalogDesktop`):
   ```
   npm run dist:install
   ```
2. Copy the installer into this folder:
   ```
   copy dist\Listing-Simulator-Setup-1.0.0.exe ..\website\downloads\
   ```
3. (Optional) Replace placeholder SVGs in `assets/screenshots/{inventory,listing,export,ai}/` with real PNGs (`01.png`–`05.png`), then update paths in `js/site-config.js` → `galleryAlbums`.
   Clicking any album opens **one continuous gallery** (Inventory 1–5 → Listing 6–10 → Export → AI).
4. Edit `js/site-config.js`:
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
2. Add website URL `https://listingsimulator.net`.
3. Copy **App ID** into `js/site-config.js` → `cusdisAppId`.
4. Redeploy the site.

## 6. App auto-updates (electron-updater)

1. Build installer: `npm run dist:install` in `CatalogDesktop`.
2. Copy into `website/updates/`:
   - `latest.yml`
   - `Listing-Simulator-Setup-X.Y.Z.exe`
   - `Listing-Simulator-Setup-X.Y.Z.exe.blockmap`
3. Redeploy the Netlify site.
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
