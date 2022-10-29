// faire clignoter le gros cercle en changeant sa classe pendant un temps defini
let circle3 = document.querySelector("#CIRCLE_3");
circle3.paths = document.querySelectorAll("#CIRCLE_3 path");

//////////////////////////////////////////////////////
// tests
circleFlashingLoop();

//////////////////////////////////////////////////////
// MAIN
setInterval(circleFlashingLoop, getRandomInt(7000, 15000));

//////////////////////////////////////////////////////
// LOOPS
function circleFlashingLoop() {
    circle3.paths.forEach(path => {
        path.setAttribute('class', 'wav-1');
        // path.style.filter = "drop-shadow(3px 3px 5px red)";
    });

    setTimeout(function() {
        circle3.paths.forEach(path => {
            path.setAttribute('class', 'cir-2');
            // path.style.filter = "";
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
  
