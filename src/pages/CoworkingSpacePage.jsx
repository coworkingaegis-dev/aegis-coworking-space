import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Plans from '../components/Plans'
import LicenceMatch from '../components/LicenceMatch'
import { WhyAegis, Amenities, Steps } from '../components/WhyAegis'
import Location from '../components/Location'
import { Testimonials, FAQ, FinalCTA, WhatsAppFab } from '../components/Social'
import {
  SITE_URL, MAIN_SITE, PAGE_TITLE, PAGE_DESCRIPTION, DATE_PUBLISHED, DATE_MODIFIED,
  BUSINESS, plans, extras, faqs, relatedBlogs,
} from '../data/content'

const OG_IMAGE = `${SITE_URL}/og-image.jpg`
const BUSINESS_ID = `${MAIN_SITE}/#business`

// ---------- JSON-LD (prerendered into <head> at build time) ----------
const toNumber = (aed) => Number(String(aed).replace(/[^0-9.]/g, ''))

const schemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'Coworking Space in ADGM — Aegis Coworking',
      inLanguage: 'en-AE',
      publisher: { '@id': `${MAIN_SITE}/#organization` },
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      inLanguage: 'en-AE',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': BUSINESS_ID },
      primaryImageOfPage: OG_IMAGE,
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      breadcrumb: { '@id': `${SITE_URL}/#breadcrumb` },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#hero-title', '.answer-lead'] },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Aegis Coworking', item: `${MAIN_SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Coworking Space in ADGM', item: `${SITE_URL}/` },
      ],
    },
    {
      '@type': 'Organization',
      '@id': `${MAIN_SITE}/#organization`,
      name: BUSINESS.name,
      url: MAIN_SITE,
      logo: `${MAIN_SITE}/logo.png`,
      sameAs: BUSINESS.sameAs,
    },
    {
      '@type': 'LocalBusiness',
      '@id': BUSINESS_ID,
      name: BUSINESS.name,
      alternateName: 'Aegis Coworking',
      description: 'Coworking space and business centre in ADGM, Addax Tower, Al Reem Island, Abu Dhabi — hot desks, dedicated desks, private offices, virtual offices, meeting rooms and day passes.',
      url: MAIN_SITE,
      logo: `${MAIN_SITE}/logo.png`,
      image: [OG_IMAGE, `${MAIN_SITE}/og-image.jpg`],
      telephone: '+971503926316',
      email: BUSINESS.email,
      priceRange: 'AED 100 – AED 4,500',
      currenciesAccepted: 'AED',
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS.street,
        addressLocality: 'Abu Dhabi',
        addressRegion: 'Abu Dhabi',
        addressCountry: 'AE',
      },
      geo: { '@type': 'GeoCoordinates', latitude: BUSINESS.lat, longitude: BUSINESS.lng },
      hasMap: BUSINESS.mapsUrl,
      openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      }],
      areaServed: [
        { '@type': 'Place', name: 'Abu Dhabi Global Market (ADGM)' },
        { '@type': 'Place', name: 'Al Reem Island' },
        { '@type': 'City', name: 'Abu Dhabi' },
      ],
      amenityFeature: ['High-speed WiFi', 'Meeting rooms', 'Premium coffee & tea', 'Print & scan', '24/7 access', 'Mail handling', 'Reception']
        .map((name) => ({ '@type': 'LocationFeatureSpecification', name, value: true })),
      sameAs: BUSINESS.sameAs,
    },
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/#service`,
      name: 'Coworking Space in ADGM',
      serviceType: 'Coworking space',
      provider: { '@id': BUSINESS_ID },
      areaServed: { '@type': 'Place', name: 'Abu Dhabi Global Market (ADGM), Abu Dhabi' },
      description: PAGE_DESCRIPTION,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Coworking plans in ADGM',
        itemListElement: plans.map((p) => ({
          '@type': 'Offer',
          name: p.name,
          url: p.href,
          price: toNumber(p.price),
          priceCurrency: 'AED',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: toNumber(p.price),
            priceCurrency: 'AED',
            unitText: p.unit.includes('day') ? 'DAY' : 'MONTH',
          },
          availability: 'https://schema.org/InStock',
          itemOffered: { '@type': 'Service', name: `${p.name} — coworking space in ADGM` },
        })).concat(extras.map((x) => ({
          '@type': 'Offer',
          name: x.title,
          url: x.href,
          itemOffered: { '@type': 'Service', name: `${x.title} in ADGM` },
        }))),
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

function CoworkingSpacePage() {
  return (
    <>
      <Helmet>
        <html lang="en-AE" />
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <link rel="alternate" hrefLang="en-ae" href={`${SITE_URL}/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />

        {/* Local SEO */}
        <meta name="geo.region" content="AE-AZ" />
        <meta name="geo.placename" content="Al Reem Island, Abu Dhabi" />
        <meta name="geo.position" content={`${BUSINESS.lat};${BUSINESS.lng}`} />
        <meta name="ICBM" content={`${BUSINESS.lat}, ${BUSINESS.lng}`} />

        {/* Open Graph / Twitter */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Aegis Coworking" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:alt" content="Aegis Coworking — coworking space in ADGM, Addax Tower, Al Reem Island" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">{JSON.stringify(schemaGraph)}</script>
      </Helmet>

      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Intro />
        <Plans />
        <LicenceMatch />
        <WhyAegis />
        <Amenities />
        <Steps />
        <Location />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}

export default CoworkingSpacePage
