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
  
