import { useEffect, useRef, useState } from 'react'
import aegisLogo from '../assets/aegis-logo-transparent.png'
import { BUSINESS } from '../data/content'

// Header and footer stay on this page: links jump to sections, "Book" opens WhatsApp,
// and the phone number opens WhatsApp on desktop or the dialer on mobile.
export const sections = [
  { label: 'Plans', to: '#plans' },
  { label: 'ADGM Licence', to: '#licence' },
  { label: 'Amenities', to: '#amenities' },
  { label: 'Location', to: '#location' },
  { label: 'FAQ', to: '#faq' }
]

export const BOOK_URL = `${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi Aegis, I would like to book a visit.')}`

const track = (event) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', event, { phone_number: BUSINESS.phoneDisplay, source: 'coworkingspaceinadgm' })
  }
}

// Desktop (mouse/trackpad) → WhatsApp; phone/tablet (touch) → call
export function PhoneLink({ children, onClick, ...rest }) {
  const handle = (e) => {
    const desktop = typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (desktop) {
      e.preventDefault()
      track('whatsapp_click')
      window.open(BUSINESS.whatsapp, '_blank', 'noopener,noreferrer')
    } else {
      track('phone_call_click')
    }
    if (onClick) onClick(e)
  }
  return <a href={BUSINESS.phoneTel} onClick={handle} {...rest}>{children}</a>
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('menu-locked', menuOpen)
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const close = () => setMenuOpen(false)
  const t = menuOpen ? 0 : -1

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'is-open' : ''}`} ref={navRef}>
      <div className="hd-inner">
        <a href="#top" className="hd-brand" aria-label="Back to top" onClick={close}>
          <img src={aegisLogo} alt="" width="240" height="240" decoding="async" />
          <span className="hd-word">Aegis <em>Coworking</em></span>
        </a>

        <nav className="hd-nav" aria-label="On this page">
          <ul>
            {sections.map((s) => <li key={s.to}><a href={s.to}>{s.label}</a></li>)}
          </ul>
        </nav>

        <div className="hd-actions">
          <PhoneLink className="hd-phone">{BUSINESS.phoneDisplay}</PhoneLink>
          <a className="hd-cta" href={BOOK_URL} target="_blank" rel="noopener noreferrer">Book a visit</a>
          <button type="button" className="hd-burger" aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen} aria-controls="hd-mobile" onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span />
          </button>
        </div>
      </div>

      <div className="hd-mobile" id="hd-mobile" aria-hidden={!menuOpen}>
        <nav className="hdm-nav" aria-label="On this page (mobile)">
          {sections.map((s, i) => (
            <a key={s.to} className="hdm-link" style={{ '--n': i }} href={s.to} onClick={close} tabIndex={t}>{s.label}</a>
          ))}
        </nav>
        <div className="hdm-foot">
          <a className="hdm-btn hdm-btn-solid" href={BOOK_URL} target="_blank" rel="noopener noreferrer" onClick={close} tabIndex={t}>Book a visit on WhatsApp</a>
          <div className="hdm-row">
            <PhoneLink className="hdm-btn" tabIndex={t}>Call</PhoneLink>
            <a className="hdm-btn" href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" tabIndex={t}>WhatsApp</a>
          </div>
          <p className="hdm-address">Addax Tower, 3812, Al Reem Island, Abu Dhabi</p>
        </div>
      </div>
    </header>
  )
}

export default Navbar
