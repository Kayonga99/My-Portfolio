const listItem = document.querySelector(".nav-list")
const openMenu = document.querySelector(".nav")
const closeMenu = document.querySelector(".close")
const popUp = document.querySelector(".popup-menu")


openMenu.addEventListener("click", () => {
    popUp.style.display = "block"
})

closeMenu.addEventListener("click", () => {
    popUp.style.display = "none"
})