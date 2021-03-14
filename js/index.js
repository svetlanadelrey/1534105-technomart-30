const feedbackButton = document.querySelector(".feedback__contactsButton");
const feedbackModal = document.querySelector(".modal__feedback");
const feedbackClose = feedbackModal.querySelector(".modal__close");
const feedbackForm = feedbackModal.querySelector(".feedback__form");
const feedbackLogin = feedbackModal.querySelector("#feedbackName");
const feedbackEmail = feedbackModal.querySelector("#feedbackEmail");

const storage = localStorage.getItem("name") || false;

feedbackButton.addEventListener("click", function (e) {
  e.preventDefault();
  feedbackModal.classList.add("modal-show");
  if (storage) {
    feedbackLogin.value = storage;
    feedbackEmail.focus();
  } else {
    feedbackLogin.focus();
  }
});

feedbackClose.addEventListener("click", function (e) {
  e.preventDefault();
  feedbackModal.classList.remove("modal-show");
  feedbackModal.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (e) {
  if (!feedbackLogin.value || !feedbackEmail.value) {
  e.preventDefault();
  feedbackModal.classList.remove("modal-error");
  feedbackModal.classList.add("modal-error");
  } else {
    if (storage) {
      localStorage.setItem("name", feedbackLogin.value);
    }
  }
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    if (feedbackModal.classList.contains("modal-show")) {
      e.preventDefault();
      feedbackModal.classList.remove("modal-show");
      feedbackModal.classList.remove("modal-error");
    }
  }
});

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slides = document.querySelectorAll('.promo__slide');

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

const deliveryBtn = document.querySelector("#servicesDelivery");
const guaranteeBtn = document.querySelector("#servicesGuarantee");
const paymentBtn = document.querySelector("#servicesPayment");
const tabButtons = document.querySelectorAll(".services__tab");
const tabs = document.querySelectorAll(".services__tabContent");
const tabDelivery = document.querySelector("#tabDelivery");
const tabGuarantee = document.querySelector("#tabGuarantee");
const tabCredit = document.querySelector("#tabCredit");

deliveryBtn.addEventListener("click", () => {
  tabs.forEach(tab => {
    tab.classList.remove("services__tabContent-active");
  })
  tabButtons.forEach(button => {
    button.classList.remove("services__tab-active");
  })
  tabDelivery.classList.add("services__tabContent-active")
  deliveryBtn.classList.add("services__tab-active");
});

guaranteeBtn.addEventListener("click", () => {
  tabs.forEach(tab => {
    tab.classList.remove("services__tabContent-active");
  })
  tabButtons.forEach(button => {
    button.classList.remove("services__tab-active");
  })
  tabGuarantee.classList.add("services__tabContent-active")
  guaranteeBtn.classList.add("services__tab-active");
})


paymentBtn.addEventListener("click", () => {
  tabs.forEach(tab => {
    tab.classList.remove("services__tabContent-active");
  })
  tabButtons.forEach(button => {
    button.classList.remove("services__tab-active");
  })
  tabCredit.classList.add("services__tabContent-active")
  paymentBtn.classList.add("services__tab-active");
})

const mapLink = document.querySelector(".about__mapImage");
const mapPopup = document.querySelector(".modal__map");
const mapClose = mapPopup.querySelector(".modal__close");

mapLink.addEventListener("click", function (e) {
  e.preventDefault();
  mapPopup.classList.add("modal-show");
});
mapClose.addEventListener("click", function (e) {
  e.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      e.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});
