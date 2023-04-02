const moto = document.querySelector(".moto");
const building = document.querySelector(".building");
const game_over = document.querySelector(".game_over");
const scoreDiv = document.querySelector(".score");

document.addEventListener("keydown", function(event) {
    jump();
});
document.addEventListener("touchstart", function(event) {
    jump();
});
document.addEventListener("mousedown", function(event) {
    jump();
});


function jump() {
    if (moto.classList != 'jump') {
        moto.classList.add("jump");
    }
    setTimeout( function() {
        moto.classList.remove("jump");
    }, 1000);
}

let isAlive = setInterval( function() {
    let motoTop = parseInt(window.getComputedStyle(moto).getPropertyValue("top"));
    let buildLeft = parseInt(window.getComputedStyle(building).getPropertyValue("left"));

    if (buildLeft < 90 && buildLeft > 0 && motoTop >= 50) {
        building.classList.add("show_game_over");
        game_over.classList.add("show_game_over");
        moto.classList.add("show_game_over");
    }
}, 10);

let score = 0;
building.addEventListener('animationiteration', () => {
    scoreDiv.innerHTML = score + 1;
    score = score + 1;
  });

