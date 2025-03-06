import { useEffect } from "react"

function Background() {

  const dotColour = "#c7c7c7"

  useEffect(() => {
    function randomiseOpacity() {
      const dots = document.querySelectorAll(".dot")
      dots.forEach(dot => {
        dot.style.opacity = Math.random()
      })}

      setInterval(randomiseOpacity, 300)
  })

  return(
    <svg className="background" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <pattern id="dot-grid" x="0" y="0" width="64" height="64" patternUnits="userSpaceOnUse">
        <rect className="dot" x="3" y="3" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="3" y="11" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="3" y="19" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="3" y="27" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="3" y="35" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="3" y="43" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="3" y="51" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="3" y="59" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="11" y="3" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="11" y="11" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="11" y="19" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="11" y="27" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="11" y="35" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="11" y="43" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="11" y="51" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="11" y="59" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="19" y="3" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="19" y="11" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="19" y="19" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="19" y="27" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="19" y="35" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="19" y="43" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="19" y="51" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="19" y="59" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="27" y="3" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="27" y="11" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="27" y="19" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="27" y="27" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="27" y="35" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="27" y="43" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="27" y="51" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="27" y="59" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="35" y="3" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="35" y="11" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="35" y="19" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="35" y="27" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="35" y="35" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="35" y="43" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="35" y="51" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="35" y="59" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="43" y="3" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="43" y="11" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="43" y="19" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="43" y="27" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="43" y="35" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="43" y="43" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="43" y="51" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="43" y="59" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="51" y="3" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="51" y="11" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="51" y="19" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="51" y="27" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="51" y="35" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="51" y="43" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="51" y="51" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="51" y="59" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="59" y="3" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="59" y="11" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="59" y="19" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="59" y="27" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="59" y="35" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="59" y="43" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="59" y="51" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
        <rect className="dot" x="59" y="59" width="2" height="2" fill={dotColour} opacity="0.1"></rect>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#dot-grid)"></rect>
</svg>)
}

export default Background