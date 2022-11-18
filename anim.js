// bg
// let circleBgTop = document.querySelectorAll("#CIRCLE_BG_HALF_TOP");
// circleBgTop.paths = document.querySelectorAll("#CIRCLE_BG_HALF_TOP path");
// let circleBgBottom = document.querySelectorAll("#CIRCLE_BG_HALF_BOTTOM");
// circleBgBottom.paths = document.querySelectorAll("#CIRCLE_BG_HALF_BOTTOM path");
// let circleBgSmall1 = document.querySelectorAll("#CIRCLE_BG_SMALL_1");
// circleBgSmall1.paths = document.querySelectorAll("#CIRCLE_BG_SMALL_1 path");
// let circleBgSmall2 = document.querySelectorAll("#CIRCLE_BG_SMALL_2");
// circleBgSmall2.paths = document.querySelectorAll("#CIRCLE_BG_SMALL_2 path");

// faire clignoter le gros cercle en changeant sa classe pendant un temps defini
let circle3 = document.querySelector("#CIRCLE_3");
circle3.paths = document.querySelectorAll("#CIRCLE_3 path");

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
//////////////////////////////////////////////////////
// MAIN
circle3FlashingLoop();
setInterval(circle3FlashingLoop, getRandomInt(7000, 15000));

//////////////////////////////////////////////////////
// LOOPS
function circle3FlashingLoop() {
    circle3.paths.forEach(path => {
        path.setAttribute('class', 'wav-1');
    });

    setTimeout(function() {
        circle3.paths.forEach(path => {
            path.setAttribute('class', 'cir-2');
        });
    }, getRandomInt(100, 300));
}


//////////////////////////////////////////////////////
// TOOLS
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  
