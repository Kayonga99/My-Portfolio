const listItem = document.querySelector(".nav-list")
const bars = document.getElementById('pop')
const closeMenu = document.querySelector(".close")
const popUp = document.querySelector(".menu-up")


// listItem.addEventListener("click", () => {
// listItem.style.display = "block"
// })
bars.addEventListener("click", () => {
    console.log(12);
    popUp.classList.add('pop-up')
})

// closeMenu.addEventListener("click", () => {
//     popUp.style.display = "none"
// })