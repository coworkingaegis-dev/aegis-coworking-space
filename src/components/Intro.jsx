import { sections, MAIN_SITE } from '../data/content'

// Answer-first block (featured snippet / AI-overview target) + on-page links.
function Intro() {
  return (
    <section className="intro" aria-labelledby="what-is">
      <div className="wrap intro-grid">
        <div className="intro-answer">
          <h2 id="what-is">What is a coworking space in ADGM?</h2>
          <p className="answer-lead">
            A coworking space in ADGM is a shared, fully serviced workspace inside the Abu Dhabi Global
            Market jurisdiction where you rent a desk or office by the day, month or year instead of
            signing a traditional lease. Because it sits within ADGM, the right plan also gives you a
            registered business address for company registration and licence renewal.
          </p>
          <p>
            Aegis Coworking runs its ADGM coworking space and{' '}
            business centre in Addax Tower on
            Al Reem Island. Reception, cleaning, high-speed internet and utilities are included, so
            freelancers, startups, SMEs and international companies looking for desk space in ADGM can
            start working in Abu Dhabi the same week — and upgrade between plans as the team grows.
          </p>
        </div>

        <nav className="toc" aria-label="On this page">
          <p className="toc-title">On this page</p>
          <ul>
            {sections.map((s) => (
              <li key={s.id}><a href={`#${s.id}`}>{s.label}</a></li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Intro
