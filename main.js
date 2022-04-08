const bars = document.getElementById('pop');
const closeMenu = document.querySelector('.close');
const popUp = document.querySelector('.menu-up');

bars.addEventListener('click', () => {
  popUp.classList.add('pop-up');
});

closeMenu.addEventListener('click', () => {
  popUp.classList.remove('pop-up');
});

popUp.addEventListener('click', () => {
  popUp.classList.remove('pop-up');
});




// cards
const cardsUl = document.getElementById('cards');

const projects = [
  {
    id: 1,
    heading1: 'Tonic',
    heading2: ['Canopy', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './photos/Snapshoot-Portfolio.png',
    languages: ['html', 'css', 'javascript'],
    linkLive: 'location.href=\'https://kayonga99.github.io/My-Portfolio/index.html\'',
    linkSource: 'https://kayonga99.github.io/My-Portfolio',
  },
  {
    id: 1,
    heading1: 'Tonic',
    heading2: ['Canopy', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './photos/multi-post.png',
    languages: ['html', 'css', 'javascript'],
    linkLive: 'location.href=\'https://kayonga99.github.io/My-Portfolio/index.html\'',
    linkSource: 'https://kayonga99.github.io/My-Portfolio',
  },
  {
    id: 1,
    heading1: 'Tonic',
    heading2: ['Canopy', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './photos/Snapshoot-Portfolio.png',
    languages: ['html', 'css', 'javascript'],
    linkLive: 'location.href=\'https://kayonga99.github.io/My-Portfolio/index.html\'',
    linkSource: 'https://kayonga99.github.io/My-Portfolio',
  },
  {
    id: 1,
    heading1: 'Tonic',
    heading2: ['Canopy', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './photos/Snapshoot-pro.png',
    languages: ['html', 'css', 'javascript'],
    linkLive: 'location.href=\'https://kayonga99.github.io/My-Portfolio/index.html\'',
    linkSource: 'https://kayonga99.github.io/My-Portfolio',
  },
  

];

const projectCards = projects.map((card, index) => `
<li>
<section class="card-list">
  <div class="desk-top">
    <img class="animated" src="${card.featuredImage}" alt="work1Snapshot" />
    <div class="">
      <h3 class="tonic-class">${card.heading1}</h3>
      <div class="canopy">
        <ul class="cards-ul">
        ${card.heading2.map((heading, index) => `<li class="info${index}">${heading}</li>`).join('')}
        </ul>
      </div>
      <p class="description">
${card.description}
      </p>
      <ul class="tools">
      ${card.languages.map((lang) => `<li class="tools-li">${lang}</li>`).join('')}
      </ul>
      <div class="view-project">
        <button class="btn" type="button">See Project</button>
      </div>
    </div>
  </div>
</section>
</li>
`).join('');

cardsUl.innerHTML += projectCards;




// window-popup

const clickButton = document.querySelectorAll(".btn")
const openWindow = document.querySelector(".m-popUp")
const closeWindow = document.querySelector(".close-x")

clickButton.forEach(element => {
  element.addEventListener('click', () => {
    openWindow.style.display = "block"

  })
});

closeWindow.addEventListener('click', () => {
  openWindow.style.display = "none";
})
