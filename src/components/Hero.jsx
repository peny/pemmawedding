import './Hero.css'
import heroImage from '../images/IMG_7137.jpg'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background" style={{ backgroundImage: `url(${heroImage})` }}></div>
      <div className="hero-content">
        <h1 className="hero-title">Save the Date</h1>
        <div className="hero-date">July 10, 2026</div>
      </div>
      <div className="hero-overlay"></div>
    </section>
  )
}

export default Hero



