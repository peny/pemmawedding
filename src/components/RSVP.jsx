import './RSVP.css'

function RSVP() {
  // Replace this with your actual Google Docs questionnaire link
  const rsvpLink = import.meta.env.VITE_RSVP_LINK || 'https://docs.google.com/forms/d/e/1FAIpQLSerTB7OA52NjmkcicHb01aaFbcu0Ko2LktFu8pm4LVTuRxDWQ/viewform'
  
  return (
    <section className="rsvp">
      <div className="container">
        <div className="rsvp-content">
          <a 
            href={rsvpLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rsvp-button"
          >
            <span style={{whiteSpace: 'nowrap'}}>O.S.A&nbsp;här&nbsp;senast&nbsp;1&nbsp;maj <span className="rsvp-button-arrow">→</span></span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default RSVP



