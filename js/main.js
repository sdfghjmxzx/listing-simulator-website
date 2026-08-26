(function () {
  var cfg = window.SITE_CONFIG || {};

  function setText(id, text) {
    var el = document.getElementById(id);
    if (el && text) el.textContent = text;
  }

  function setHref(id, href) {
    var el = document.getElementById(id);
    if (el && href) el.href = href;
  }

  var downloadUrl = "/downloads/" + (cfg.downloadFile || "Listing-Simulator-Setup-1.0.0.exe");
  var versionLabel = "v" + (cfg.version || "1.0.0") + (cfg.downloadSize ? " · " + cfg.downloadSize : "");

  setText("heroVersion", versionLabel);
  setText("downloadVersion", versionLabel);
  setText("footerVersion", "Listing Simulator " + (cfg.version || "1.0.0"));

  ["heroDownload", "navDownload", "downloadBtn", "footerDownload"].forEach(function (id) {
    setHref(id, downloadUrl);
  });

  if (cfg.feedbackEmail) {
    var mail = document.getElementById("feedbackMail");
    if (mail) {
      mail.href = "mailto:" + cfg.feedbackEmail;
      mail.textContent = cfg.feedbackEmail;
    }
  }

  // Cusdis comments (section stays hidden until cusdisAppId is set)
  var commentsSection = document.getElementById("comments");
  var commentsWrap = document.getElementById("commentsWrap");
  var commentsNav = document.querySelector('.site-nav a[href="#comments"]');
  if (cfg.cusdisAppId && commentsWrap) {
    if (commentsSection) commentsSection.hidden = false;
    if (commentsNav) commentsNav.style.display = "";
    commentsWrap.innerHTML =
      '<div id="cusdis_thread" data-host="https://cusdis.com" data-app-id="' + cfg.cusdisAppId + '" ' +
      'data-page-id="home" data-page-title="Listing Simulator" data-page-url="' +
      (cfg.domain || window.location.origin) + '/"></div>';
    var s = document.createElement("script");
    s.async = true;
    s.defer = true;
    s.src = "https://cusdis.com/js/cusdis.es.js";
    commentsWrap.appendChild(s);
  } else {
    if (commentsNav) commentsNav.style.display = "none";
  }

  // Mobile nav
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("open"); });
    });
  }

  // JSON-LD from config
  var ld = document.getElementById("softwareLd");
  if (ld && cfg.productName) {
    var schema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: cfg.productName,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Windows 10, Windows 11",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      },
      downloadUrl: (cfg.domain || window.location.origin) + downloadUrl,
      softwareVersion: cfg.version || "1.0.0",
      description: "Windows desktop app for Amazon catalog Excel files. Edit listings locally and export clone uploads."
    };
    ld.textContent = JSON.stringify(schema);
  }

  // —— Unified screenshot gallery (one continuous lightbox) ——
  var albums = cfg.galleryAlbums || [];
  var slides = [];
  albums.forEach(function (album) {
    (album.images || []).forEach(function (img, i) {
      slides.push({
        src: img.src,
        caption: img.caption || "",
        albumTitle: album.title,
        albumId: album.id,
        albumIndex: i,
        albumCount: album.images.length
      });
    });
  });

  var albumStartIndex = {};
  albums.forEach(function (album) {
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].albumId === album.id) {
        albumStartIndex[album.id] = i;
        break;
      }
    }
  });

  var albumsEl = document.getElementById("galleryAlbums");
  if (albumsEl && albums.length) {
    albumsEl.innerHTML = albums.map(function (album) {
      var cover = (album.images && album.images[0] && album.images[0].src) || "";
      var count = (album.images && album.images.length) || 0;
      return (
        '<button type="button" class="gallery-item gallery-album" data-album="' + album.id + '">' +
          '<img src="' + cover + '" alt="' + album.title + '" width="640" height="400" loading="lazy">' +
          '<span class="gallery-badge">' + count + " photos</span>" +
          '<span class="gallery-caption"><strong>' + album.title + "</strong>" + (album.blurb || "") + "</span>" +
        "</button>"
      );
    }).join("");

    albumsEl.querySelectorAll("[data-album]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var start = albumStartIndex[btn.getAttribute("data-album")];
        if (typeof start === "number") openLightbox(start);
      });
    });
  }

  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxAlbum = document.getElementById("lightboxAlbum");
  var lightboxCaption = document.getElementById("lightboxCaption");
  var lightboxCount = document.getElementById("lightboxCount");
  var currentIndex = 0;

  function showSlide(index) {
    if (!slides.length) return;
    currentIndex = (index + slides.length) % slides.length;
    var slide = slides[currentIndex];
    lightboxImg.src = slide.src;
    lightboxImg.alt = slide.caption || slide.albumTitle;
    lightboxAlbum.textContent = slide.albumTitle;
    lightboxCaption.textContent = slide.caption;
    lightboxCount.textContent =
      (currentIndex + 1) + " / " + slides.length +
      " · " + (slide.albumIndex + 1) + " of " + slide.albumCount + " in this topic";
  }

  function openLightbox(index) {
    if (!lightbox || !slides.length) return;
    showSlide(index);
    lightbox.hidden = false;
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
    document.getElementById("lightboxClose").focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
  }

  function nextSlide() { showSlide(currentIndex + 1); }
  function prevSlide() { showSlide(currentIndex - 1); }

  var closeBtn = document.getElementById("lightboxClose");
  var backdrop = document.getElementById("lightboxBackdrop");
  var nextBtn = document.getElementById("lightboxNext");
  var prevBtn = document.getElementById("lightboxPrev");
  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (backdrop) backdrop.addEventListener("click", closeLightbox);
  if (nextBtn) nextBtn.addEventListener("click", nextSlide);
  if (prevBtn) prevBtn.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (!lightbox || lightbox.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  });

  // Hero image opens Inventory album
  var heroImg = document.querySelector(".hero-visual img");
  if (heroImg && typeof albumStartIndex.inventory === "number") {
    heroImg.style.cursor = "pointer";
    heroImg.addEventListener("click", function () {
      openLightbox(albumStartIndex.inventory);
    });
  }
})();
