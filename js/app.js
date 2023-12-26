function slidesPlugin(activeSlide = 0) {
  activeSlide -= 1;

  const slides = document.querySelectorAll(".slide");

  if (activeSlide < 0 || activeSlide >= slides.length) {
    activeSlide = 0;
  }

  slides[activeSlide].classList.add("active");

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }

  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveClasses();
      slide.classList.add("active");
    });
  }
}

slidesPlugin(2);
