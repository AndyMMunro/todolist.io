var todoTextInput = document.querySelector("#todo-text-input");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// renderTodos();
init();

function renderTodos() {

    todoList.innerHTML = "";
    todoCountSpan.textContent = todos.length;

    for (var i = 0; i < todos.length; i++) {
        var todo = todos[i];


        var li = document.createElement("li");
        li.textContent = todo;
        li.setAttribute("data-index", i);

        var button = document.createElement("button");
        button.textContent = "complete";


        li.appendChild(button);
        todoList.appendChild(li);
    }

}


todoForm.addEventListener("submit", pushTextClearField);

function pushTextClearField(event) {

    event.preventDefault();

    var todoText = todoTextInput.value;

    if (todoText === "") {
        return;
    }

    todos.push(todoText);
    todoTextInput.value = "";

    // var button = document.createElement("button");
    // button.textContent = "complete";


    // var li = document.createElement("li");
    // li.textContent = todoText;


    // li.appendChild(button);
    // li.appendChild(button);
    // todoList.appendChild(li);
    todosStorage();
    renderTodos();
}

function init() {

    var todosStorage = JSON.parse(localStorage.getItem("todos"));

    if (todosStorage !== null) {
        todos = todosStorage;
    }

    renderTodos();
}


function todosStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

todoList.addEventListener("click", eraseDataIndex);

function eraseDataIndex(event) {

    var element = event.target;

    if (element.matches("button") === true) {

        var erase = element.parentElement.getAttribute("data-index");
        todos.splice(erase, 1);

        renderTodos();
    }

}