import './ProposalPhotos.css'
import image1 from '../images/IMG_7229.jpg'
import image2 from '../images/IMG_7268.jpg'
import image3 from '../images/IMG_7288.jpg'
import image4 from '../images/IMG_7383.jpg'

function ProposalPhotos() {
  return (
    <section className="proposal-photos">
      <div className="container">
        <div className="proposal-content">
          <p className="proposal-subtitle">From our proposal in Vietnam</p>
          <div className="proposal-gallery">
            <div className="proposal-item">
              <img src={image1} alt="Proposal photoshoot" />
            </div>
            <div className="proposal-item">
              <img src={image2} alt="Proposal photoshoot" />
            </div>
            <div className="proposal-item">
              <img src={image3} alt="Proposal photoshoot" />
            </div>
            <div className="proposal-item">
              <img src={image4} alt="Proposal photoshoot" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProposalPhotos

