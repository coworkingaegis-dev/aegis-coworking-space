# Coworking Space in ADGM — Aegis Coworking micro-site

One-page React (Vite) site for **https://coworkingspaceinadgm.com**, targeting the keyword
**"coworking space in ADGM"**. Header and footer mirror **[www.aegiscoworking.ae](http://www.aegiscoworking.ae)** and every nav/footer link points back to the main Aegis website.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build + prerender -> dist/
npm run preview    # serve dist/ locally
```

## How prerendering works (same idea as the main site's `scripts/prerender.mjs`)

`npm run build` runs three steps automatically — Vercel runs the same command on every deploy:

1. `vite build` — client bundle
2. `vite build --ssr src/entry-server.jsx` — server bundle used only at build time
3. `node scripts/prerender.mjs`, which:

   * renders the full page to static HTML inside `dist/index.html`, so crawlers and AI bots get all content without running JS
   * injects the Helmet `<title>`, meta description, canonical, Open Graph, geo tags and the JSON-LD `@graph`
     (WebSite, WebPage, BreadcrumbList, Organization, LocalBusiness, Service + OfferCatalog, FAQPage, ItemList of guides)
   * inlines the CSS and preloads the Bodoni Moda / Inter fonts (no render-blocking requests)
   * writes `dist/404.html` (noindex), `dist/sitemap.xml` and `dist/robots.txt` with today's date
   * stamps `llms.txt` and `llms-full.txt` with the build date

## Folder structure

```text
public/            favicons, og-image, llms.txt, llms-full.txt, site.webmanifest
scripts/           prerender.mjs
src/
  data/content.js  ALL copy, prices, FAQs, blog links, sub-keywords — edit here
  components/      Navbar (responsive header + full-screen mobile menu), Footer,
                   Hero, Intro, Plans, LicenceMatch, WhyAegis (why + amenities +
                   steps), Location, Social (reviews, guides, FAQ, final CTA,
                   WhatsApp button), Motion (scroll reveal), Icon
  pages/            CoworkingSpacePage.jsx — Helmet tags + JSON-LD
  App.css           all page, header and footer styles
  index.css         palette tokens + fonts (Bodoni Moda display, Inter body)
```

## Deploy on Vercel

1. Push this folder to a new GitHub repo (e.g. `coworkingaegis-dev/aegis-coworking-space`).

2. Vercel → Add New Project → import the repo.

3. Framework: **Vite**

4. Build command: `npm run build`

5. Output directory: `dist`

6. Project → Settings → Domains → add:

   **`coworkingspaceinadgm.com`**

7. Configure the DNS records required by Vercel at your domain provider.

8. Once the domain is connected, verify that:

   **`https://coworkingspaceinadgm.com`**

   loads the website correctly.

9. Google Search Console: add the domain/subdomain property and submit:

   **`https://coworkingspaceinadgm.com/sitemap.xml`**

10. Do the same in Bing Webmaster Tools.

## SEO Domain Configuration

The micro-site's primary domain is:

**https://coworkingspaceinadgm.com**

The canonical URL should be:

**https://coworkingspaceinadgm.com/**

The sitemap URL should be:

**https://coworkingspaceinadgm.com/sitemap.xml**

The robots.txt URL should be:

**https://coworkingspaceinadgm.com/robots.txt**

The micro-site must use `coworkingspaceinadgm.com` for all of its own:

* Canonical URLs
* Open Graph URLs
* JSON-LD URLs
* WebSite URLs
* WebPage URLs
* Breadcrumb URLs
* LocalBusiness URLs
* Service URLs
* FAQPage URLs
* ItemList URLs
* Sitemap URLs
* Robots.txt sitemap reference
* `llms.txt`
* `llms-full.txt`

## Main Aegis Website

The main Aegis Coworking website remains:

**https://www.aegiscoworking.ae**

Do **not** replace the main Aegis website domain with the micro-site domain.

The header and footer should continue linking to the relevant pages on:

**https://www.aegiscoworking.ae**

The micro-site domain is only:

**https://coworkingspaceinadgm.com**

for the standalone coworking-space-in-ADGM website.

## Updating

* Prices / FAQs / blog links / keywords: `src/data/content.js`
* SEO metadata and structured data: `src/pages/CoworkingSpacePage.jsx`
* Prerendering and generated SEO files: `scripts/prerender.mjs`
* AI-readable content: `public/llms.txt` and `public/llms-full.txt`
* Update `DATE_MODIFIED` in `content.js` whenever you make significant content changes.
* If the domain changes, update all occurrences of the old micro-site domain in the project.
* Keep `www.aegiscoworking.ae` unchanged wherever it is used as the main Aegis website.

## Analytics

GA4:

**`G-8HBJXY181K`**

The same Google Analytics property as the main Aegis website is used. Analytics loads after the page becomes idle — see `src/main.jsx`.

## Final Domain

The live micro-site domain is:

**https://coworkingspaceinadgm.com**

The main Aegis Coworking website is:

**https://www.aegiscoworking.ae**
