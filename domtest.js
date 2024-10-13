const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const colorCode = document.getElementById("colorCode");
// console.log(Math.random());


const hexColor = ()=>{
        let randomNumber = Math.floor(Math.random()*16777215);
        let randomHex = "#" +randomNumber.toString(16);
        console.log(randomHex);
        document.body.style.backgroundColor = randomHex;
        colorCode.innerHTML= randomHex;
}
let interval
const startColor = function(){
    interval =    setInterval(hexColor, 3000)
}
const stopColor = function(){
clearInterval(interval);
interval = null;
}
btn.addEventListener("click", startColor);
btn2.addEventListener("click", stopColor);

