let color = document.querySelector(".color");
let car = document.querySelector(".car");
let block = document.querySelectorAll(".block");
console.log(block);
for(let i = 0; i < block.length; i++) {
    block[i].addEventListener('click', () => {
        let colorBlock = window.getComputedStyle(block[i]).backgroundColor;
        car.style.background = colorBlock;
        console.log(block);
    });
    

}

color.addEventListener('input', ()=> {
    car.style.background = color.value;
});
