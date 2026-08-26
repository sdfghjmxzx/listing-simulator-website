/** Edit these values once — used across the landing page. */
window.SITE_CONFIG = {
  productName: "Listing Simulator",
  domain: "https://listingsimulator.net",
  version: "1.0.8",
  downloadFile: "Listing-Simulator-Setup-1.0.8.exe",
  downloadSize: "87 MB",
  feedbackEmail: "feedback@listingsimulator.net",
  // Paste App ID from https://cusdis.com dashboard (Website → Embed / App ID). Webhook is optional — leave off.
  cusdisAppId: "5fd0c7e5-7870-4525-9d80-7ac1f9466106",
  buyMeACoffeeUrl: "",

  /**
   * One continuous gallery. Albums are cover cards on the page;
   * opening any album starts at its first image, then next/prev walk ALL images in order.
   * Add or remove entries to match files in assets/screenshots/{album}/ — any count is fine.
   */
  galleryAlbums: [
    {
      id: "inventory",
      title: "Inventory Manager",
      blurb: "Browse families, catalog & Rules banners, export clones.",
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
      blurb: "Edit copy, gallery, variation theme, and listing health.",
      images: [
        { src: "assets/screenshots/listing/01.png", caption: "Listing workspace" },
        { src: "assets/screenshots/listing/02.png", caption: "Title & bullets" },
        { src: "assets/screenshots/listing/03.png", caption: "Image gallery" },
        { src: "assets/screenshots/listing/04.png", caption: "Variation theme & children" },
        { src: "assets/screenshots/listing/05.png", caption: "Listing health" },
        { src: "assets/screenshots/listing/06.png", caption: "Listing detail" },
        { src: "assets/screenshots/listing/07.png", caption: "Listing detail" },
        { src: "assets/screenshots/listing/08.png", caption: "Listing detail" },
        { src: "assets/screenshots/listing/09.png", caption: "Listing detail" },
        { src: "assets/screenshots/listing/10.png", caption: "Listing detail" },
        { src: "assets/screenshots/listing/11.png", caption: "Listing detail" }
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
