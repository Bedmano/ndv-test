const hiddenItems = document.querySelectorAll(".hidden-item");
const toggleMenu = document.querySelector(".menu__open");
const wrapper = document.querySelector('.header__wrapper');

toggleMenu.addEventListener("click", function () {
  for (let hiddenItem of hiddenItems) {
    hiddenItem.classList.toggle("hidden");
  }
  wrapper.classList.toggle('header__wrapper--active');
  toggleMenu.classList.toggle("menu__open--active");

});
