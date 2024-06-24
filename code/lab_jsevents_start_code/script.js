// document.addEventListener('DOMContentLoaded', () => {


const enterButton = document.getElementById("enter");





// Grabbing the enter button and adding an event listener 
enterButton.addEventListener("enter", (event) =>{
event.preventDefault();
addToDoItem();
});

// })