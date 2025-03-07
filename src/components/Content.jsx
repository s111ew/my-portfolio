import { useRef, useState, useEffect } from "react";
import bookImg from "../assets/textImg.webp";
import terminalImg from "../assets/terminal.webp";
import contactsImg from "../assets/contacts.webp";
import Window from "./Window";
const PADDING = 50;

function Content() {
  const [windowIsVisible, setWindowIsVisible] = useState(false)
  const [content, setContent] = useState("")

  return (
    <main>
      <Folder id={"work"} setContent={setContent} setWindowIsVisible={setWindowIsVisible} src={terminalImg} side={"left"} text={"Work"} />
      <Folder id={"contact"} setContent={setContent} setWindowIsVisible={setWindowIsVisible} src={contactsImg} side={"middle"} text={"Contact"} />
      <Folder id={"blog"} setContent={setContent} setWindowIsVisible={setWindowIsVisible} src={bookImg} side={"right"} text={"Blog"} />
      {windowIsVisible ? <Window content={content} setWindowIsVisible={setWindowIsVisible} /> : ''}
    </main>
  );
}

function Folder({ id, setContent, setWindowIsVisible, side, text, src }) {
  const folderRef = useRef(null);
  const startX = useRef(0);
  const startY = useRef(0);
  const checkIsClickX = useRef(0);
  const checkIsClickY = useRef(0);
  const [position, setPosition] = useState({ top: "50px", left: "50px" });

  useEffect(() => {
    if (folderRef.current) {
      setPosition(generateLocation(side));
    }
  }, [side]);

  useEffect(() => {
    const handleResize = () => {
      if (!folderRef.current) return;

      const containerWidth = folderRef.current.parentElement.getBoundingClientRect().width;
      const containerHeight = folderRef.current.parentElement.getBoundingClientRect().height;
      const folderWidth = folderRef.current.offsetWidth;
      const folderHeight = folderRef.current.offsetHeight;

      setPosition((prev) => {
        let newLeft = parseInt(prev.left, 10);
        let newTop = parseInt(prev.top, 10);

        newLeft = Math.max(PADDING, Math.min(newLeft, containerWidth - folderWidth - PADDING));
        newTop = Math.max(PADDING, Math.min(newTop, containerHeight - folderHeight - PADDING));

        return { top: `${newTop}px`, left: `${newLeft}px` };
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, []);

  const handleMouseDown = (e) => {
    startX.current = e.clientX;
    startY.current = e.clientY;

    checkIsClickX.current = e.clientX;
    checkIsClickY.current = e.clientY;

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
    
    setPosition({top: newTop + "px", left: newLeft + "px"});

    startX.current = e.clientX;
    startY.current = e.clientY;
  };

  const handleMouseUp = (e) => {
    if (checkIsClickX.current === e.clientX && checkIsClickY.current === e.clientY) {
      setContent(e.target.id)
      setWindowIsVisible(true)
    }

    folderRef.current.style.cursor = "pointer"
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const generateLocation = (side) => {
    if (!folderRef.current) {
      switch (side) {
        case "left":
          return { top: "50px", left: "50px" };
        case "middle":
          return { top: "200px", left: "100px"};
        case "right":
          return { top: "170px", left: "190px" };
      }
    }

    const containerWidth = Math.floor(folderRef.current.parentElement.getBoundingClientRect().width)
    const containerHeight = Math.ceil(folderRef.current.parentElement.getBoundingClientRect().height)

    switch (side) {
      case "left":
        return { top: (containerHeight / 6) + "px", left: (containerWidth / 5) + "px" };
      case "middle":
        return { top: (containerHeight / 2) + "px", left: (containerWidth / 2) + "px"};
      case "right":
        return { top: (containerHeight / 3) + "px", left: ((containerWidth / 2) + (containerWidth / 5)) + "px" };
    }
  }

  return (
    <div
      style={{ top: position.top, left: position.left }}
      ref={folderRef}
      className="folder-container"
      onMouseDown={handleMouseDown}
    >
      <img draggable="false" id={id} className="folder-image" src={src} />
      <p>{text}</p>
    </div>
  );
}

export default Content;
