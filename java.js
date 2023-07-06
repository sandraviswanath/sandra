let num1 = 18;
let num2 = 100;
let result = num1 + num2;

document.querySelector('.heading');

console.log(`the sum of 2 number is ${result}`);

let heading = document.querySelector('.heading');
//show the result in web page
heading.innerText = `the sum of 2 numbers is ${result}`;
console.log(`the sum of 2 numbers is ${result}`);

//dynamic list....
let kitchenItemsList = document.getElementById("kitchen-items-list");
let currypowder = ["salt","pepper","chilly","turmeric","garamasala"];

//method 1
for(let powder of currypowder){
   let li = document.createElement("li");
li.innerText = powder;
kitchenItemsList.appendChild(li);
console.log(li);
}

//method 2
//forEach()
//currypowder.forEach(function (powder){
//let li =document.createElement("li");
//li.innerText = powder;
//kitchenItemsList.appendChild(li);
//});



//1. push()
//2.pop()
//3.shift()
//4.unshift()


//step1 :find all the  list items
let allListItems = docum



