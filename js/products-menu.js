(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-products-menu-open]"),
    closeModalBtn: document.querySelector("[data-products-menu-close]"),
    modal: document.querySelector("[data-products-menu]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();