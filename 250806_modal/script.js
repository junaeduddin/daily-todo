document.addEventListener("DOMContentLoaded", function () {
  let openModalBtn = document.getElementById("openModalBtn");
  let closeModalBtn = document.getElementById("closeModalBtn");
  let modal = document.getElementById("myModal");

  // open the modal
  openModalBtn.addEventListener("click", function () {
    modal.style.right = "0";
  });

  // close the modal
  closeModalBtn.addEventListener("click", function () {
    modal.style.right = "100%";
  });

  // close the modal if user click outside the modal

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.right = "100%";
    }
  });
});
