const nextButton = document.querySelector(".right-slide");
const prevButton = document.querySelector(".left-slide");
const slideOne = document.querySelector(".item-drill-1");
const slideTwo = document.querySelector(".item-drill-2");

nextButton.addEventListener("click", () => {
  slideOne.classList.remove("slide-visible");
  slideTwo.classList.add("slide-visible");
  prevButton.style.display = "block";
  if (slideTwo.classList.contains("slide-visible")) {
    nextButton.style.display = "none";
  }
})

prevButton.addEventListener("click", () => {
  slideTwo.classList.remove("slide-visible");
  slideOne.classList.add("slide-visible");
  nextButton.style.display = "block";
  if (slideOne.classList.contains("slide-visible")) {
    prevButton.style.display = "none";
  }
})
