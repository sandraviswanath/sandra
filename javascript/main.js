//kitchen product
let kitchenInput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenItemList = document.getElementById("kitchen-items-list");

//create an empty array

//step2
//add kitchen items
function addkitchenItems(){
    let kitchenInputData = kitchenInput.value;  //assign the input data in to a variable

    //create dom elements now
    let li = document.createElement('li');
    li.innerText = kitchenInputData;
    li.style.cssText ="animation-name: slideIn;"; // give style using javascript , animation- name : slideIn property used for geting the value in a slided manner
    kitchenItemList.appendChild(li);

    kitchenInput.value = "";   //this is used for keeping the typing space empty or clearing automatically
    kitchenInput.focus();      // for focus the cursor
    console.log(li);
}

//step1
//add an event lister to the button
addBtn.addEventListener('click', addkitchenItems);

