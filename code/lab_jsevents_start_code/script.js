// Get references to the pending and completed lists
const list = document.querySelector("#list")
const completedList = document.querySelector("#completed-list"); // completed list 

// Get references to the form buttons and date display
const enterButton = document.getElementById("enter");
const showDate = document.getElementById("show-date");
const dateDisplay = document.getElementById("date-display");


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


// Create a checkbox for marking items as complete
const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.addEventListener("change", ()=>{
    // toggle the completed item on the list class
    li.classList.toggle("completed");
    if (li.classList.contains("completed")) {
        // move completed item to completed list
        list.removeChild(li);
        completedList.appendChild(li) ;
    } else{
        // move it back to the original list
        completedList.removeChild(li);
        list.appendChild(li);
    }

})

// add checkbox before the list item text
li.insertBefore(checkbox, li.firstChild);



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

// add fucntioning Show Date Button
showDate.addEventListener("click", (event) => {
    event.preventDefault();
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-GB")
    dateDisplay.innerText = formattedDate;
});


    

});











