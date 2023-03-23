// First Slide start
const prew = document.querySelector(".prew");
const next = document.querySelector(".next");
const firstSlide = document.querySelector(".slide_first");
const firstSlideContent = document.querySelector(".firstSlideWritting");

let firstSlideArr = ["h1_hero1.jpg", "h1_hero2.jpg"];
let index = 0;

next.addEventListener("click", () => {
  firstSlide.setAttribute("src", `./images/${[firstSlideArr[index]]}`);
  if (index == firstSlideArr.length - 1) {
    firstSlideContent.classList.toggle("slideWrittingPart2")
    index = 0;
  } else {
    index++;
  }
});
prew.addEventListener("click", () => {
  firstSlide.setAttribute("src", `./images/${firstSlideArr[index]}`);
  if (index == 0) {
    index = firstSlideArr.length - 1;
  } else {
    index--;
  }
});

// First Slide end
