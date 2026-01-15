import './Location.css'
import venueImage from '../images/st_nicolai_uprez_emma_colors.png'

function Location() {
  return (
    <section className="location">
      <div className="container">
        <div className="location-content">
          <div className="location-header">
            <h2 className="location-title">Visby, Gotland</h2>
            <div className="location-divider"></div>
          </div>
          
          <div className="location-details">
            <div className="location-card">
              <h3 className="card-title">Platsen</h3>
              <p className="card-text">
                Vi gifter oss i S:t&nbsp;Nicolai, den största och bäst bevarade medeltida kyrkoruinen i Visby. 
                Byggd på 1220-talet har denna fantastiska gotiska hallkyrka fortfarande alla sina murar, fönster och 15 av sina ursprungliga valv intakta. 
                En magisk plats där historia möter romantik.
              </p>
              <div className="venue-image">
                <img src={venueImage} alt="Sankt Nicolai Ruin, Visby" />
              </div>
            </div>
            
            <div className="location-card">
              <h3 className="card-title">Resan dit</h3>
              <p className="card-text">
                <strong>Färja från Nynäshamn:</strong> Ta tåget från Stockholm&nbsp;Central till Nynäshamn, eller ta bilen - den får åka med på färjan! Färjeresan från Nynäshamn till Visby tar ungefär 3-3,5&nbsp;timmar. Boka era färjebiljetter i förväg via <a href="https://destinationgotland.se" target="_blank" rel="noopener noreferrer" className="accommodation-link">Destination&nbsp;Gotland</a>.
              </p>
              <p className="card-text">
                <strong>Flyg från Stockholm:</strong> Det finns direkta flyg från Stockholm&nbsp;Arlanda eller Bromma till Visby&nbsp;flygplats (VBY), vilket tar cirka 45&nbsp;minuter.
              </p>
            </div>
            
            <div className="location-card">
              <h3 className="card-title">Boende</h3>
              <p className="card-text">
                Vi rekommenderar att ni bokar boende så fort som möjligt då det är högsäsong på Gotland! Vi rekommenderar också att bo centralt så att ni kan njuta av staden.
              </p>
              <p className="card-text">
                <a 
                  href="https://sv.hotels.com/Hotel-Search?destination=Gotlands%20l%C3%A4n%2C%20Sverige&startDate=2026-07-09&endDate=2026-07-11&adults=2&rooms=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accommodation-link"
                >
                  Sök hotell på Gotland (<span style={{whiteSpace: 'nowrap'}}>9-11 juli 2026 →</span>)
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location



