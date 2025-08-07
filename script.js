
let todoList = [];

function validateForm() {
    const todoInput = document.getElementById("todo-input").value.trim();
    const dateInput = document.getElementById("date-input").value;

    if (todoInput === "" || dateInput === "") {
        alert("please enter a todo item and due date.");
    } else {
        addTodo(todoInput, dateInput);
        document.getElementById("todo-input").value = "";
        document.getElementById("date-input").value = "";
    }
}
function addTodo(todo, date) {
    const todoItem = {
        task: todo,
        date: date
    };

    // Add the new todo item to the todoList array
    todoList.push(todoItem);
    // Display the updated todo list
    displayTodos();

}

function displayTodos() {
    const todoListElement = document.getElementById("todo-list");
    todoListElement.innerHTML = ""; // Clear existing todos

    todoList.forEach((item, index) => {
       todoListElement.innerHTML += `<div class="text-gray-700 text-xl">${item.task} (${item.date})</div>`;
    });
}
function clearTodos() {
    // Clear the todoList array
    todoList = [];
    // Clear the displayed todo list
    displayTodos();
}
