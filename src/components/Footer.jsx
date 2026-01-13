import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            Vi ser fram emot att fira med er!
          </p>
          <p className="footer-text">
            Med kärlek,<br />
            <span className="footer-names">Petter & Emma</span>
          </p>
          <div className="footer-divider"></div>
          <p className="footer-note">
            Frågor? Hör gärna av er direkt till oss.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer



