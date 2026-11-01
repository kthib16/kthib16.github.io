/** @type {import('next').NextConfig} */
// Static export for GitHub Pages. This assumes the site is served from the root
// of a domain (kthib16.github.io or a custom domain), so no basePath is set.
module.exports = {
  images: { unoptimized: true },
  trailingSlash: true,
}
