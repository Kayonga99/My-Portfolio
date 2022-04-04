const bars = document.getElementById('pop')
const closeMenu = document.querySelector(".close")
const popUp = document.querySelector(".menu-up")



bars.addEventListener("click", () => {
    popUp.classList.add('pop-up')
})



closeMenu.addEventListener("click", () => {
    popUp.classList.remove('pop-up')
})