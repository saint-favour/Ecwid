const navBar = document.querySelector(".top-navbar");
const hamMenu = document.querySelector(".ham-menu");

hamMenu.addEventListener("click", () => {
    navBar.classList.toggle('active')
});