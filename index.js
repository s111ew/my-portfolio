function onLoad() {
  addListeners();
}

function addListeners() {
  const projects = document.querySelectorAll(".project");
  const labels = document.querySelectorAll(".index");

  projects.forEach((project) => {
    project.addEventListener("click", (e) => {
      if (e.target.closest(".button")) return;
      project.classList.toggle("active");

      const buttons = project.querySelectorAll(".button");

      if (project.classList.contains("active")) {
        buttons.forEach((btn) => (btn.tabIndex = 0));
      } else {
        buttons.forEach((btn) => (btn.tabIndex = -1));
      }
    });
  });

  labels.forEach((label) => {
    label.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const project = label.parentElement;
        if (project) {
          project.classList.toggle("active");
          const buttons = project.querySelectorAll(".button");

          if (project.classList.contains("active")) {
            buttons.forEach((btn) => (btn.tabIndex = 0));
          } else {
            buttons.forEach((btn) => (btn.tabIndex = -1));
          }
        }
      }
    });
  });
}

window.onload = onLoad;
