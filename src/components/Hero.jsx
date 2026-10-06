import { images, BUSINESS, MAIN_SITE } from '../data/content'

const ledger = [
  { name: 'Day pass', price: 'AED 100', unit: 'per day', href: '#day-pass' },
  { name: 'Hot desk', price: 'AED 1,000', unit: 'per month', href: '#hot-desk' },
  { name: 'Dedicated desk', price: 'AED 1,150', unit: 'per month', href: '#dedicated-desk' },
  { name: 'Private office', price: 'AED 4,500', unit: 'per month', href: '#private-office' },
]

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-place hl" style={{ '--d': 0 }}>38th floor, Addax Tower, Al Reem Island</p>

          <h1 id="hero-title" className="hero-title hl" style={{ '--d': 1 }}>
            Coworking Space in&nbsp;ADGM
          </h1>

          <p className="hero-lead hl" style={{ '--d': 2 }}>
            Flexible office space in ADGM: rent desk space in ADGM by the day or month, from a flexi
            desk to a private office — with a registered ADGM address, ADGM-ready lease paperwork and
            24/7 access. No deposit, no setup fees.
          </p>

          <div className="hero-ctas hl" style={{ '--d': 3 }}>
            <a className="btn btn-brass" href={`${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi Aegis, I would like to book a free tour of your coworking space in ADGM.')}`} target="_blank" rel="noopener noreferrer">
              Book a free tour
            </a>
            <a className="btn btn-line-light" href="#plans">Compare plans</a>
          </div>

          <dl className="ledger hl" style={{ '--d': 4 }} aria-label="Starting prices">
            {ledger.map((r) => (
              <div key={r.name} className="ledger-row">
                <dt><a href={r.href}>{r.name}</a></dt>
                <dd><span className="ledger-price">{r.price}</span> <span className="ledger-unit">{r.unit}</span></dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="hero-arch">
          <div className="arch-frame">
            <img
              src={images.heroImg}
              alt="Coworking space in ADGM — hot desks with Al Reem Island views at Aegis Coworking, Addax Tower"
              width="1200"
              height="900"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <figcaption className="arch-caption">
            Every dedicated desk includes a registered ADGM business address.{' '}
            <a href={`${MAIN_SITE}/office-space`}>See desk details</a>
          </figcaption>
        </figure>
      </div>

      <div className="hero-terms">
        <p>
          Aegis Coworking is an office space provider in ADGM offering coworking space in Addax Tower and
          on Al Reem Island — hot desk, a flexi desk in ADGM, dedicated desk, private office and
          cheap desk space in ADGM with a day pass from AED 100.
        </p>
      </div>
    </section>
  )
}

export default Hero
