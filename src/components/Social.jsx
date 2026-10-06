import { useState } from 'react'
import { testimonials, relatedBlogs, faqs, BUSINESS, MAIN_SITE } from '../data/content'

export function Testimonials() {
  const [i, setI] = useState(0)
  const go = (d) => setI((i + d + testimonials.length) % testimonials.length)

  return (
    <section className="reviews" aria-labelledby="reviews-title">
      <div className="wrap reviews-grid">
        <h2 id="reviews-title">What members say about coworking at Aegis</h2>
        <div className="review-stack" aria-live="polite">
          {testimonials.map((r, n) => (
            <figure key={r.name} className={`review ${n === i ? 'is-active' : ''}`} aria-hidden={n === i ? undefined : 'true'}>
              <blockquote><p>{r.quote}</p></blockquote>
              <figcaption><strong>{r.name}</strong>, {r.role}</figcaption>
            </figure>
          ))}
        </div>
        <div className="review-nav">
          <button type="button" onClick={() => go(-1)} aria-label="Previous review">
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M12.5 4 6.5 10l6 6" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
          </button>
          <span className="review-count">{i + 1} of {testimonials.length}</span>
          <button type="button" onClick={() => go(1)} aria-label="Next review">
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="m7.5 4 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export function Blogs() {
  return (
    <section className="blogs" id="guides" aria-labelledby="guides-title">
      <div className="wrap">
        <div className="sec-head sec-head-split">
          <h2 id="guides-title">Guides on coworking space in ADGM</h2>
          <p>Straight answers on cost, licences, visas and finding cheap desk space in ADGM, from the Aegis Coworking blog. <a href={`${MAIN_SITE}/blogs`}>All articles</a></p>
        </div>
        <ul className="blog-list">
          {relatedBlogs.map((b) => (
            <li key={b.slug}>
              <a href={b.url}>
                <span className="blog-tag">{b.tag}</span>
                <span className="blog-title">{b.title}</span>
                <span className="blog-excerpt">{b.excerpt}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function FAQ() {
  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <div className="wrap faq-grid">
        <div className="faq-head">
          <h2 id="faq-title">Coworking space in ADGM: frequently asked questions</h2>
          <p>Not answered here? Message us on WhatsApp — we usually reply within the hour during business hours.</p>
          <a className="btn btn-green" href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer">Ask on WhatsApp</a>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <details key={f.q} className="faq-item" open={i === 0 ? true : undefined}>
              <summary>
                <h3>{f.q}</h3>
                <span className="faq-toggle" aria-hidden="true" />
              </summary>
              <div className="faq-body">
                <p>{f.a}</p>
                {f.link && <p><a href={f.link.url}>{f.link.text}</a></p>}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FinalCTA() {
  return (
    <section className="final" aria-labelledby="final-title">
      <div className="wrap final-grid">
        <h2 id="final-title">Your desk in ADGM is ready when you are</h2>
        <div className="final-side">
          <p>Visit our flexible office space in ADGM at Addax Tower, or ask for a video walkthrough of a flexi desk or private office on WhatsApp today.</p>
          <div className="final-actions">
            <a className="btn btn-brass" href={`${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi Aegis, I would like to book a free tour of your coworking space in ADGM.')}`} target="_blank" rel="noopener noreferrer">
              Book a tour on WhatsApp
            </a>
            <a className="btn btn-line-light" href={BUSINESS.phoneTel}>Call {BUSINESS.phoneDisplay}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function WhatsAppFab() {
  return (
    <a className="wa-fab" href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with Aegis Coworking on WhatsApp">
      <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
        <path fill="currentColor" d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3zm0 23.7c-2 0-4-.5-5.7-1.6l-.4-.2-3.9 1 1-3.8-.3-.4A10.7 10.7 0 1 1 16 26.7zm5.9-8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.8 8.8 0 0 1-4.4-3.8c-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.2 1.3 3.4c.2.2 2.3 3.5 5.5 4.9 2 .9 2.8.9 3.8.8.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z" />
      </svg>
    </a>
  )
}
