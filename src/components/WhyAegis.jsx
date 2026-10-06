import { Reveal } from './Motion'
import Icon from './Icon'
import { whyUs, amenities, steps, images, BUSINESS } from '../data/content'

export function WhyAegis() {
  return (
    <section className="why" aria-labelledby="why-title">
      <div className="wrap why-grid">
        <div className="why-left">
          <h2 id="why-title">Why choose Aegis for coworking in ADGM</h2>
          <p className="why-sub">As an office space provider in ADGM, we offer compliant paperwork, honest pricing and a workspace with a view of the Gulf.</p>
          <figure className="why-arch">
            <img src={images.boardroomImg} alt="Boardroom with Abu Dhabi skyline views at Aegis Coworking business centre in ADGM" width="1024" height="683" loading="lazy" decoding="async" />
          </figure>
        </div>
        <dl className="why-list">
          {whyUs.map((w) => (
            <div key={w.title} className="why-item">
              <dt><Icon name={w.icon} size={22} strokeWidth={1.4} />{w.title}</dt>
              <dd>{w.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export function Amenities() {
  return (
    <section className="amenities" id="amenities" aria-labelledby="amen-title">
      <div className="wrap amen-grid">
        <div className="amen-head">
          <h2 id="amen-title">Everything included in our ADGM coworking space</h2>
          <p>Fully serviced flexible office space in ADGM: reception, cleaning, internet and utilities are part of every membership.</p>
        </div>
        <ul className="amen-list">
          {amenities.map((a) => (
            <li key={a.title}><Icon name={a.icon} size={22} strokeWidth={1.3} />{a.title}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Steps() {
  return (
    <section className="steps" aria-labelledby="steps-title">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="steps-title">Start coworking in ADGM in four steps</h2>
        </div>
        <Reveal as="ol" className="step-list">
          {steps.map((s, i) => (
            <li key={s.title} className="step" style={{ '--i': i }}>
              <span className="step-num" aria-hidden="true">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </Reveal>
        <div className="steps-cta">
          <a className="btn btn-green" href={`${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi Aegis, I would like to book a tour of the coworking space in ADGM.')}`} target="_blank" rel="noopener noreferrer">
            Book your free tour
          </a>
        </div>
      </div>
    </section>
  )
}
