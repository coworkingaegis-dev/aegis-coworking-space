import { useEffect, useRef, useState } from 'react'
import aegisLogo from '../assets/aegis-logo-transparent.png'
import { MAIN_SITE, BUSINESS } from '../data/content'

// Every link points at www.aegiscoworking.ae so this micro-site passes
// users (and link equity) back to the main Aegis site.
const workspaces = [
  { label: 'Office Space', note: 'Hot & dedicated desks', to: `${MAIN_SITE}/office-space` },
  { label: 'Private Office', note: 'Lockable suites for teams', to: `${MAIN_SITE}/private-office` },
  { label: 'Virtual Office', note: 'Registered ADGM address', to: `${MAIN_SITE}/virtual-office` },
  { label: 'Meeting Room', note: 'Reserve Your Workspace', to: `${MAIN_SITE}/meeting-room` },
  { label: 'Day Pass', note: 'From AED 100, no commitment', to: `${MAIN_SITE}/day-pass` },
  { label: 'Addax Tower Business Centre', note: 'Our building on Al Reem Island', to: `${MAIN_SITE}/addax-tower-al-reem-island` },
]

const audiences = [
  { label: 'Freelancers', note: 'Flexible desks for solo professionals', to: `${MAIN_SITE}/office-space` },
  { label: 'Startups', note: 'From one desk to a full team', to: `${MAIN_SITE}/office-space` },
  { label: 'Individuals', note: 'Workspace with no long-term commitment', to: `${MAIN_SITE}/day-pass` },
  { label: 'Small Businesses', note: 'Dedicated space to run and scale', to: `${MAIN_SITE}/private-office` },
]

const links = [
  { label: 'Hot Deals', to: `${MAIN_SITE}/pricing` },
  { label: 'Blog', to: `${MAIN_SITE}/blogs` },
  { label: 'About', to: `${MAIN_SITE}/about` },
  { label: 'Contact', to: `${MAIN_SITE}/contact` },
]

const groups = [
  { id: 'workspaces', label: 'Workspaces', items: workspaces },
  { id: 'serve', label: 'Who We Serve', items: audiences },
]

function trackPhone() {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'phone_call_click', { phone_number: BUSINESS.phoneDisplay, source: 'coworkingspaceinadgm' })
  }
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState(null) // desktop dropdown
  const [mobileGroup, setMobileGroup] = useState('workspaces') // mobile accordion
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock page scroll behind the mobile menu; Esc closes everything.
  useEffect(() => {
    document.documentElement.classList.toggle('menu-locked', menuOpen)
    const onKey = (e) => { if (e.key === 'Escape') { setMenuOpen(false); setOpenGroup(null) } }
    const onClick = (e) => { if (navRef.current && !navRef.current.contains(e.target)) setOpenGroup(null) }
    document.addEventListener('keydown', onKey)
    document.addEventListener('click', onClick)
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('click', onClick) }
  }, [menuOpen])

  const close = () => { setMenuOpen(false); setOpenGroup(null) }

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'is-open' : ''}`} ref={navRef}>
      <div className="hd-inner">
        <a href={`${MAIN_SITE}/`} className="hd-brand" aria-label="Aegis Coworking home">
          <img src={aegisLogo} alt="" width="240" height="240" decoding="async" />
          <span className="hd-word">Aegis <em>Coworking</em></span>
        </a>

        <nav className="hd-nav" aria-label="Aegis Coworking">
          <ul>
            <li><a href={`${MAIN_SITE}/`}>Home</a></li>
            {groups.map((g) => (
              <li
                key={g.id}
                className={`hd-has-menu ${openGroup === g.id ? 'is-active' : ''}`}
                onMouseEnter={() => setOpenGroup(g.id)}
                onMouseLeave={() => setOpenGroup(null)}
              >
                <button
                  type="button"
                  aria-expanded={openGroup === g.id}
                  aria-controls={`hd-menu-${g.id}`}
                  onClick={() => setOpenGroup(openGroup === g.id ? null : g.id)}
                >
                  {g.label}
                  <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M1.5 3.5 5 7l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" /></svg>
                </button>
                <div className="hd-menu" id={`hd-menu-${g.id}`}>
                  <ul>
                    {g.items.map((it) => (
                      <li key={it.label}>
                        <a href={it.to} onClick={close}>
                          <span className="hd-menu-label">{it.label}</span>
                          <span className="hd-menu-note">{it.note}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
            {links.map((l) => <li key={l.label}><a href={l.to}>{l.label}</a></li>)}
          </ul>
        </nav>

        <div className="hd-actions">
          <a className="hd-phone" href={BUSINESS.phoneTel} onClick={trackPhone}>{BUSINESS.phoneDisplay}</a>
          <a className="hd-cta" href={`${MAIN_SITE}/contact`}>Request a quote</a>
          <button
            type="button"
            className="hd-burger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="hd-mobile"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span /><span />
          </button>
        </div>
      </div>

      {/* Mobile / tablet full-screen menu */}
      <div className="hd-mobile" id="hd-mobile" aria-hidden={!menuOpen}>
        <nav className="hdm-nav" aria-label="Aegis Coworking mobile">
          <a className="hdm-link" style={{ '--n': 0 }} href={`${MAIN_SITE}/`} onClick={close} tabIndex={menuOpen ? 0 : -1}>Home</a>
          {groups.map((g, gi) => (
            <div key={g.id} className={`hdm-group ${mobileGroup === g.id ? 'is-open' : ''}`} style={{ '--n': gi + 1 }}>
              <button
                type="button"
                className="hdm-link hdm-toggle"
                aria-expanded={mobileGroup === g.id}
                onClick={() => setMobileGroup(mobileGroup === g.id ? null : g.id)}
                tabIndex={menuOpen ? 0 : -1}
              >
                {g.label}
                <span className="hdm-plus" aria-hidden="true" />
              </button>
              <div className="hdm-panel">
                <ul>
                  {g.items.map((it) => (
                    <li key={it.label}>
                      <a href={it.to} onClick={close} tabIndex={menuOpen && mobileGroup === g.id ? 0 : -1}>
                        {it.label}<small>{it.note}</small>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          {links.map((l, i) => (
            <a key={l.label} className="hdm-link" style={{ '--n': i + 3 }} href={l.to} onClick={close} tabIndex={menuOpen ? 0 : -1}>{l.label}</a>
          ))}
        </nav>
        <div className="hdm-foot">
          <a className="hdm-btn hdm-btn-solid" href={`${MAIN_SITE}/contact`} onClick={close} tabIndex={menuOpen ? 0 : -1}>Request a quote</a>
          <div className="hdm-row">
            <a className="hdm-btn" href={BUSINESS.phoneTel} onClick={trackPhone} tabIndex={menuOpen ? 0 : -1}>Call</a>
            <a className="hdm-btn" href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" tabIndex={menuOpen ? 0 : -1}>WhatsApp</a>
          </div>
          <p className="hdm-address">Addax Tower, 3812, Al Reem Island, Abu Dhabi</p>
        </div>
      </div>
    </header>
  )
}

export default Navbar
