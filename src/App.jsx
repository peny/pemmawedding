import Hero from './components/Hero'
import FontShowcase from './components/FontShowcase'
import Location from './components/Location'
import RSVP from './components/RSVP'
import Footer from './components/Footer'
import './styles/App.css'

function App() {
  return (
    <div className="app">
      <Hero />
      <Location />
      <RSVP />
      <FontShowcase />
      <Footer />
    </div>
  )
}

export default App



