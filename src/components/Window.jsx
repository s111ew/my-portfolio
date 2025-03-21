import wiktokPreview from '../assets/wiktokGif.gif'
import atgPreview from '../assets/atgGif.gif'
import wiktokPreviewStill from '../assets/wiktokGifStill.webp'
import atgPreviewStill from '../assets/atgGifStill.webp'
import jsIcon from '../assets/icons/javascriptIcon.webp'
import reactIcon from '../assets/icons/reactIcon.webp'
import viteIcon from '../assets/icons/viteIcon.webp'
import nodeIcon from '../assets/icons/nodeIcon.webp'
import expressIcon from '../assets/icons/expressIcon.webp'
import mongoIcon from '../assets/icons/mongoIcon.webp'
import openaiIcon from '../assets/icons/openaiIcon.webp'
import postgreIcon from '../assets/icons/postgreIcon.webp'
import electronIcon from '../assets/icons/electronIcon.webp'
import arrowDown from '../assets/arrowDown.svg'
import { useState } from 'react'



function Window({ content, setWindowIsVisible }) {
  function handleClick() {
    setWindowIsVisible(false)
  }

  return(
    <div className="content-window">
      <div className="content-window-header">
        <div onClick={handleClick} className="close-button"></div>
        <span className="window-title">{content}</span>
      </div>
      { content === "work" && <Projects />}
      { content === "blog" && <Blog />}
      { content === "contact" && <Contact />}
    </div>
  )
}

function Projects() {
  return(
    <div className='projects'>
      <Project gifSrc='' imgSrc='' title={"Paper Trail"} description={"Version control system for authors to watch and save progress of raw text files."}/>
      <Project gifSrc={wiktokPreview} imgSrc={wiktokPreviewStill} title={"Wik-Tok"} description={"An infinitely scrollable feed of random Wikipedia articles, with functionality to make an account and save articles."}/>
      <Project gifSrc={atgPreview} imgSrc={atgPreviewStill} title={"Alt-Text Generator"} description={"A JavaScript package to automatically generate descriptive alt-text for image files, utilising an AI vision model."}/>
    </div>)
}

function Project({ gifSrc, imgSrc, title, description }) {
  let iconImages = [
    {key: 1, src: jsIcon},
    {key: 2, src: reactIcon},
    {key: 3, src: viteIcon},
    {key: 4, src: nodeIcon},
    {key: 5, src: expressIcon},
    {key: 6, src: mongoIcon},
    {key: 7, src: openaiIcon},
    {key: 8, src: postgreIcon},
    {key: 9, src: electronIcon},
  ]

  switch (title) {
    case "Paper Trail":
      iconImages = [iconImages[0], iconImages[1], iconImages[3], iconImages[4], iconImages[7], iconImages[8]]
      break;
    case "Wik-Tok":
      iconImages = [iconImages[0], iconImages[1], iconImages[2], iconImages[3], iconImages[4], iconImages[5]]
      break;
    case "Alt-Text Generator":
      iconImages = [iconImages[0], iconImages[1], iconImages[2], iconImages[3], iconImages[6]]
      break;
  }

  const icons = iconImages.map(icon => 
    <div key={icon.key} className='stack-border' >
      <img className='stack-icon' src={icon.src} ></img>
    </div>
  )
  return(
    <div className="project-container">
      <PreviewImage gifSrc={gifSrc} imgSrc={imgSrc}/>
      <div className="project-information">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <div className="project-footer">
          <div className="stack-icons-container">
            {icons}
          </div>
          <div className='read-more'>
            <p>Read More</p>
            <img src={arrowDown} alt="Arrow down" />
          </div>
        </div>
      </div>
    </div>
  )
}

function PreviewImage({ gifSrc, imgSrc }) {
  const [src, setSrc] = useState(imgSrc);

  return (
    <img 
      onMouseEnter={() => setSrc(gifSrc)} 
      onMouseLeave={() => setSrc(imgSrc)} 
      className='project-preview' 
      src={src} 
      alt="Project preview"
    />
  );
}

function Contact() {
  return(
    <div className='contacts'>
      <button className='contact-button'>Email <EmailSVG /></button>
      <button className='contact-button'>GitHub <GitHubSVG /></button>
      <button className='contact-button'>LinkedIn <LinkedInSVG /></button>
    </div>
  )
}

function LinkedInSVG() {
  return(
    <svg width="22" height="22" viewBox="0 0 128 128">
      <path fill="#e6e6e1" d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"></path>
    </svg>
  )
}

function GitHubSVG() {
  return(
    <svg width="25" height="25" viewBox="0 0 128 128">
      <g fill="#e6e6e1"><path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
    </svg>
  )
}

function EmailSVG() {
  return(
    <svg width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#e6e6e1"/>
    </svg>
  )
}

function Blog() {

}

export default Window