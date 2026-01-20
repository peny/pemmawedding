import './Hero.css'
import heroImage from '../images/IMG_7137.jpg'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background" style={{ backgroundImage: `url(${heroImage})` }}></div>
      <div className="hero-content">
        <h1 className="hero-title">Petter och Emma gifter sig!</h1>
        <div className="hero-subtitle">Save the Date</div>
        <div className="hero-date">10:e juli 2026</div>
      </div>
    </section>
  )
}

export default Hero



