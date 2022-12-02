// navigation, popup
let navHome = document.querySelector('#nav-home');
let navProjects = document.querySelector('#nav-projects');

let svgContainer = document.querySelector('#svg-container');
let contentContainer = document.querySelector('#content-container');
let cardsContainer = document.querySelector('#cards-container');

let button = document.querySelector('#content-container input');

// cards
let cards = document.getElementsByClassName('card');
//window.location.href="http://votre_url"



//////////////////////////////////////////////////////
// main
button.addEventListener('click', madeAppearCards);
cardsContainer.addEventListener('click', madeDesappearCards);
navHome.addEventListener('click', madeDesappearCards);
navProjects.addEventListener('click', madeAppearCards);
madeDesappearCards();


for (const elt in cards) {
    if (Object.hasOwnProperty.call(cards, elt)) {
        const element = cards[elt];

        element.addEventListener('click', function() {
            window.location.href = element.dataset.url;
        })
    }
}

function madeAppearCards() {
    cardsContainer.style.display = 'flex';
    svgContainer.style.filter = 'blur(10px)';
    contentContainer.style.filter = 'blur(10px)';

    navHome.classList.remove('active');
    navProjects.classList.add('active');
}
function madeDesappearCards() {
    cardsContainer.style.display = 'none';
    svgContainer.style.filter = 'none';
    contentContainer.style.filter = 'drop-shadow(1px 1px 2px rgba(47, 176, 188, 0.508))';

    navHome.classList.add('active');
    navProjects.classList.remove('active');
}