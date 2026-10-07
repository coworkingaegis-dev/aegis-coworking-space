import { useState } from 'react'
import { Reveal } from './Motion'
import { plans, extras, MAIN_SITE } from '../data/content'

function PlanCard({ plan, index }) {
  const [term, setTerm] = useState(0)
  const price = plan.terms ? plan.terms[term].price : plan.price
  const note = plan.terms ? plan.terms[term].note : plan.note

  return (
    <Reveal as="article" className={`plan ${plan.popular ? 'plan-popular' : ''}`} delay={index * 80} id={plan.id}>
      <div className="plan-arch">
        <img src={plan.image} alt={plan.alt} width={plan.imgW} height={plan.imgH} loading="lazy" decoding="async" />
      </div>
      {plan.popular && <p className="plan-flag">Most chosen for ADGM licences</p>}
      <h3>{plan.name}</h3>
      <p className="plan-keyword">{plan.keyword}</p>
      <p className="plan-price" aria-live="polite">
        <span key={price} className="plan-amount">{price}</span>
        <span className="plan-unit">{plan.unit}</span>
      </p>
      {plan.terms ? (
        <div className="term-switch" role="group" aria-label="Payment term" style={{ '--count': plan.terms.length }}>
          {plan.terms.map((t, i) => (
            <button key={t.label} type="button" className={i === term ? 'on' : ''} aria-pressed={i === term} onClick={() => setTerm(i)}>
              {t.label}
            </button>
          ))}
          <span className="term-pill" style={{ '--i': term }} aria-hidden="true" />
        </div>
      ) : null}
      <p className="plan-note">{note}</p>
      <ul className="plan-features">
        {plan.features.map((f) => <li key={f}>{f}</li>)}
      </ul>
      <p className="plan-best"><span>Best for</span> {plan.bestFor}</p>
      <a className="plan-cta" href={plan.href}>{plan.cta}</a>
    </Reveal>
  )
}

function Plans() {
  return (
    <section className="plans" id="plans" aria-labelledby="plans-title">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="plans-title">Coworking plans in ADGM, from a day to a private office</h2>
          <p>
            Whether you need cheap desk space in ADGM for a day or a flexi desk in ADGM every month,
            our published rates come with no deposit, no setup fees and free registration. Every plan
            includes WiFi, coffee and the Aegis community in Addax Tower.
          </p>
        </div>

        <div className="plan-grid">
          {plans.map((p, i) => <PlanCard key={p.id} plan={p} index={i} />)}
        </div>

        <div className="extras">
          {extras.map((x) => (
            <a key={x.title} href={x.href} className="extra">
              <img src={x.image} alt={x.alt} width="900" height="675" loading="lazy" decoding="async" />
              <span className="extra-body">
                <span className="extra-title">{x.title} in ADGM</span>
                <span className="extra-price">{x.price}</span>
                <span className="extra-text">{x.text}</span>
                <span className="extra-link">View {x.title.toLowerCase()}</span>
              </span>
            </a>
          ))}
        </div>

        <p className="plans-foot">
          Published monthly rates. A one-time
          AED 1,100 due-diligence fee applies to the dedicated desk; ADGM government fees are separate.
        </p>
      </div>
    </section>
  )
}

export default Plans
