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

const cardDataPopUp = document.getElementById('project')

const popUpWindowData = {
  heading1: 'Tonic',
  heading2: ['Canopy', 'Back End Dev', '2015'],
  featuredImage: './photos/Snapshoot-Portfolio.png',
  featuredImage2: './photos/window-up.png',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  languages: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
}


const projectsWindow = popUpWindowData.map((project, index) => `
<section class="card-list-23">
<div class="desk-top">
  <div class="">
    <div class="x-class">
      <h3 class="tonic-class-23">${project.heading1}</h3>
      <h4 class="close-x">&times;</h4>
    </div>
      <div class="canopy">
        <ul class="cards-ul">
          <li class="cano">CANOPY</li>
          <li class="info">Back End Dev</li>
          <li class="info">2015</li>
        </ul>
      </div>
      <img class="card" src="${project.featuredImage}" alt="work1Snapshot" />
      <img class="nature-animated" src="${project.featuredImage2}" alt="nature animated picture" />
      <div class="src-div">

    <p class="src-description">
${project.description}
    </p>
    <p class="src-description-3">
${project.description2}
    </p>
    <div class="div-src">
    <ul class="tools src-tools">
      <li class="tools-li-src"> html</li>
      <li class="tools-li-src">css</li>
      <li class="tools-li">javaScript</li>
      <li class="extra">github</li>
      <li class="extra">ruby</li>
      <li class="extra">Bootstraps  </li>
    </ul>
    <div class="view-project">
      <button class="src-btn" type="button">See live <img src="./photos/icons/btn-icon.png" alt="button-icon"> </button>
      <button class="src-btn" type="button">See Source <img src="./photos/icons/blue-github.png" alt="github-icon"> </button>
    </div>
  </div>
  </div>
</section>

`

).join('');

cardDataPopUp.innerHTML += projectsWindow;

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
