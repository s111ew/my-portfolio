import { useRef, useState, useEffect } from "react";
import folderImg from "../assets/folder.webp";
const PADDING = 25;

function Content() {
  return (
    <main>
      <Folder side={"left"} text={"Work"} />
      <Folder side={"right"} text={"Words"} />
    </main>
  );
}

function Folder({ side, text }) {
  const folderRef = useRef(null);
  const startX = useRef(0);
  const startY = useRef(0);
  const [position, setPosition] = useState({ top: "50px", left: "50px" });

  useEffect(() => {
    if (folderRef.current) {
      setPosition(generateLocation(side));
    }
  }, [side]);

  const handleMouseDown = (e) => {
    startX.current = e.clientX;
    startY.current = e.clientY;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!folderRef.current) return;

    folderRef.current.style.cursor = "grab";

    const containerWidth = folderRef.current.parentElement.getBoundingClientRect().width;
    const containerHeight = folderRef.current.parentElement.getBoundingClientRect().height;

    const folderWidth = folderRef.current.offsetWidth;
    const folderHeight = folderRef.current.offsetHeight;

    const boundingLeft = PADDING;
    const boundingRight = containerWidth - PADDING - folderWidth;
    const boundingTop = PADDING;
    const boundingBottom = containerHeight - PADDING - folderHeight;

    let newX = startX.current - e.clientX;
    let newY = startY.current - e.clientY;

    let newTop = folderRef.current.offsetTop - newY;
    let newLeft = folderRef.current.offsetLeft - newX;

    if (newTop > boundingBottom || newTop < boundingTop || newLeft > boundingRight || newLeft < boundingLeft) {
        return
      }

    folderRef.current.style.top = newTop + "px"
    folderRef.current.style.left = newLeft + "px"

    startX.current = e.clientX;
    startY.current = e.clientY;
  };

  const handleMouseUp = () => {
    folderRef.current.style.cursor = "pointer"
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const generateLocation = (side) => {
    //REFACTOR THIS TO GENERATE A ROUGH LOCATION IN THE SPOT YOU WANT, BASED OFF OF THE WINDOW SIZE.
    //THEN CREATE FUNCTION TO LISTEN FOR WINDOW RESIZE (new style.top = old style.top +- (new windowsize - old windowsize)  )
    if (!folderRef.current) return side === "left" ? { top: "50px", left: "50px" } : { top: "170px", left: "190px" }

    const minTop = PADDING * 2;
    const maxTop = folderRef.current.parentElement.getBoundingClientRect().height - PADDING * 2;
    const minLeft = side === "left" ? PADDING * 2 : Math.ceil(folderRef.current.parentElement.getBoundingClientRect().width / 2) - PADDING;
    const maxLeft = side === "left" ? Math.floor(folderRef.current.parentElement.getBoundingClientRect().width / 2) - PADDING : folderRef.current.parentElement.getBoundingClientRect().width - PADDING * 2;

    const getRandomValue = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min)
    }

    return {
      top: getRandomValue(minTop, maxTop) + "px",
      left: getRandomValue(minLeft, maxLeft) + "px"
    }
  }

  return (
    <div
      style={{ top: position.top, left: position.left }}
      ref={folderRef}
      className="folder-container"
      onMouseDown={handleMouseDown}
    >
      <img draggable="false" className="folder-image" src={folderImg} alt="MacOS folder icon" />
      <p>{text}</p>
    </div>
  );
}

export default Content;
