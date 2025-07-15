function onLoad() {
  addListeners();
}

function addListeners() {
  const projects = document.querySelectorAll(".project");

  projects.forEach((project) => {
    project.addEventListener("click", (e) => {
      if (e.target.closest(".button")) return;
      project.classList.toggle("active");
    });
  });
}

window.onload = onLoad;
