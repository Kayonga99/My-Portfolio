const bars = document.getElementById('pop')
const closeMenu = document.querySelector(".close")
const popUp = document.querySelector(".menu-up")



bars.addEventListener("click", () => {
    popUp.classList.add('pop-up')
})

popUp.addEventListener("click", () => {
popUp.style.display ="none"
})

closeMenu.addEventListener("click", () => {
    popUp.style.display = "none"
})