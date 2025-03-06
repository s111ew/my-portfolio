import wiktokPreview from '../assets/wiktok-preview.png'
import atgPreview from '../assets/atg-preview.png'

function Window() {
  return(
    <div className="content-window">
      <div className="content-window-header">
        <div className="close-button"></div>
        <span className="window-title">work</span>
      </div>
      <div className='projects'>
        <WorkTile src={wiktokPreview} title={"Wik-Tok"} description={"An infinitely scrollable feed of random Wikipedia articles, with functionality to make an account and save articles."}/>
        <WorkTile src={atgPreview} title={"Alt-Text Generator"} description={"A JavaScript package to automatically generate descriptive alt-text for image files, utilising an AI vision model."}/>
      </div>
    </div>
  )
}

function WorkTile({ src, title, description }) {
  return(
    <div className="project-container">
      <img className="project-preview" src={src} alt="" />
      <div className="project-information">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <div className="stack-icons"></div>
      </div>
    </div>
  )
}

export default Window