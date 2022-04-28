const container = document.querySelector(".items");
let isClicked = false;
let startPoint;
let scrollLeft;
container.addEventListener("mousedown", (e) => {
  console.log(e);
  isClicked = true;
  container.classList.add("active");
  // to know current point
  console.log(e.pageX);
  console.log(container.offsetLeft);
  startPoint = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});
container.addEventListener("mouseup", () => {
  isClicked = false;
  container.classList.remove("active");
});
container.addEventListener("mouseleave", () => {
  isClicked = false;
  container.classList.remove("active");
});
container.addEventListener("mousemove", (e) => {
  if (!isClicked) return;
  e.preventDefault();
  const position = e.pageX - container.offsetLeft;
  const move = (position - startPoint) * 2;
  container.scrollLeft = scrollLeft - move;
});
