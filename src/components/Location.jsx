import { useState } from 'react'
import { BUSINESS, nearby, MAIN_SITE } from '../data/content'

function Location() {
  // Map is a click-to-load facade so the Google Maps iframe (~500 KB of
  // scripts) never slows the page down for visitors who don't use it.
  const [mapOn, setMapOn] = useState(false)

  return (
    <section className="location" id="location" aria-labelledby="loc-title">
      <div className="wrap loc-grid">
        <div className="loc-info">
          <h2 id="loc-title">Coworking space in Addax Tower, Al Reem Island</h2>
          <p className="loc-sub">
            Addax Tower is one of Al Reem Island's landmark towers and sits inside the ADGM
            jurisdiction, a short drive from Al Maryah Island's financial district — an easy place to
            rent desk space in ADGM close to clients, banks and the waterfront.{' '}
            <a href={`${MAIN_SITE}/blog/is-al-reem-island-part-of-adgm`}>Is Al Reem Island part of ADGM?</a>
          </p>

          <dl className="nap">
            <div><dt>Address</dt><dd>{BUSINESS.name}<br />{BUSINESS.street}, {BUSINESS.city}, {BUSINESS.country}</dd></div>
            <div><dt>Phone</dt><dd><a href={BUSINESS.phoneTel}>{BUSINESS.phoneDisplay}</a></dd></div>
            <div><dt>Email</dt><dd><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></dd></div>
            <div><dt>Hours</dt><dd>24/7 for members<br />Tours Monday–Friday, 9:00 AM–6:00 PM</dd></div>
          </dl>

          <h3 className="nearby-title">Around the tower</h3>
          <ul className="nearby">
            {nearby.map((n) => <li key={n}>{n}</li>)}
          </ul>

          <div className="loc-actions">
            <a className="btn btn-green" href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions</a>
            <a className="text-link" href={`${MAIN_SITE}/addax-tower-al-reem-island`}>About the Addax Tower business centre</a>
          </div>
        </div>

        <div className="loc-map">
          {mapOn ? (
            <iframe
              title="Map of Aegis Coworking, Addax Tower, Al Reem Island, ADGM"
              src={BUSINESS.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : (
            <button type="button" className="map-facade" onClick={() => setMapOn(true)} aria-label="Load interactive map of Aegis Coworking in Addax Tower">
              <svg className="map-art" viewBox="0 0 400 480" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <rect className="map-water" width="400" height="480" />
                <path className="map-island" d="M70 110c50-40 150-50 220-20s90 90 80 170-60 150-150 150S80 360 60 280 30 150 70 110z" />
                <path className="map-road" d="M90 170c70 14 140 0 220 40M110 320c60-36 130-46 220-22M180 120c-12 80 0 180 24 260" />
                <circle className="map-ring" cx="206" cy="246" r="34" />
                <circle className="map-dot" cx="206" cy="246" r="7" />
              </svg>
              <span className="map-label">
                <strong>Addax Tower, Unit 3812</strong>
                <small>Al Reem Island, ADGM</small>
              </span>
              <span className="map-load">Load interactive map</span>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default Location
