function nextSlide () {
  const currentSlide = document.querySelector(".showing");
  currentSlide.classList.remove("showing");
  const nextSlide = currentSlide.nextElementSibling;
  // nextElementSibling returns the element or null if no element
  if (nextSlide) {
    nextSlide.classList.add("showing");
    changeDotDisplay(currentSlide, nextSlide);
  } else {
    // If on last slide
    // Will select the first option
    const firstSlide = document.querySelector(".carousel-slide");
    firstSlide.classList.add("showing");
    changeDotDisplay(currentSlide, firstSlide)
  }
}

function previousSlide () {
  const currentSlide = document.querySelector(".showing");
  currentSlide.classList.remove("showing");
  const previousSlide = currentSlide.previousElementSibling;
  if (previousSlide) {
    previousSlide.classList.add("showing");
    changeDotDisplay(currentSlide, previousSlide);
  } else {
    // If on first slide
    const lastSlide = document.querySelector(".carousel-slide:last-child");
    lastSlide.classList.add("showing");
    changeDotDisplay(currentSlide, lastSlide);
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

function changeDot (chosenDot) {
  const currentSlide = document.querySelector(".showing");

  const chosenSlideNumber = chosenDot.dataset.slide;
  const chosenSlide = 
    document.querySelector(`.carousel-slide[data-slide="${chosenSlideNumber}"]`);

  if (currentSlide !== chosenSlide) {
    changeDotDisplay(currentSlide, chosenSlide);

    currentSlide.classList.remove("showing");
    chosenSlide.classList.add("showing");
  }
}

const carousel = document.querySelector("#carousel");

carousel.addEventListener("click", e => {
  if (e.target === document.querySelector(".previous-slide")) {
    previousSlide();
  } else if (e.target === document.querySelector(".next-slide")) {
    nextSlide();
  } else if (e.target.classList.contains("navigation-dot")) {
    changeDot(e.target);
  }
})

setInterval(nextSlide, 5000);