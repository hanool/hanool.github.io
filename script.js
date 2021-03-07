document.querySelectorAll(".project-card-back").forEach((elem) => {
  elem.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      e.target.classList.toggle("flipped");
    }
  });
});
