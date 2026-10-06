import { useState } from 'react'
import { licenceMatch, plans, MAIN_SITE } from '../data/content'

function LicenceMatch() {
  const [active, setActive] = useState(1)
  const current = licenceMatch[active]
  const plan = plans.find((p) => p.id === current.plan)

  return (
    <section className="licence" id="licence" aria-labelledby="licence-title">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="licence-title">Which coworking desk does your ADGM licence need?</h2>
          <p>ADGM ties your workspace to your licence type, so the desk space in ADGM you rent matters. Choose your licence to see the plan that usually meets the physical-office requirement.</p>
        </div>

        <div className="licence-grid">
          <div className="licence-list" role="tablist" aria-label="ADGM licence type">
            {licenceMatch.map((l, i) => (
              <button
                key={l.licence}
                type="button"
                role="tab"
                id={`lic-tab-${i}`}
                aria-selected={i === active}
                aria-controls="lic-panel"
                className={`licence-option ${i === active ? 'on' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="lo-licence">{l.licence}</span>
                <span className="lo-need">{l.need}</span>
              </button>
            ))}
          </div>

          <div className="licence-panel" role="tabpanel" id="lic-panel" aria-labelledby={`lic-tab-${active}`}>
            <div className="lp-arch">
              <img key={plan.id} src={plan.image} alt="" width={plan.imgW} height={plan.imgH} loading="lazy" decoding="async" />
            </div>
            <div className="lp-body" key={active}>
              <p className="lp-for">For {current.licence.toLowerCase()}</p>
              <p className="lp-need">{current.need}</p>
              <p className="lp-detail">{current.detail}</p>
              <p className="lp-price">{plan.name} from <strong>{plan.price}</strong> {plan.unit}</p>
              <div className="lp-actions">
                <a className="btn btn-green" href={`#${plan.id}`}>View this plan</a>
                <a className="text-link" href={`${MAIN_SITE}/blog/which-adgm-workspace-fits-you`}>Read the decision guide</a>
              </div>
            </div>
          </div>
        </div>

        <p className="licence-note">
          Hiring? Visa capacity depends on your workspace — see{' '}
          <a href={`${MAIN_SITE}/blog/adgm-coworking-visa-quota-employees-per-desk`}>ADGM coworking visa quota per desk</a>{' '}
          and <a href={`${MAIN_SITE}/blog/adgm-fsra-office-requirements`}>office requirements for FSRA-regulated firms</a>.
        </p>
      </div>
    </section>
  )
}

export default LicenceMatch
