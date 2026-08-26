# Listing Simulator — website

Marketing site + auto-update feed for [Listing Simulator](https://listingsimulator.netlify.app/).

## Local preview

Open `index.html`, or:

```bash
npx serve .
```

## Deploy

See [DEPLOY.md](DEPLOY.md). After each app release, ensure `updates/latest.yml` and the matching Setup exe are present, then redeploy Netlify.

Installer binaries (`*.exe`, `*.blockmap`) are gitignored — upload them with the deploy (or keep them locally under `updates/` / `downloads/`).
