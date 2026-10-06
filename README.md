# Coworking Space in ADGM — Aegis Coworking micro-site

One-page React (Vite) site for **https://coworkingspaceinadgm.aegiscoworking.ae**, targeting the keyword
"coworking space in ADGM". Header and footer mirror www.aegiscoworking.ae and every nav/footer link points back to the main site.

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
   - renders the full page to static HTML inside `dist/index.html`, so crawlers and AI bots get all content without running JS
   - injects the Helmet `<title>`, meta description, canonical, Open Graph, geo tags and the JSON-LD `@graph`
     (WebSite, WebPage, BreadcrumbList, Organization, LocalBusiness, Service + OfferCatalog, FAQPage, ItemList of guides)
   - inlines the CSS and preloads the Bodoni Moda / Inter fonts (no render-blocking requests)
   - writes `dist/404.html` (noindex), `dist/sitemap.xml` and `dist/robots.txt` with today's date
   - stamps `llms.txt` and `llms-full.txt` with the build date

## Folder structure

```
public/            favicons, og-image, llms.txt, llms-full.txt, site.webmanifest
scripts/           prerender.mjs
src/
  data/content.js  ALL copy, prices, FAQs, blog links, sub-keywords — edit here
  components/      Navbar (responsive header + full-screen mobile menu), Footer,
                   Hero, Intro, Plans, LicenceMatch, WhyAegis (why + amenities +
                   steps), Location, Social (reviews, guides, FAQ, final CTA,
                   WhatsApp button), Motion (scroll reveal), Icon
  pages/           CoworkingSpacePage.jsx — Helmet tags + JSON-LD
  App.css          all page, header and footer styles
  index.css        palette tokens + fonts (Bodoni Moda display, Inter body)
```

## Deploy on Vercel

1. Push this folder to a new GitHub repo (e.g. `coworkingaegis-dev/aegis-coworking-space`).
2. Vercel → Add New Project → import the repo. Framework: **Vite**. Build command `npm run build`, output `dist` (defaults).
3. Project → Settings → Domains → add `coworkingspaceinadgm.aegiscoworking.ae`, then add the CNAME record Vercel shows at your DNS provider.
4. Google Search Console: add the subdomain as a property and submit `https://coworkingspaceinadgm.aegiscoworking.ae/sitemap.xml`. Do the same in Bing Webmaster Tools.

## Updating

- Prices / FAQs / blog links / keywords: `src/data/content.js`, then also `public/llms.txt` and `public/llms-full.txt`.
- Bump `DATE_MODIFIED` in `content.js` when you change content.
- Analytics: GA4 `G-8HBJXY181K` (same property as the main site) loads after the page is idle — see `src/main.jsx`.
