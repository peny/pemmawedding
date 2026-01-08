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
              <h3 className="card-title">The Venue</h3>
              <p className="card-text">
                We're getting married in Visby, a UNESCO World Heritage site and one of Sweden's most beautiful medieval towns. 
                Located on the island of Gotland in the Baltic Sea, Visby offers stunning architecture, cobblestone streets, 
                and a magical atmosphere perfect for our special day.
              </p>
              <div className="venue-image">
                <img src={venueImage} alt="Sankt Nicolai Ruin, Visby" />
              </div>
            </div>
            
            <div className="location-card">
              <h3 className="card-title">Getting There</h3>
              <p className="card-text">
                <strong>We recommend taking the ferry!</strong> The ferry journey from Nynäshamn (about 1 hour south of Stockholm) to Visby takes approximately 3-3.5 hours and offers a beautiful journey across the Baltic Sea. You can bring your car, which is convenient for exploring the island. Book your ferry tickets in advance through Destination Gotland (destinationgotland.se) as it's a popular route, especially during summer.
              </p>
              <p className="card-text">
                <strong>From Stockholm to Nynäshamn:</strong> Take the train from Stockholm Central Station to Nynäshamn (about 1 hour), or drive (about 1 hour). The ferry terminal is right next to the train station.
              </p>
              <p className="card-text">
                <strong>Alternative routes:</strong> You can also take the ferry from Oskarshamn (on the east coast) if that's more convenient. If you prefer flying, there are direct flights from Stockholm Arlanda or Bromma to Visby Airport (VBY), taking about 45 minutes.
              </p>
            </div>
            
            <div className="location-card">
              <h3 className="card-title">Accommodation</h3>
              <p className="card-text">
                <strong>Book your hotel room ASAP!</strong> Stockholmsveckan (Stockholm Week) starts right after our wedding, which means Visby gets very busy and hotels fill up quickly. We'd recommend booking your accommodation as soon as possible to secure a good spot. Don't feel stressed about it, but the earlier you book, the better your options will be.
              </p>
              <p className="card-text">
                We'll be staying at Villa Alma, but unfortunately not everyone will fit there! There are many lovely hotels and guesthouses in Visby's charming old town, as well as options just outside the city walls. We recommend staying within walking distance of the city center to fully enjoy the medieval atmosphere.
              </p>
              <p className="card-text">
                <a 
                  href="https://sv.hotels.com/Hotel-Search?destination=Gotlands%20l%C3%A4n%2C%20Sverige&startDate=2026-07-09&endDate=2026-07-11&adults=2&rooms=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accommodation-link"
                >
                  Search for hotels in Gotland (July 9-11, 2026) →
                </a>
              </p>
            </div>
            
            <div className="location-card">
              <h3 className="card-title">About Gotland</h3>
              <p className="card-text">
                Gotland is Sweden's largest island, known for its unique limestone formations, beautiful beaches, 
                and rich history. Visby, the main town, is surrounded by medieval walls and offers excellent restaurants, 
                charming hotels, and plenty to explore. We recommend staying a few extra days to enjoy everything the island has to offer!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location



