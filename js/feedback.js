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
