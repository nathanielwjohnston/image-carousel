function nextSlide () {
  const currentSlide = document.querySelector(".showing");
  const nextSlide = currentSlide.nextElementSibling;
  // nextElementSibling returns the element or null if no element
  if (nextSlide) {
    currentSlide.classList.remove("showing");
    nextSlide.classList.add("showing");
    changeDotDisplay(currentSlide, nextSlide);
  }
}

function previousSlide () {
  const currentSlide = document.querySelector(".showing");
  const previousSlide = currentSlide.previousElementSibling;
  if (previousSlide) {
    currentSlide.classList.remove("showing");
    previousSlide.classList.add("showing");
    changeDotDisplay(currentSlide, previousSlide);
  }
}

function changeDotDisplay (currentSlide, chosenSlide) {
  const currentSlideNumber = currentSlide.dataset.slide;
  const chosenSlideNumber = chosenSlide.dataset.slide;

  const currentDot = 
    document.querySelector(`.navigation-dot[data-slide="${currentSlideNumber}"]`);

  const nextDot = 
    document.querySelector(`.navigation-dot[data-slide="${chosenSlideNumber}"]`);

  currentDot.classList.remove("selected");
  nextDot.classList.add("selected");
}

const carousel = document.querySelector("#carousel");

carousel.addEventListener("click", e => {
  if (e.target === document.querySelector(".previous-slide")) {
    previousSlide();
  } else if (e.target === document.querySelector(".next-slide")) {
    nextSlide();
  }
})