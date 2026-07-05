import './Schedule.css'

const events = [
  {
    title: 'Vigsel',
    place: 'S:t Nicolai kyrkoruin',
    text: 'Vi säger ja till varandra i den vackra medeltidsruinen mitt i Visby.',
  },
  {
    title: 'Mingel & bubbel',
    place: 'Efter vigseln',
    text: 'Vi skålar och firar tillsammans innan vi tar plats vid bordet.',
  },
  {
    title: 'Bröllopsmiddag',
    place: 'Visby',
    text: 'Trerätters middag med tal, skratt och några tårar av glädje.',
  },
  {
    title: 'Fest & dans',
    place: 'Långt in på natten',
    text: 'Vi dansar tills fötterna säger ifrån – häng med hela vägen!',
  },
]

function Schedule() {
  return (
    <section className="schedule">
      <div className="container">
        <div className="schedule-header">
          <h2 className="schedule-title">Dagen</h2>
          <div className="schedule-divider"></div>
        </div>

        <div className="schedule-timeline">
          {events.map((event) => (
            <div className="schedule-item" key={event.title}>
              <div className="schedule-marker"></div>
              <div className="schedule-card">
                <h3 className="schedule-event-title">{event.title}</h3>
                <span className="schedule-event-place">{event.place}</span>
                <p className="schedule-event-text">{event.text}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="schedule-note">
          Detaljerade tider kommer närmare bröllopet.
        </p>
      </div>
    </section>
  )
}

export default Schedule
