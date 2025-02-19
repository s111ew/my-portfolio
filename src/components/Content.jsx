import { useRef } from "react";
import folderImg from "../assets/folder.webp";

function Content() {
  return (
    <main>
      <Folder text={"Work"} />
      <Folder text={"Words"} />
    </main>
  );
}

function Folder({ text }) {
  const folderRef = useRef(null);
  const startX = useRef(0);
  const startY = useRef(0);

  const handleMouseDown = (e) => {
    startX.current = e.clientX;
    startY.current = e.clientY;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!folderRef.current) return;

    folderRef.current.style.cursor = "grab";

    const containerSize = folderRef.current.parentElement;
    console.log(containerSize)
    //Work out container size and if new location is outside of this return??

    let newX = startX.current - e.clientX;
    let newY = startY.current - e.clientY;

    startX.current = e.clientX;
    startY.current = e.clientY;

    folderRef.current.style.top = folderRef.current.offsetTop - newY + "px";
    folderRef.current.style.left = folderRef.current.offsetLeft - newX + "px";

    console.log(folderRef.current.style.top, folderRef.current.style.left)
  };

  const handleMouseUp = () => {
    folderRef.current.style.cursor = "pointer"
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
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
