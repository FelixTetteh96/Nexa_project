// clicking of the Menu button
const navBar = document.getElementById("navBar");
const menuButton = document.getElementById("menuButton");

menuButton.addEventListener("click", function () {
  navBar.classList.toggle("show");

  //   if (navBar.classList.contaions("show")) {
  //     menuButton.textContent = "closse";
  //   } else {
  //     menuButton.textContent = "menu";
  //   }
});
