// ***********************************************************************GET HTML ELEMENTS***********************************************************************************************
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
let li = document.querySelectorAll('li')

// ***********************************************************************USE UPDATED LIST***********************************************************************************************

//run when new item is added to list OTHERWISE NEW LIST ITEMS DO NOT GET FULL INTERACTIVITY
function useUpdatedLists(){
// allows crossing out of list elements
	let list = document.querySelectorAll('li')
	list.forEach( listItem =>{
	listItem.addEventListener("click", ()=> {
		listItem.classList.toggle('done')
	})
})

let button2 = document.getElementsByClassName('delete')
let btnArr = Array.from(button2)

// removes clicked element from dom as long as there is more than 1 element
if(button2.length >0){
	btnArr.forEach( btn =>{
		btn.addEventListener("click", ()=>{ 
			btn.parentElement.remove()
		})
	})
}
}


function inputLength() {
	return input.value.length;
}

// ***********************************************************************CREATE LIST***********************************************************************************************

//creates and appends list to dom
function createListElement() {

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value)); // adds the value of user input into list
	ul.appendChild(li);
	input.value = ""; //resets value to empty string

	makeButton(li)
	useUpdatedLists() //calls the use of updated list as the original has been modified
}

// ***********************************************************************ADD TO LIST***********************************************************************************************

//adds element to list after click as long as the value is not empty
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

//adds to list after enter pressed
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// ***********************************************************************MAKE DELETE BUTTONS***********************************************************************************************

//creates delete buttons FOR EVERY LIST ITEM
function makeButton(listItem){

	let button = document.createElement('button')
	button.className= "delete"
	button.innerHTML = "delete"
	listItem.appendChild(button)
}

// ***********************************************************************ADD FUNCTIONALITY TO INITIAL LIST***********************************************************************************************

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

//inits existing list and allows crossing done items
li.forEach( listItem =>{
	makeButton(listItem)
	listItem.addEventListener("click", ()=> {
		listItem.classList.toggle('done')
	})
})

let button2 = document.getElementsByClassName('delete')
let btnArr = Array.from(button2)

//removes pressed item
if(button2.length >0){
	btnArr.forEach( btn =>{
		btn.addEventListener("click", ()=>{
			btn.parentElement.remove()
		})
	})
}



