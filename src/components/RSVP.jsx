import './RSVP.css'

function RSVP() {
  // Replace this with your actual Google Docs questionnaire link
  const rsvpLink = import.meta.env.VITE_RSVP_LINK || 'https://docs.google.com/forms/d/your-form-id/viewform'
  
  return (
    <section className="rsvp">
      <div className="container">
        <div className="rsvp-content">
          <h2 className="rsvp-title">Please RSVP</h2>
          <p className="rsvp-description">
            We'd love to know if you can join us! Please let us know by filling out our questionnaire.
          </p>
          <a 
            href={rsvpLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rsvp-button"
          >
            RSVP Here
            <span className="rsvp-button-arrow">→</span>
          </a>
          <p className="rsvp-note">
            We kindly ask that you RSVP by June 1st, 2026
          </p>
        </div>
      </div>
    </section>
  )
}

export default RSVP



