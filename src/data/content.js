// ---------------------------------------------------------------------------
// Single source of truth for the "Coworking Space in ADGM" micro-site.
// Every price, fact and URL here is taken from www.aegiscoworking.ae.
// Update this file (not the components) when pricing or blogs change.
// ---------------------------------------------------------------------------

import heroImg from '../assets/coworking-space-adgm-addax-tower.webp'
import hotDeskImg from '../assets/aegis-coworking-hot-desk-ADGM.webp'
import dedicatedDeskImg from '../assets/Dedicated-desk-ADGM-Abu-Dhabi.webp'
import privateOfficeImg from '../assets/aegis-coworking-private-office-ADGM.webp'
import dayPassImg from '../assets/aegis-coworking-day-pass-adgm.webp'
import meetingRoomImg from '../assets/meeting-room-adgm-abu-dhabi.webp'
import virtualOfficeImg from '../assets/aegis-coworking-virtual-office-ADGM-abu-dhabi.webp'
import boardroomImg from '../assets/Coworking_space_ADGM_AbuDhabi.webp'

export const SITE_URL = 'https://coworkingspaceinadgm.com'
export const MAIN_SITE = 'https://www.aegiscoworking.ae'
export const PAGE_TITLE = 'Coworking Space in ADGM from AED 1,000/month | Aegis Coworking'
export const PAGE_DESCRIPTION =
  'Coworking space in ADGM at Addax Tower, Al Reem Island. Hot desk from AED 1,000/month, day pass AED 100, ADGM-compliant desks & 24/7 access. Book a free tour.'
export const DATE_PUBLISHED = '2026-10-05'
export const DATE_MODIFIED = '2026-10-05'

export const BUSINESS = {
  name: 'Aegis Coworking - ADGM',
  phoneDisplay: '+971 50 392 6316',
  phoneTel: 'tel:+971503926316',
  whatsapp: 'https://wa.me/971503926316',
  email: 'contact@aegiscoworking.ae',
  street: 'Addax Tower, 3812, Al Reem Island, RT3',
  city: 'Abu Dhabi',
  country: 'United Arab Emirates',
  fullAddress: 'Addax Tower, 3812, Al Reem Island, RT3, Abu Dhabi, United Arab Emirates',
  lat: 24.4989303,
  lng: 54.4031693,
  mapsUrl: 'https://www.google.com/maps/place/Aegis+Coworking+Space+ADGM/@24.4989303,54.4031693,17z',
  mapsEmbed: 'https://www.google.com/maps?q=Aegis+Coworking+Space+ADGM,+Addax+Tower,+Al+Reem+Island,+Abu+Dhabi&ll=24.4989303,54.4031693&z=16&output=embed',
  sameAs: [
    'https://www.linkedin.com/company/aegis-coworking/',
    'https://www.instagram.com/aegis.coworking/',
    'https://www.facebook.com/aegis.coworking',
  ],
}

export const images = { heroImg, boardroomImg, meetingRoomImg, virtualOfficeImg }

// In-page section nav (one-page site, so these are anchors)
export const sections = [
  { id: 'plans', label: 'Plans' },
  { id: 'licence', label: 'ADGM Licence' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'location', label: 'Location' },
  { id: 'guides', label: 'Guides' },
  { id: 'faq', label: 'FAQ' },
]

// Sub-keywords (from aegiscoworking.ae keyword map + llms-full.txt topics)
export const subKeywords = [
  'Coworking space in ADGM',
  'Coworking space Addax Tower',
  'Coworking space Al Reem Island',
  'Coworking space Abu Dhabi',
  'Shared office space Abu Dhabi',
  'Hot desk ADGM',
  'Flexi desk ADGM',
  'Dedicated desk ADGM',
  'Cheapest coworking space in ADGM',
  'Business centre ADGM',
  'Day pass coworking Abu Dhabi',
  'ADGM registered business address',
  'Desk space in ADGM',
  'Rent desk space in ADGM',
  'Flexi desk in ADGM',
  'Cheap desk space in ADGM',
  'Flexible office space in ADGM',
  'Office space provider in ADGM',
]

export const heroStats = [
  { value: 100, prefix: 'AED ', suffix: '', label: 'Day pass, no commitment' },
  { value: 1000, prefix: 'AED ', suffix: '', label: 'Hot desk per month' },
  { value: 24, prefix: '', suffix: '/7', label: 'Access for desk members' },
]

export const plans = [
  {
    id: 'day-pass',
    name: 'Coworking Day Pass',
    keyword: 'Day pass coworking Abu Dhabi',
    image: dayPassImg,
    imgW: 900,
    imgH: 519,
    alt: 'Coworking day pass workspace at Aegis Coworking in ADGM, Abu Dhabi',
    price: 'AED 100',
    unit: '/ day',
    note: 'AED 150 for 24-hour access',
    bestFor: 'Freelancers, travellers and anyone trying ADGM coworking',
    features: ['Hot desk access 9 AM–6 PM', 'High-speed WiFi & print/scan', 'Premium coffee & tea', 'No lease or membership'],
    href: `${MAIN_SITE}/day-pass`,
    cta: 'Book a day pass',
  },
  {
    id: 'hot-desk',
    name: 'Hot Desk (Flexi Desk)',
    keyword: 'Hot desk ADGM',
    image: hotDeskImg,
    imgW: 900,
    imgH: 675,
    alt: 'Hot desk and flexi desk coworking area at Aegis Coworking, Addax Tower ADGM',
    price: 'AED 1,000',
    unit: '/ month',
    note: 'Flexible monthly membership',
    bestFor: 'Remote workers, consultants, SPV and holding-company flexi-desk needs',
    features: ['Any open desk in the coworking lounge', 'Meeting room credits', 'Community & networking', 'No long-term commitment'],
    href: `${MAIN_SITE}/pricing`,
    cta: 'See hot desk deals',
  },
  {
    id: 'dedicated-desk',
    name: 'Dedicated Desk',
    keyword: 'Dedicated desk ADGM',
    image: dedicatedDeskImg,
    imgW: 900,
    imgH: 675,
    alt: 'Dedicated desk with ADGM registered address at Aegis Coworking, Al Reem Island',
    price: 'AED 1,150',
    unit: '/ month',
    popular: true,
    bestFor: 'ADGM operating licences incl. Tech Start-Up, startups and SMEs',
    features: ['Your own permanent, furnished desk', 'Registered ADGM business address', 'ADGM-compliant lease agreement', '24/7 secure access & lockable storage'],
    href: `${MAIN_SITE}/office-space`,
    cta: 'Reserve a dedicated desk',
  },
  {
    id: 'private-office',
    name: 'Private Office',
    keyword: 'Private office ADGM',
    image: privateOfficeImg,
    imgW: 900,
    imgH: 675,
    alt: 'Furnished lockable private office inside the Aegis coworking space, ADGM Addax Tower',
    price: 'AED 4,500',
    unit: '/ month',
    note: 'Teams of 1–20+',
    bestFor: 'FSRA-regulated firms, growing teams and client-facing businesses',
    features: ['Lockable furnished suite', 'Reception & mail handling', 'Registered ADGM business address', '24/7 access & meeting rooms'],
    href: `${MAIN_SITE}/private-office`,
    cta: 'Tour private office',
  },
]

export const extras = [
  {
    title: 'Meeting Room',
    text: 'Book by the hour for client meetings, interviews and board meetings — open to members and non-members.',
    image: meetingRoomImg,
    alt: 'Meeting room for hourly hire at Aegis Coworking in ADGM, Abu Dhabi',
    href: `${MAIN_SITE}/meeting-room`,
    price: 'Hourly booking',
  },
  {
    title: 'Virtual Office',
    text: 'A registered ADGM address with mail handling for company registration and licence renewal — upgrade to a desk any time.',
    image: virtualOfficeImg,
    alt: 'Virtual office with registered ADGM business address at Aegis Coworking',
    href: `${MAIN_SITE}/virtual-office`,
    price: 'From AED 292 / month',
  },
]

// What workspace does each ADGM licence type usually need?
// (Mirrors the guidance in the aegiscoworking.ae homepage FAQ.)
export const licenceMatch = [
  {
    licence: 'SPV or holding company',
    need: 'Flexi desk',
    plan: 'hot-desk',
    detail: 'Special purpose vehicles and holding companies typically satisfy ADGM with a flexi-desk arrangement.',
  },
  {
    licence: 'Tech Start-Up & most operating licences',
    need: 'Dedicated desk',
    plan: 'dedicated-desk',
    detail: 'Most ADGM operating licences, including the Tech Start-Up licence, call for a dedicated desk with an ADGM-ready lease.',
  },
  {
    licence: 'FSRA-regulated activity',
    need: 'Private office',
    plan: 'private-office',
    detail: 'Firms regulated by the FSRA generally need a private, lockable office rather than open coworking.',
  },
  {
    licence: 'No licence — just need a desk',
    need: 'Day pass or hot desk',
    plan: 'day-pass',
    detail: 'Working for the day or the month? Use a day pass or hot desk with no lease and no paperwork.',
  },
]

export const whyUs = [
  { icon: 'pin', title: 'Inside ADGM', text: 'Addax Tower on Al Reem Island sits within the ADGM jurisdiction, so your desk and address are ADGM-compliant.' },
  { icon: 'doc', title: 'ADGM-ready paperwork', text: 'Lease and membership agreements suitable for company registration and licence renewal, with AccessRP lease registration.' },
  { icon: 'tag', title: 'Transparent pricing', text: 'No deposit, no setup or admin fees and free registration. A one-time AED 1,200 due-diligence fee applies to dedicated desks; ADGM fees are separate.' },
  { icon: 'key', title: '24/7 access', text: 'Dedicated desk and private office members get secure round-the-clock building access.' },
  { icon: 'arrows', title: 'Upgrade any time', text: 'Move from day pass to hot desk, dedicated desk or private office at preferential rates as you grow.' },
  { icon: 'people', title: 'Business community', text: 'Work alongside founders, consultants and finance professionals building in Abu Dhabi.' },
]

export const amenities = [
  { icon: 'wifi', title: 'High-speed fibre WiFi' },
  { icon: 'coffee', title: 'Premium coffee & tea' },
  { icon: 'video', title: 'Video conference rooms' },
  { icon: 'chair', title: 'Premium ergonomic chairs' },
  { icon: 'print', title: 'Print & scan' },
  { icon: 'mail', title: 'Mail handling & reception' },
  { icon: 'kitchen', title: 'Kitchen & breakout lounge' },
  { icon: 'waves', title: 'Sea views from the 38th floor' },
  { icon: 'gym', title: 'Fitness access' },
  { icon: 'sun', title: 'Beach nearby' },
  { icon: 'shield', title: 'Secure building access' },
  { icon: 'broom', title: 'Professional cleaning' },
]

export const steps = [
  { title: 'Choose your desk', text: 'Day pass, hot desk, dedicated desk or private office — pick what your work or ADGM licence needs.' },
  { title: 'Book a free tour', text: 'Visit Addax Tower Monday to Friday, 9 AM–6 PM, or ask for a video walkthrough on WhatsApp.' },
  { title: 'Complete onboarding', text: 'Quick KYC and due diligence, then we issue your ADGM-ready membership or lease documents.' },
  { title: 'Start working', text: 'Collect your access card and settle in — WiFi, coffee and meeting rooms are ready.' },
]

export const nearby = [
  'ADGM Square & Al Maryah Island financial district',
  'Banks, restaurants and cafés on Al Reem Island',
  'Waterfront promenade and beach',
  'Quick access to Abu Dhabi city centre',
]

// Real reviews shown on aegiscoworking.ae
export const testimonials = [
  { quote: 'I was specifically looking for the cheapest coworking space in ADGM and wanted a privacy environment rather than just a desk. Aegis offered a good balance of price, location, and facilities.', name: 'Naveeda Haseeb', role: 'Startup Founder' },
  { quote: 'We were comparing affordable coworking space in ADGM and found Aegis to be a very practical choice. The workspace feels professional while keeping costs affordable.', name: 'John Paints', role: 'Software Analyst' },
  { quote: 'I needed the license and a space for one of my team members and they did it all within a week. My team member loved the space.', name: 'Ubaid Zia', role: 'Startup Founder' },
  { quote: 'A convenient workspace in Abu Dhabi for startups and growing companies. The flexible options, meeting room and hot desk helped us avoid the commitment of a traditional office.', name: 'Kasim Malikkandy', role: 'Consultant' },
  { quote: 'For businesses looking for a low cost office in ADGM, Aegis provides flexible office space and a professional seating. The team made the setup process very easy.', name: 'Haseeb Awan', role: 'Entrepreneur' },
  { quote: 'We needed a professional business address in Abu Dhabi without committing to a large traditional office, and Aegis provided a practical solution.', name: 'Uzair Tahir', role: 'Tech Startup Founder' },
]

// Blog articles on aegiscoworking.ae that target coworking-space intent.
export const relatedBlogs = [
  { slug: 'adgm-coworking-space-cost-2026', title: 'How Much Does an ADGM Coworking Space Cost in 2026?', tag: 'Pricing', excerpt: 'A full breakdown of desk, office and hidden costs so you can budget your ADGM workspace properly.' },
  { slug: 'affordable-coworking-al-reem-island-adgm', title: 'Coworking Space on Al Reem Island: Prices & Options', tag: 'Location', excerpt: 'What coworking on Al Reem Island costs and which options suit freelancers, startups and teams.' },
  { slug: 'private-office-vs-coworking-adgm-the-complete-cost-privacy-guide', title: 'Private Office vs Coworking ADGM: Cost & Privacy Guide', tag: 'Compare', excerpt: 'When open coworking is enough, and when privacy or regulation makes a private office worth it.' },
  { slug: 'which-adgm-workspace-fits-you', title: 'Which ADGM Workspace Fits You? A Decision Guide', tag: 'Guide', excerpt: 'Match your licence, team size and budget to the right desk or office in minutes.' },
  { slug: 'adgm-coworking-visa-quota-employees-per-desk', title: 'ADGM Coworking Visa Quota: Visas Per Desk Explained', tag: 'Visas', excerpt: 'How many employee visas a coworking desk supports in ADGM, and how to plan for hiring.' },
  { slug: 'adgm-dedicated-desk-visa-capacity-vs-seating', title: 'Hot-Desking a Team in ADGM: How Many Seats Do You Need?', tag: 'Teams', excerpt: 'Visa capacity versus real seating — how to size a coworking setup for your team.' },
  { slug: 'adgm-coworking-space-affordable-options-for-startups-and-freelancers', title: 'Freelancing in ADGM: Licence, Desk & Monthly Costs', tag: 'Freelancers', excerpt: 'The licence, the desk and the real monthly cost of freelancing from ADGM.' },
  { slug: 'flexible-workspace-adgm-startups', title: 'Flexible Workspace for ADGM Startups: Why It Beats a Lease', tag: 'Startups', excerpt: 'Why early-stage companies choose flexible coworking over a long traditional lease.' },
  { slug: 'day-pass-coworking-abu-dhabi-your-flexible-workday-solved', title: 'When Is a Coworking Day Pass Worth It?', tag: 'Day Pass', excerpt: 'Who gets the most from a day pass, and when a monthly desk becomes better value.' },
].map((b) => ({ ...b, url: `${MAIN_SITE}/blog/${b.slug}` }))

// FAQ — `a` is plain text (used for FAQPage schema); `links` are inline
// links rendered in the visible answer.
export const faqs = [
  {
    q: 'How much does a coworking space in ADGM cost at Aegis?',
    a: 'At Aegis Coworking a day pass costs AED 100 (9 AM–6 PM) or AED 150 for 24 hours, a hot desk (flexi desk) is AED 1,000 per month, a dedicated desk starts at AED 1,150 per month and a private office starts at AED 4,500 per month.',
    link: { text: 'Read the full ADGM coworking cost guide for 2026', url: `${MAIN_SITE}/blog/adgm-coworking-space-cost-2026` },
  },
  {
    q: 'Where is the Aegis coworking space in ADGM located?',
    a: 'Aegis Coworking is at Addax Tower, 3812, Al Reem Island, RT3, Abu Dhabi, United Arab Emirates — inside the Abu Dhabi Global Market (ADGM) jurisdiction, with sea views from the 38th floor.',
    link: { text: 'Learn about the Addax Tower business centre', url: `${MAIN_SITE}/addax-tower-al-reem-island` },
  },
  {
    q: 'Is Al Reem Island part of ADGM?',
    a: 'Yes. Abu Dhabi Global Market covers Al Maryah Island and Al Reem Island, so a coworking desk in Addax Tower on Al Reem Island is within ADGM.',
    link: { text: 'Is Al Reem Island part of ADGM? Full answer', url: `${MAIN_SITE}/blog/is-al-reem-island-part-of-adgm` },
  },
  {
    q: 'Can I register an ADGM company with a coworking desk?',
    a: 'Yes. Dedicated desks, private offices and virtual offices at Aegis include a registered business address and ADGM-compliant documents suitable for company registration and licence renewal. Most operating licences, including Tech Start-Up, need a dedicated desk; FSRA-regulated firms generally need a private office.',
    link: { text: 'What is the minimum office you need for an ADGM licence?', url: `${MAIN_SITE}/blog/low-cost-office-adgm-budget-friendly-workspace-solutions-in-abu-dhabi` },
  },
  {
    q: 'What is the difference between a hot desk and a dedicated desk?',
    a: 'A hot desk (flexi desk) lets you use any open desk in the shared coworking area on a flexible monthly membership. A dedicated desk is your own permanent desk with lockable storage, 24/7 access and a registered ADGM business address.',
    link: { text: 'ADGM Tech Start-Up licence: dedicated desk or flexi desk?', url: `${MAIN_SITE}/blog/adgm-tech-startup-licence-dedicated-desk` },
  },
  {
    q: 'What is the cheapest coworking option in ADGM?',
    a: 'The Aegis Coworking Day Pass is the cheapest desk space in ADGM at AED 100 for a 9 AM–6 PM workday, with no lease or commitment. For monthly use, a flexi desk in ADGM (hot desk) at AED 1,000 per month is the most affordable membership.',
    link: { text: 'Explore the coworking day pass', url: `${MAIN_SITE}/day-pass` },
  },
  {
    q: 'Are there hidden fees or a deposit?',
    a: 'No deposit, setup fees, admin fees or outgoings, and registration is free. A one-time AED 1,200 due-diligence fee applies to the dedicated desk, and ADGM government fees are charged separately.',
    link: { text: 'See current offers', url: `${MAIN_SITE}/pricing` },
  },
  {
    q: 'Is 24/7 access available?',
    a: 'Yes. Dedicated desk and private office members have secure 24/7 access. Day pass holders can choose 9 AM–6 PM (AED 100) or 24-hour access (AED 150).',
  },
  {
    q: 'Can I visit before signing up?',
    a: 'Yes. Free tours run Monday to Friday, 9 AM–6 PM. Call or WhatsApp +971 50 392 6316 or email contact@aegiscoworking.ae to book.',
    link: { text: 'Contact Aegis Coworking', url: `${MAIN_SITE}/contact` },
  },
]
