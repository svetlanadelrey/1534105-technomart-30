const buyButtons = document.querySelectorAll(".catalog__itemBuy");
const addToCartModal = document.querySelector(".modal__addToCart");
const addToCartClose = addToCartModal.querySelector(".modal__close");
const modalContinue = addToCartModal.querySelector(".modal__addToCartContinue");

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
