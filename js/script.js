const container = document.querySelector(".container");
const bgBtn = document.querySelector(".btn");
const cover = document.querySelector(".cover-bg");

bgBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  container.classList.toggle("change");
});

cover.addEventListener("click", () => {
  container.classList.remove("change");
});