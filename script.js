function nextSlide () {
  const currentSlide = document.querySelector(".showing");
  const nextSlide = currentSlide.nextElementSibling;
  // nextElementSibling returns the element or null if no element
  if (nextSlide) {
    currentSlide.classList.remove("showing");
    nextSlide.classList.add("showing");
  }
}

function previousSlide () {
  const currentSlide = document.querySelector(".showing");
  const previousSlide = currentSlide.previousElementSibling;
  if (previousSlide) {
    currentSlide.classList.remove("showing");
    previousSlide.classList.add("showing");
  }
}

const carousel = document.querySelector("#carousel");

carousel.addEventListener("click", e => {
  if (e.target === document.querySelector(".previous-slide")) {
    previousSlide();
  } else if (e.target === document.querySelector(".next-slide")) {
    nextSlide();
  }
})