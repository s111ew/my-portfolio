import wiktokPreview from '../assets/wiktok-preview.png'
import atgPreview from '../assets/atg-preview.png'
import jsIcon from '../assets/icons/icon_javascript.webp'
import reactIcon from '../assets/icons/icon_react.webp'
import viteIcon from '../assets/icons/icon_vite.webp'
import nodeIcon from '../assets/icons/icon_node.webp'
import expressIcon from '../assets/icons/icon_express.webp'
import mongoIcon from '../assets/icons/icon_mongo.webp'

const iconImages = [
  {key: 1, src: jsIcon},
  {key: 2, src: reactIcon},
  {key: 3, src: viteIcon},
  {key: 4, src: nodeIcon},
  {key: 5, src: expressIcon},
  {key: 6, src: mongoIcon},
]

function Window({ setWindowIsVisible }) {
  function handleClick() {
    setWindowIsVisible(false)
  }

  return(
    <div className="content-window">
      <div className="content-window-header">
        <div onClick={handleClick} className="close-button"></div>
        <span className="window-title">work</span>
      </div>
      <div className='projects'>
        <Project src={wiktokPreview} title={"Wik-Tok"} description={"An infinitely scrollable feed of random Wikipedia articles, with functionality to make an account and save articles."}/>
        <Project src={atgPreview} title={"Alt-Text Generator"} description={"A JavaScript package to automatically generate descriptive alt-text for image files, utilising an AI vision model."}/>
      </div>
    </div>
  )
}

function Project({ src, title, description }) {
  const icons = iconImages.map(icon => 
    <img className='stack-icon' src={icon.src} key={icon.key}></img>
  )
  return(
    <div className="project-container">
      <img className="project-preview" src={src} alt="" />
      <div className="project-information">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <div className="stack-icons-container">
          {icons}
        </div>
      </div>
    </div>
  )
}

export default Window