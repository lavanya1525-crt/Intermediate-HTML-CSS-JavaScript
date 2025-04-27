// todo-script.js
// Get elements from the DOM
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoItemsList = document.getElementById('todo-items');

// Function to create a new to-do item
function createTodoItem(taskText) {
    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');

    listItem.innerHTML = `
        <span>${taskText}</span>
        <button onclick="deleteTodo(this)">Delete</button>
    `;

    // Add event listener to toggle the 'completed' class on the list item when clicked
    listItem.addEventListener('click', function(event) {
        if (event.target.tagName !== 'BUTTON') {  //Prevent marking as complete when clicking delete
          this.classList.toggle('completed');
        }
    });
    return listItem;
}

// Add a new to-do item
function addTodo() {
    const taskText = todoInput.value.trim();
    if (taskText !== "") {
        const newTodoItem = createTodoItem(taskText);
        todoItemsList.appendChild(newTodoItem);
        todoInput.value = ""; // Clear the input field
    }
}

// Delete a to-do item
function deleteTodo(button) {
    const listItem = button.parentNode;
    todoItemsList.removeChild(listItem);
}

// Event listeners
addButton.addEventListener('click', addTodo);

// Add tasks by pressing 'Enter' key
todoInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});