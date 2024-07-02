let number = 0;

const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const num = document.querySelector(".num");
const numDisplay = document.getElementsByClassName("num")

inc.addEventListener("click", () => {
  number++;
  num.textContent = number;
  
  if(number % 2 === 0){
    num.style.color = 'blue';
 }
 else{
   num.style.color = 'black';
 }
});

dec.addEventListener("click", () => {
  number--;
  num.textContent = number;

  if(number % 2 === 0){
     num.style.color = 'green';
  }
  else{
    num.style.color = 'black';
  }
});

