import { useRef, useState, useEffect } from "react";
import bookImg from "../assets/textImg.webp";
import terminalImg from "../assets/terminal.webp";
const PADDING = 25;

function Content() {
  return (
    <main>
      <Folder side={"left"} text={"Work"} />
      <Folder side={"right"} text={"Blog"} />
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

  const handleResize = (prevWidth, newWidth) => {
    if (!folderRef.current) return;

    if (prevWidth === newWidth) return;

    if (prevWidth < newWidth) {
      
    }
  }

  const handleMouseDown = (e) => {
    startX.current = e.clientX;
    startY.current = e.clientY;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!folderRef.current) return;

    folderRef.current.style.cursor = "grab";

    const containerHeight = folderRef.current.parentElement.getBoundingClientRect().height;
    const containerWidth = folderRef.current.parentElement.getBoundingClientRect().width;

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
    if (!folderRef.current) return side === "left" ? { top: "50px", left: "50px" } : { top: "170px", left: "190px" }

    const containerWidth = Math.floor(folderRef.current.parentElement.getBoundingClientRect().width)
    const containerHeight = Math.ceil(folderRef.current.parentElement.getBoundingClientRect().height)

    return {
      top: side === "left" ? (containerHeight / 6) : (containerHeight / 3) + "px",
      left: side === "left" ? (containerWidth / 5) : ((containerWidth / 2) + (containerWidth / 5)) + "px"
    }
  }

  return (
    <div
      style={{ top: position.top, left: position.left }}
      ref={folderRef}
      className="folder-container"
      onMouseDown={handleMouseDown}
    >
      <img draggable="false" className="folder-image" src={side === "left" ? terminalImg : bookImg} alt="MacOS folder icon" />
      <p>{text}</p>
    </div>
  );
}

export default Content;
