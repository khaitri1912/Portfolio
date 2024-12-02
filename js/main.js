//Menu
const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar_icons");
const overlay = document.querySelector("#overlay");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("navbar__open");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
    menu.classList.toggle("navbar__open");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
})

window.onload = function() {
    const url = window.location.origin + window.location.pathname;
    history.replaceState(null, null, url);
    window.scrollTo(0, 0);
}