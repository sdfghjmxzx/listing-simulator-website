/** Edit these values once — used across the landing page. */
window.SITE_CONFIG = {
  productName: "Listing Simulator",
  domain: "https://listingsimulator.net",
  version: "1.0.14",
  downloadFile: "Listing-Simulator-Setup-1.0.14.exe",
  downloadSize: "168 MB",
  downloadFileMac: "Listing-Simulator-1.0.14-mac.dmg",
  downloadSizeMac: "163 MB",
  feedbackEmail: "feedback@listingsimulator.net",
  // Paste App ID from https://cusdis.com dashboard (Website → Embed / App ID). Webhook is optional — leave off.
  cusdisAppId: "5fd0c7e5-7870-4525-9d80-7ac1f9466106",
  buyMeACoffeeUrl: "",
  /**
   * Cloudflare Worker for public stats.
   * Website header uses GET /stats → `active` (concurrent heartbeats right now).
   * Worker also exposes `daily` (UTC unique sessions) — not shown on the site.
   */
  presenceUrl: "https://listing-simulator-presence.listingsimulator.workers.dev",

  /** Meta / JSON-LD description (homepage SEO). */
  seoDescription:
    "Amazon listing builder and listing optimization software for Windows and Mac. Health Check and Export Health follow your catalog’s Amazon logic, structure, and rules. AI assist (Aleksa + ManaQ1), Image Studio, Image Upload ZIP, Referral Fee export, and Create Catalog — flat-file workflow, no Amazon API required. Built by Amazon Listing Specialists for Amazon Listing Specialists.",

  /**
   * Curated commercial keywords that match real product capabilities
   * (from Rank CSV — skip keyword-research / rank-tracker / reverse-ASIN claims).
   */
  seoKeywords: [
    "Amazon listing optimizer",
    "Amazon listing optimization software",
    "Amazon listing software",
    "Amazon listing builder",
    "AI Amazon listing generator",
    "Amazon listing audit tool",
    "Amazon product listing tool",
    "Amazon listing optimization tool",
    "Amazon listing management software",
    "Amazon listing optimization for sellers",
    "FBA listing optimization tool",
    "Amazon listing quality checker",
    "Amazon listing analyzer",
    "Amazon listing rewrite tool",
    "Amazon product title generator",
    "Amazon bullet point generator",
    "Amazon product description generator",
    "FBA seller software"
  ],

  /** JSON-LD SoftwareApplication featureList — same selling pillars as the Features section */
  featureList: [
    "Listing builder — live preview, full UI editing of families and listings, Referral Fee-ready files, inventory view",
    "Flat-file workflow — open Amazon catalog Excel with no Seller Central API or authorization",
    "Health Check against Amazon’s required-field rules for your catalog before upload",
    "AI assist with Aleksa (your own API key) and ManaQ1 image generation — you review before save",
    "Image Studio — background remove, upscale, enhance, resize, ManaQ1 and bulk listing image generation, Bulk Image Upload ZIP",
    "Export Health — clear likely-reject vs advisory errors on export",
    "Catalog create and sync — download a local Families / Standalones hierarchy folder by folder, then merge fresh inventory while keeping edits",
    "Report creation — Excel reports of the fields you choose, in seconds",
    "Inventory Planner — plan, forecast from your data, optimizer and fee calculator",
    "View Sheets — open and edit the Excel sheets directly in the app"
  ],
  /**
   * downloadSource: "github" = installers on GitHub Releases; download count from Releases API.
   * "site" = legacy Netlify /downloads/ + Worker POST /download click counter.
   */
  downloadSource: "github",
  githubOwner: "sdfghjmxzx",
  githubRepo: "listing-simulator-website",
  /** Base for browser download links (latest release assets by filename). */
  githubReleaseLatestBase:
    "https://github.com/sdfghjmxzx/listing-simulator-website/releases/latest/download",
  githubReleasesApi:
    "https://api.github.com/repos/sdfghjmxzx/listing-simulator-website/releases",


  /**
   * Gallery albums = selling pillars (see Features).
   * Catalog create & sync is copy-only (background workflow — no gallery album).
   */
  galleryAlbums: [
    {
      id: "listing-builder",
      title: "Listing builder",
      blurb: "Live preview, families, inventory, Referral Fee.",
      images: [
        { src: "assets/screenshots/hero.png", caption: "Full inventory view — families, stock, tools" },
        { src: "assets/screenshots/listing/01.png", caption: "Listing workspace — see it as you build" },
        { src: "assets/screenshots/listing/02.png", caption: "Edit title and bullets in the UI" },
        { src: "assets/screenshots/create-listing/01.png", caption: "Create a listing in the UI" },
        { src: "assets/screenshots/create-listing/02.png", caption: "Grow a family from a source listing" },
        { src: "assets/screenshots/inventory/03.png", caption: "Browse families and filters" },
        { src: "assets/screenshots/listing-builder/referral.png", caption: "Referral Fee Connector — link Base and Bulk" }
      ]
    },
    {
      id: "stock-package",
      title: "Stock, Ships & Package",
      blurb: "FBA stock, Ships, and package size tiers.",
      images: [
        { src: "assets/screenshots/stock-package/01.png", caption: "Stock, Ships, and size on inventory" },
        { src: "assets/screenshots/stock-package/02.png", caption: "Package size tiers — Pre / Post 2027" }
      ]
    },
    {
      id: "health",
      title: "Health Check",
      blurb: "Amazon’s required-field rules, before upload.",
      images: [
        { src: "assets/screenshots/health/01.png", caption: "See listing quality issues on inventory" },
        { src: "assets/screenshots/health/02.png", caption: "What’s wrong on this listing — in plain view" }
      ]
    },
    {
      id: "ai",
      title: "AI — Aleksa + ManaQ1",
      blurb: "Your key. Your assistant. You stay in control.",
      images: [
        { src: "assets/screenshots/ai/01.png", caption: "Connect with your own API key" },
        { src: "assets/screenshots/ai/02.png", caption: "Aleksa — help on your catalog and listing" }
      ]
    },
    {
      id: "image-studio",
      title: "Image Studio & bulk upload",
      blurb: "Edit, enhance, generate, pack for Image Manager.",
      images: [
        { src: "assets/screenshots/image-studio/overview.png", caption: "Image Studio — pick a listing image to edit" },
        { src: "assets/screenshots/image-editor/01.png", caption: "Crop, resize, aspect presets" },
        { src: "assets/screenshots/image-editor/02.png", caption: "Background remove" },
        { src: "assets/screenshots/image-editor/03.png", caption: "Brush cleanup to white" },
        { src: "assets/screenshots/image-editor/04-upscale-enhance.png", caption: "Upscale, detect, and enhance" },
        { src: "assets/screenshots/image-studio/ai-generator.png", caption: "AI image generator for Amazon listings" },
        { src: "assets/screenshots/image-studio/bulk-upload.png", caption: "Bulk Image Upload — pack the catalog for Image Manager" }
      ]
    },
    {
      id: "export-health",
      title: "Export Health",
      blurb: "Errors showcased before the file hits Amazon.",
      images: [
        { src: "assets/screenshots/catalog-export/01.jpg", caption: "Export Health overview — likely rejects vs advisory" },
        { src: "assets/screenshots/catalog-export/02.png", caption: "Field-level errors on export" },
        { src: "assets/screenshots/export/01.png", caption: "Choose what to export" },
        { src: "assets/screenshots/export/02.png", caption: "Export options" }
      ]
    },
    {
      id: "reports",
      title: "Report creation",
      blurb: "Excel of the fields that matter — in seconds.",
      images: [
        { src: "assets/screenshots/reports/01.png", caption: "Create Report — pick the fields you care about" }
      ]
    },
    {
      id: "planner",
      title: "Inventory Planner",
      blurb: "Plan, forecast, fees.",
      images: [
        { src: "assets/screenshots/planner/01.png", caption: "Inventory Planner — demand sources and SKUs" },
        { src: "assets/screenshots/planner/02.png", caption: "Build the plan from your data" }
      ]
    },
    {
      id: "sheets",
      title: "View Sheets",
      blurb: "The Excel grid — editable in the app.",
      images: [
        { src: "assets/screenshots/inventory/05.png", caption: "View and edit sheets directly" }
      ]
    }
  ]
};
