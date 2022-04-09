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
    description2: `Lorem Ipsum is simply dummy text of the
    printing and typesetting industry.
    Lorem Ipsum has been the industry's 
   standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type
     and scrambled it to make a type specimen book.
     It has survived not only five centuries, 
     but also the leap into electronic typesetting, remaining essent`,

    featuredImage: './photos/Snapshoot-Portfolio.png',
    featuredImage2: './photos/Snapshoot-Portfolio-2.png',
    languages: ['html', 'css', 'javascript'],
    linkLive: 'location.href=\'https://kayonga99.github.io/My-Portfolio/index.html\'',
    linkSource: 'https://kayonga99.github.io/My-Portfolio',
  },
  {
    id: 2,
    heading1: 'Tonic',
    heading2: ['Canopy', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './photos/multi-post.png',
    description2: `Lorem Ipsum is simply dummy text of the
    printing and typesetting industry.
    Lorem Ipsum has been the industry's 
   standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type
     and scrambled it to make a type specimen book.
     It has survived not only five centuries, 
     but also the leap into electronic typesetting, remaining essent`,

    featuredImage2: './photos/Snapshoot+Portfolio.png',
    languages: ['html', 'css', 'javascript'],
    linkLive: 'location.href=\'https://kayonga99.github.io/My-Portfolio/index.html\'',
    linkSource: 'https://kayonga99.github.io/My-Portfolio',
    left: true,
  },
  {
    id: 3,
    heading1: 'Tonic',
    heading2: ['Canopy', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './photos/Snapshoot-yonga.png',
    description2: `Lorem Ipsum is simply dummy text of the
    printing and typesetting industry.
    Lorem Ipsum has been the industry's 
   standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type
     and scrambled it to make a type specimen book.
     It has survived not only five centuries, 
     but also the leap into electronic typesetting, remaining essent`,

    featuredImage2: './photos/Snapshoot-Portfolio.png',
    languages: ['html', 'css', 'javascript'],
    linkLive: 'location.href=\'https://kayonga99.github.io/My-Portfolio/index.html\'',
    linkSource: 'https://kayonga99.github.io/My-Portfolio',
  },
  {
    id: 4,
    heading1: 'Tonic',
    heading2: ['Canopy', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './photos/Snapshoot-pro.png',
    description2: `Lorem Ipsum is simply dummy text of the
    printing and typesetting industry.
    Lorem Ipsum has been the industry's 
   standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type
     and scrambled it to make a type specimen book.
     It has survived not only five centuries, 
     but also the leap into electronic typesetting, remaining essent`,

    featuredImage2: './photos/multi-post.png',
    languages: ['html', 'css', 'javascript'],
    linkLive: 'location.href=\'https://kayonga99.github.io/My-Portfolio/index.html\'',
    linkSource: 'https://kayonga99.github.io/My-Portfolio',
    left: true,
  },

];

const projectCards = projects.map((card) => `
<li>
<section class="card-list">
  <div class="${card.left ? 'desk-top2' : 'desk-top'}">
    <img class="animated" src="${card.featuredImage2}" alt="work1Snapshot" />
    <img class="card" src="${card.featuredImage}" alt="work1Snapshot" />

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
        <button class="btn" type="button" onclick='showPop(${card.id})'>See Project</button>
      </div>
    </div>
  </div>
</section>
</li>
`).join('');

cardsUl.innerHTML += projectCards;

// POPUP DATA
const openWindow = document.querySelector('.m-popUp');

function popData(card) {
  const temp = document.createElement('template');
  temp.innerHTML = `<section class="card-list-23">
  <div class="desk-top">
    <div class="">
      <div class="x-class">
        <h3 class="tonic-class-23">${card.heading}</h3>
        <h4 class="close-x">&times;</h4>
      </div>
        <div class="canopy">
          <ul class="cards-ul">
            <li class="cano">CANOPY</li>
            <li class="info">Back End Dev</li>
            <li class="info">2015</li>
          </ul>
        </div>
        <img class="card" src="./photos/Snapshoot-Portfolio.png" alt="work1Snapshot" />
        <img class="nature-animated" src="./photos/window-up.png" alt="nature animated picture" />
        <div class="src-div">

      <p class="src-description">
        ${card.description2}
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
`;
  const box = document.getElementById('project');
  box.appendChild(temp.content);

  const closeWindow = document.querySelector('.close-x');
  closeWindow.addEventListener('click', () => {
    openWindow.style.display = 'none';
  });

}

/* eslint-disable */;
function showPop(id) {
  projects.find((card) => {
    if (Number(id) === Number(card.id)) {
      popData(card);
      openWindow.style.display = 'block';
    }
  });
}
