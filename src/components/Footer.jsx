import aegisLogo from '../assets/aegis-logo-transparent.png'
import { MAIN_SITE, BUSINESS } from '../data/content'

const spaces = [
  ['Office Space', '/office-space'],
  ['Private Office', '/private-office'],
  ['Virtual Office', '/virtual-office'],
  ['Meeting Room', '/meeting-room'],
  ['Day Pass', '/day-pass'],
]
const company = [
  ['Home', '/'],
  ['Hot Deals', '/pricing'],
  ['Blog', '/blogs'],
  ['About Us', '/about'],
  ['Addax Tower Business Centre', '/addax-tower-al-reem-island'],
  ['Contact Us', '/contact'],
]

const socials = [
  {
    label: 'Instagram', href: 'https://www.instagram.com/aegis.coworking/',
    icon: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r=".9" fill="currentColor" stroke="none" /></>,
  },
  {
    label: 'LinkedIn', href: 'https://www.linkedin.com/company/aegis-coworking/',
    icon: <><path d="M7 10v7M7 7v.01M11 17v-4a2.5 2.5 0 0 1 5 0v4M11 10v7" /><rect x="3" y="3" width="18" height="18" rx="3" /></>,
  },
  {
    label: 'Facebook', href: 'https://www.facebook.com/aegis.coworking',
    icon: <><rect x="3" y="3" width="18" height="18" rx="5" /><path d="M14.5 8H13a2 2 0 0 0-2 2v11M9 13h5" /></>,
  },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="ft-inner">
        <div className="ft-grid">
          <div className="ft-brand">
            <a href={`${MAIN_SITE}/`} className="ft-logo" aria-label="Aegis Coworking home">
              <img src={aegisLogo} alt="" width="240" height="240" loading="lazy" decoding="async" />
              <span>Aegis <em>Coworking</em></span>
            </a>
            <p className="ft-about">
  Addax Tower, Al Reem Island, Abu Dhabi.
</p>
            <ul className="ft-social">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`Aegis Coworking on ${s.label}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{s.icon}</svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className="ft-col" aria-label="Our spaces">
            <h2>Our spaces</h2>
            <ul>{spaces.map(([l, p]) => <li key={l}><a href={`${MAIN_SITE}${p}`}>{l}</a></li>)}</ul>
          </nav>

          <nav className="ft-col" aria-label="Company">
            <h2>Company</h2>
            <ul>{company.map(([l, p]) => <li key={l}><a href={`${MAIN_SITE}${p}`}>{l}</a></li>)}</ul>
          </nav>

          <div className="ft-col ft-contact">
            <h2>Visit us</h2>
            <address>
              <p>{BUSINESS.street},<br />{BUSINESS.city}, {BUSINESS.country}</p>
              <p><a href={BUSINESS.phoneTel}>{BUSINESS.phoneDisplay}</a></p>
              <p><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></p>
            </address>
            <dl className="ft-hours">
              <div><dt>Members</dt><dd>24/7 access</dd></div>
              <div><dt>Tours</dt><dd>Mon–Fri, 9:00 AM–6:00 PM</dd></div>
            </dl>
          </div>
        </div>

        <div className="ft-bottom">
          <p>© 2026 Aegis Coworking. All rights reserved.</p>
          <p><a href={`${MAIN_SITE}/privacy-policy`}>Privacy Policy</a><span aria-hidden="true">/</span>Terms &amp; Conditions</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
