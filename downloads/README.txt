# Downloads — GitHub Releases (not this folder)

Browser download buttons on the site point at GitHub Releases latest assets:

  https://github.com/sdfghjmxzx/listing-simulator-website/releases/latest/download/<filename>

Configured in js/site-config.js:

  downloadSource: "github"
  githubReleaseLatestBase: "https://github.com/.../releases/latest/download"
  downloadFile / downloadFileMac: filenames matching Release assets

Do not upload installers into this folder for Netlify — it wastes bandwidth.
Lifetime download counts on the site come from the GitHub Releases API (asset download_count).
