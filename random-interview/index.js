import { randomQ } from "./random-interview.js";

const questionText = document.getElementById("question");
const reloadButton = document.getElementById("btn-reload");

reloadButton.addEventListener("click", () => {
  questionText.innerText = randomQ();
});

window.addEventListener("load", () => {
  questionText.innerText = randomQ();
});
