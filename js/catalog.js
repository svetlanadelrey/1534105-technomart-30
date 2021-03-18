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
