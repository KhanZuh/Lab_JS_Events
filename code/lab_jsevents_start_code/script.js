const list = document.querySelector("#list")

const enterButton = document.getElementById("enter");





// Grabbing the enter button and adding an event listener 
enterButton.addEventListener("click", (event) =>{
event.preventDefault();

// click is a define event that event listener has


// Creating an <li> element and attaching it to the existing <ul>:
const input = document.getElementById("new-todo");
const li = document.createElement("li");
li.innerText = input.value;


// Add new item to list
list.appendChild(li)


// create delete button 
const deleteButton = document.createElement("button");
deleteButton.innerText = "delete";


// add delete button to each list element
li.appendChild(deleteButton);

// functioning delete button
deleteButton.addEventListener("click", () => {
    event.preventDefault();
    li.remove();
});

});







