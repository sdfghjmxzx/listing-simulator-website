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

  var winFile = cfg.downloadFile || "Listing-Simulator-Setup-1.0.13.exe";
  var macFile = cfg.downloadFileMac || "Listing-Simulator-1.0.13-mac.dmg";
  var ghBase = String(cfg.githubReleaseLatestBase || "").replace(/\/+$/, "");
  var useGithub = cfg.downloadSource === "github" && !!ghBase;
  var downloadUrl = useGithub
    ? (ghBase + "/" + winFile)
    : ("/downloads/" + winFile);
  var downloadUrlMac = useGithub
    ? (ghBase + "/" + macFile)
    : ("/downloads/" + macFile);
  var versionLabel = "v" + (cfg.version || "1.0.13") + (cfg.downloadSize ? " · Windows " + cfg.downloadSize : "");
  var versionLabelMac = "v" + (cfg.version || "1.0.13") + (cfg.downloadSizeMac ? " · Mac " + cfg.downloadSizeMac : "");

  setText("heroVersion", versionLabel);
  setText("downloadVersion", versionLabel);
  setText("downloadVersionMac", versionLabelMac);
  setText("footerVersion", "Listing Simulator " + (cfg.version || "1.0.13"));

  ["heroDownload", "navDownload", "downloadBtn", "footerDownload"].forEach(function (id) {
    setHref(id, downloadUrl);
  });
  ["heroDownloadMac", "downloadBtnMac"].forEach(function (id) {
    setHref(id, downloadUrlMac);
  });

  var presenceBase = String(cfg.presenceUrl || "").replace(/\/+$/, "");
  var releasesApi = String(cfg.githubReleasesApi || "").replace(/\/+$/, "");

  function formatStat_(n) {
    if (typeof n !== "number" || !isFinite(n)) return "—";
    try {
      return n.toLocaleString();
    } catch (e) {
      return String(n);
    }
  }

  function paintPublicStats_(st) {
    st = st || {};
    if (st.downloads != null) setText("statDownloads", formatStat_(st.downloads));
    if (st.active != null) setText("statActive", formatStat_(st.active));
  }

  function sumGithubDownloads_(releases) {
    var total = 0;
    (releases || []).forEach(function (rel) {
      (rel.assets || []).forEach(function (asset) {
        var name = String(asset.name || "");
        if (/\.(exe|dmg|zip)$/i.test(name)) {
          total += Number(asset.download_count) || 0;
        }
      });
    });
    return total;
  }

  function loadGithubDownloadCount_() {
    if (!releasesApi) return Promise.resolve(null);
    return fetch(releasesApi + "?per_page=30", {
      method: "GET",
      mode: "cors",
      cache: "no-store",
      headers: { Accept: "application/vnd.github+json" }
    })
      .then(function (r) {
        if (!r.ok) throw new Error("GitHub releases HTTP " + r.status);
        return r.json();
      })
      .then(function (list) {
        return sumGithubDownloads_(list);
      })
      .catch(function () {
        return null;
      });
  }

  function loadPresenceActive_() {
    if (!presenceBase) return Promise.resolve(null);
    return fetch(presenceBase + "/stats", { method: "GET", mode: "cors", cache: "no-store" })
      .then(function (r) { return r.json(); })
      .then(function (j) {
        return j && typeof j.active === "number" ? j.active : null;
      })
      .catch(function () {
        return null;
      });
  }

  function loadPublicStats_() {
    var activeP = loadPresenceActive_();
    var dlP = useGithub
      ? loadGithubDownloadCount_()
      : (presenceBase
        ? fetch(presenceBase + "/stats", { method: "GET", mode: "cors", cache: "no-store" })
            .then(function (r) { return r.json(); })
            .then(function (j) { return j && typeof j.downloads === "number" ? j.downloads : null; })
            .catch(function () { return null; })
        : Promise.resolve(null));

    Promise.all([dlP, activeP]).then(function (pair) {
      paintPublicStats_({ downloads: pair[0], active: pair[1] });
    });
  }

  /** Legacy Netlify click counter only — skipped when using GitHub Releases. */
  function recordDownloadClick_() {
    if (!presenceBase || useGithub) return;
    try {
      fetch(presenceBase + "/download", {
        method: "POST",
        mode: "cors",
        keepalive: true,
        headers: { "Content-Type": "application/json" },
        body: "{}"
      })
        .then(function (r) { return r.json(); })
        .then(function (j) {
          if (j && typeof j.downloads === "number") setText("statDownloads", formatStat_(j.downloads));
        })
        .catch(function () {});
    } catch (eRec) {}
  }

  [
    "heroDownload", "navDownload", "downloadBtn", "footerDownload",
    "heroDownloadMac", "downloadBtnMac"
  ].forEach(function (id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("click", function () {
      recordDownloadClick_();
    });
  });

  loadPublicStats_();

  if (cfg.feedbackEmail) {
    var mail = document.getElementById("feedbackMail");
    if (mail) {
      mail.href = "mailto:" + cfg.feedbackEmail;
      mail.textContent = cfg.feedbackEmail;
    }
  }

  // Cusdis comments — only inject third-party script after explicit click
  var commentsSection = document.getElementById("comments");
  var commentsWrap = document.getElementById("commentsWrap");
  var commentsNav = document.querySelector('.site-nav a[href="#comments"]');
  if (cfg.cusdisAppId && commentsWrap) {
    if (commentsSection) commentsSection.hidden = false;
    if (commentsNav) commentsNav.style.display = "";

    function loadCusdis_() {
      var gate = document.getElementById("commentsGate");
      if (gate) gate.remove();
      var thread = document.createElement("div");
      thread.id = "cusdis_thread";
      thread.setAttribute("data-host", "https://cusdis.com");
      thread.setAttribute("data-app-id", cfg.cusdisAppId);
      thread.setAttribute("data-page-id", "home");
      thread.setAttribute("data-page-title", "Listing Simulator");
      thread.setAttribute("data-page-url", (cfg.domain || window.location.origin) + "/");
      commentsWrap.appendChild(thread);
      var s = document.createElement("script");
      s.async = true;
      s.defer = true;
      s.src = "https://cusdis.com/js/cusdis.es.js";
      commentsWrap.appendChild(s);
    }

    var loadBtn = document.getElementById("loadCommentsBtn");
    if (loadBtn) {
      loadBtn.addEventListener("click", function () {
        loadCusdis_();
      });
    } else {
      // Fallback if gate markup missing
      loadCusdis_();
    }
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

  // JSON-LD from config (featureList + keywords for SEO; keep UI copy clean)
  var ld = document.getElementById("softwareLd");
  if (ld && cfg.productName) {
    var schema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: cfg.productName,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Windows 10, Windows 11, macOS 11+",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      },
      downloadUrl: downloadUrl.indexOf("http") === 0
        ? downloadUrl
        : ((cfg.domain || window.location.origin) + downloadUrl),
      softwareVersion: cfg.version || "1.0.13",
      description: cfg.seoDescription ||
        "Amazon listing builder and listing optimization software for Windows and Mac. Health Check and Export Health use your catalog’s Amazon rules — flat-file workflow, no Seller Central API required.",
      featureList: cfg.featureList || [],
      keywords: Array.isArray(cfg.seoKeywords)
        ? cfg.seoKeywords.join(", ")
        : (cfg.seoKeywords || "")
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

  // Hero image opens Health Check album (selling-point spine)
  var heroImg = document.querySelector(".hero-visual img");
  var heroAlbum = typeof albumStartIndex.health === "number"
    ? "health"
    : (typeof albumStartIndex["listing-builder"] === "number" ? "listing-builder" : null);
  if (heroImg && heroAlbum) {
    heroImg.style.cursor = "pointer";
    heroImg.addEventListener("click", function () {
      openLightbox(albumStartIndex[heroAlbum]);
    });
  }
})();
