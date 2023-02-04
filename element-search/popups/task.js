let modalMain = Array.from(document.getElementsByClassName("modal"));
let modalClose = Array.from(document.querySelectorAll(".modal__close"));
let showSuccess = Array.from(document.getElementsByClassName("modal_success"));

modalMain[0].classList.add("modal_active");
for (let i = 0; i < modalClose.length; i++) {
  modalClose[i].onclick = function () {
    if (modalClose[i].closest(".modal_active")) {
      modalClose[i].closest(".modal_active").classList.remove("modal_active");
    }
  }
}
  showSuccess[0].onclick = function () {
  modalMain[0].classList.remove("modal_active");
  modalMain[1].classList.add("modal_active");
}

