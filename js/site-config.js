/** Edit these values once — used across the landing page. */
window.SITE_CONFIG = {
  productName: "Listing Simulator",
  domain: "https://listingsimulator.net",
  version: "1.0.12",
  downloadFile: "Listing-Simulator-Setup-1.0.12.exe",
  downloadSize: "168 MB",
  downloadFileMac: "Listing-Simulator-1.0.12-mac.dmg",
  downloadSizeMac: "163 MB",
  feedbackEmail: "feedback@listingsimulator.net",
  // Paste App ID from https://cusdis.com dashboard (Website → Embed / App ID). Webhook is optional — leave off.
  cusdisAppId: "5fd0c7e5-7870-4525-9d80-7ac1f9466106",
  buyMeACoffeeUrl: "",
  /** Cloudflare Worker for public stats (daily users + optional legacy download counter). */
  presenceUrl: "https://listing-simulator-presence.listingsimulator.workers.dev",
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
   * One continuous gallery. Albums are cover cards on the page;
   * opening any album starts at its first image, then next/prev walk ALL images in order.
   */
  galleryAlbums: [
    {
      id: "health",
      title: "Health Check",
      blurb: "Inventory bars, listing health, and gallery probes.",
      images: [
        { src: "assets/screenshots/health/01.png", caption: "Inventory gallery hover — family health issues" },
        { src: "assets/screenshots/health/02.png", caption: "Listing Health Check details" }
      ]
    },
    {
      id: "create-listing",
      title: "Listing Creation",
      blurb: "Create New Listing and Make variation.",
      images: [
        { src: "assets/screenshots/create-listing/01.png", caption: "Create New Listing form" },
        { src: "assets/screenshots/create-listing/02.png", caption: "Make variation — filled from a source SKU" }
      ]
    },
    {
      id: "stock-package",
      title: "Stock, Ships & Package",
      blurb: "FBA stock, Ships, and package size tiers.",
      images: [
        { src: "assets/screenshots/stock-package/01.png", caption: "FBA stock, Ships, and size badges" },
        { src: "assets/screenshots/stock-package/02.png", caption: "Package size tiers — Pre / Post 2027 rules" }
      ]
    },
    {
      id: "image-editor",
      title: "Image editor",
      blurb: "Modify image — crop, bg remove, aspects.",
      images: [
        { src: "assets/screenshots/image-editor/01.png", caption: "Crop frame & aspect presets" },
        { src: "assets/screenshots/image-editor/02.png", caption: "Auto Detect background remove" },
        { src: "assets/screenshots/image-editor/03.png", caption: "Brush erase to white" }
      ]
    },
    {
      id: "catalog-export",
      title: "Create Catalog & Export",
      blurb: "Catalog folder output and Export Health gate.",
      images: [
        { src: "assets/screenshots/catalog-export/01.png", caption: "Export Health overview" },
        { src: "assets/screenshots/catalog-export/02.png", caption: "Likely rejects — field detail cards" }
      ]
    },
    {
      id: "inventory",
      title: "Inventory Manager",
      blurb: "Browse families, banners, filters, and pins.",
      images: [
        { src: "assets/screenshots/inventory/01.png", caption: "Inventory overview" },
        { src: "assets/screenshots/inventory/02.png", caption: "Catalog & Rules banners" },
        { src: "assets/screenshots/inventory/03.png", caption: "Family list & filters" },
        { src: "assets/screenshots/inventory/04.png", caption: "Health & status chips" },
        { src: "assets/screenshots/inventory/05.png", caption: "Export & bulk actions" }
      ]
    },
    {
      id: "listing",
      title: "Listing editor",
      blurb: "Edit copy, gallery, theme, and health.",
      images: [
        { src: "assets/screenshots/listing/01.png", caption: "Listing workspace" },
        { src: "assets/screenshots/listing/02.png", caption: "Title & bullets" },
        { src: "assets/screenshots/listing/03.png", caption: "Image gallery" },
        { src: "assets/screenshots/listing/04.png", caption: "Variation theme & children" },
        { src: "assets/screenshots/listing/05.png", caption: "Listing health" },
        { src: "assets/screenshots/listing/06.png", caption: "Parent options & fields" },
        { src: "assets/screenshots/listing/07.png", caption: "Swatches & theme row" },
        { src: "assets/screenshots/listing/08.png", caption: "Change Log" },
        { src: "assets/screenshots/listing/09.png", caption: "Compare mode" },
        { src: "assets/screenshots/listing/10.png", caption: "Descriptors" },
        { src: "assets/screenshots/listing/11.png", caption: "Gallery tools" }
      ]
    },
    {
      id: "ai",
      title: "Optional AI",
      blurb: "Ask Aleksa how-to questions or use scan and enhance tools.",
      images: [
        { src: "assets/screenshots/ai/01.png", caption: "Aleksa chat" },
        { src: "assets/screenshots/ai/02.png", caption: "Field enhance" },
        { src: "assets/screenshots/ai/03.png", caption: "Inventory scan" },
        { src: "assets/screenshots/ai/04.png", caption: "Gallery AI generate" }
      ]
    },
    {
      id: "export",
      title: "Export clones",
      blurb: "Build a focused Amazon upload from checked families.",
      images: [
        { src: "assets/screenshots/export/01.png", caption: "Select families to export" },
        { src: "assets/screenshots/export/02.png", caption: "Export options" }
      ]
    }
  ]
};
