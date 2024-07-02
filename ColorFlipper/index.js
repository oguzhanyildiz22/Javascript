const colors = ["yellow","red","blue","grey"];
const btn = document.getElementById("btn");
const text = document.querySelector(".text");

btn.addEventListener("click",function () {
    const randomNumber = getRandomNumber();

    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    text.textContent = colors[randomNumber];
    
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
    
}