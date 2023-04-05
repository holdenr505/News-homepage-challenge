const openButton = document.querySelector("#open-button");
const closeButton = document.querySelector("#close-button");
const blanketDiv = document.querySelector("#blanket-div");
const navMenu = document.querySelector("nav");

openButton.addEventListener("click", () => {
    navMenu.classList.toggle("menu-active");
    blanketDiv.classList.toggle("darken-page");
});

closeButton.addEventListener("click", () => {
    navMenu.classList.toggle("menu-active");
    blanketDiv.classList.toggle("darken-page");
});

