/** Edit these values once — used across the landing page. */
window.SITE_CONFIG = {
  productName: "Listing Simulator",
  domain: "https://listingsimulator.net",
  version: "1.0.11",
  downloadFile: "Listing-Simulator-Setup-1.0.11.exe",
  downloadSize: "87 MB",
  downloadFileMac: "Listing-Simulator-1.0.11-mac.dmg",
  downloadSizeMac: "108 MB",
  feedbackEmail: "feedback@listingsimulator.net",
  // Paste App ID from https://cusdis.com dashboard (Website → Embed / App ID). Webhook is optional — leave off.
  cusdisAppId: "5fd0c7e5-7870-4525-9d80-7ac1f9466106",
  buyMeACoffeeUrl: "",

  /**
   * One continuous gallery. Albums are cover cards on the page;
   * opening any album starts at its first image, then next/prev walk ALL images in order.
   * Replace *-placeholder.svg files with real screenshots when ready (keep filenames or update src).
   */
  galleryAlbums: [
    {
      id: "health",
      title: "Health Check",
      blurb: "Inventory bars, listing health, and gallery probes.",
      images: [
        { src: "assets/screenshots/health/01-placeholder.svg", caption: "Inventory health bars (placeholder — replace with screenshot)" },
        { src: "assets/screenshots/health/02-placeholder.svg", caption: "Listing Health Check details (placeholder)" },
        { src: "assets/screenshots/health/03-placeholder.svg", caption: "Gallery Health Check (placeholder)" }
      ]
    },
    {
      id: "create-listing",
      title: "Listing Creation",
      blurb: "Create New Listing and Make variation.",
      images: [
        { src: "assets/screenshots/create-listing/01-placeholder.svg", caption: "Create New Listing form (placeholder)" },
        { src: "assets/screenshots/create-listing/02-placeholder.svg", caption: "Make variation search (placeholder)" }
      ]
    },
    {
      id: "stock-package",
      title: "Stock, Ships & Package",
      blurb: "FBA stock, Ships, and package size tiers.",
      images: [
        { src: "assets/screenshots/stock-package/01-placeholder.svg", caption: "FBA stock & Ships on Inventory (placeholder)" },
        { src: "assets/screenshots/stock-package/02-placeholder.svg", caption: "Package size Pre/Post 2027 (placeholder)" }
      ]
    },
    {
      id: "image-editor",
      title: "Image editor",
      blurb: "Modify image — crop, bg remove, aspects.",
      images: [
        { src: "assets/screenshots/image-editor/01-placeholder.svg", caption: "Modify image workspace (placeholder)" },
        { src: "assets/screenshots/image-editor/02-placeholder.svg", caption: "Crop & aspect presets (placeholder)" },
        { src: "assets/screenshots/image-editor/03-placeholder.svg", caption: "Background remove (placeholder)" }
      ]
    },
    {
      id: "catalog-export",
      title: "Create Catalog & Export",
      blurb: "Catalog folder output and Export Health gate.",
      images: [
        { src: "assets/screenshots/catalog-export/01-placeholder.svg", caption: "Create Catalog output (placeholder)" },
        { src: "assets/screenshots/catalog-export/02-placeholder.svg", caption: "Export Health dialog (placeholder)" }
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
