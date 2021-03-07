document.querySelector(".project-card-back").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    e.target.classList.toggle("flipped");
  }
});
