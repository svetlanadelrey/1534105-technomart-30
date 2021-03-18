const feedbackButton = document.querySelector(".feedback-contacts-button");
const feedbackModal = document.querySelector(".modal-feedback");
const feedbackClose = feedbackModal.querySelector(".modal-close");
const feedbackForm = feedbackModal.querySelector(".feedback-form");
const feedbackLogin = feedbackModal.querySelector(".feedback-name-input");
const feedbackEmail = feedbackModal.querySelector(".feedback-email-input");

const storage = localStorage.getItem("name") || false;

feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackModal.classList.add("modal-show");
  if (storage) {
    feedbackLogin.value = storage;
    feedbackEmail.focus();
  } else {
    feedbackLogin.focus();
  }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackModal.classList.remove("modal-show");
  feedbackModal.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackLogin.value || !feedbackEmail.value) {
    evt.preventDefault();
    feedbackModal.classList.remove("modal-error");
    feedbackModal.classList.add("modal-error");
  } else {
    if (storage) {
      localStorage.setItem("name", feedbackLogin.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackModal.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackModal.classList.remove("modal-show");
      feedbackModal.classList.remove("modal-error");
    }
  }
});

const prev = document.querySelector('.right-slide');
const next = document.querySelector('.left-slide');
const slides = document.querySelectorAll('.item-drill');

let i = 0;
slides[i].style.display = 'none';
i++;

if (i >= slides.length) {
  i = 0;
}

prev.addEventListener("click", () => {
  slides[i].style.display = 'none';
  i = i - 1;
  if(i < 0){
    i = slides.length - 1;
  }
  slides[i].style.display = 'block';
})

next.addEventListener("click", () => {
  slides[i].style.display = 'none';
  i = i + 1;

  if(i >= slides.length){
    i = 0;
  }

  slides[i].style.display = 'block';
})

const deliveryBtn = document.querySelectorAll(".services-button-delivery");
const guaranteeBtn = document.querySelectorAll(".services-button-guarantee");
const paymentBtn = document.querySelectorAll(".services-button-payment");
const serviceSlides = document.querySelectorAll(".services-slider");
const deliverySlide = document.querySelector(".delivery-slider");
const guaranteeSlide = document.querySelector(".guarantee-slider");
const creditSlide = document.querySelector(".credit-slider");

deliveryBtn.forEach(btn => btn.addEventListener("click", () => {
  serviceSlides.forEach(slide => {
    slide.classList.remove("services-slider-visible");
    slide.classList.add("services-slider-hidden");
  })
  deliverySlide.classList.remove("services-slider-hidden");
  deliverySlide.classList.add("services-slider-visible");
}))

guaranteeBtn.forEach(btn => btn.addEventListener("click", () => {
  serviceSlides.forEach(slide => {
    slide.classList.remove("services-slider-visible");
    slide.classList.add("services-slider-hidden");
  })
  guaranteeSlide.classList.remove("services-slider-hidden");
  guaranteeSlide.classList.add("services-slider-visible");
}))

paymentBtn.forEach(btn => btn.addEventListener("click", () => {
  serviceSlides.forEach(slide => {
    slide.classList.remove("services-slider-visible");
    slide.classList.add("services-slider-hidden");
  })
  creditSlide.classList.remove("services-slider-hidden");
  creditSlide.classList.add("services-slider-visible");
}))


const mapLink = document.querySelector(".map-image");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});
mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

const buyButtons = document.querySelectorAll(".buy-button");
const addToCartModal = document.querySelector(".popup-cart");
const addToCartClose = addToCartModal.querySelector(".modal-close");
const modalContinue = addToCartModal.querySelector(".continue-button");

buyButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    addToCartModal.classList.add("modal-show")
  })
})

addToCartClose.addEventListener("click", function (e) {
  e.preventDefault();
  addToCartModal.classList.remove("modal-show");
});

modalContinue.addEventListener("click", function (e) {
  e.preventDefault();
  addToCartModal.classList.remove("modal-show");
});
