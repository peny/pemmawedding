import './RSVP.css'

function RSVP() {
  // Replace this with your actual Google Docs questionnaire link
  const rsvpLink = import.meta.env.VITE_RSVP_LINK || 'https://docs.google.com/forms/d/your-form-id/viewform'
  
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
            O.S.A här senast 1 maj
            <span className="rsvp-button-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default RSVP



