import Hero from './components/Hero'
import SaveTheDate from './components/SaveTheDate'
import Location from './components/Location'
import Schedule from './components/Schedule'
import RSVP from './components/RSVP'
import Footer from './components/Footer'
import './styles/App.css'

function App() {
  return (
    <div className="app">
      <Hero />
      <SaveTheDate />
      <Location />
      <Schedule />
      <RSVP />
      <Footer />
    </div>
  )
}

export default App
