const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let toDos = [];


function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
  saveToDos();
  li.remove();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button")
  button.innerText = "❌"
  li.appendChild(span);
  li.appendChild(button);
  button.addEventListener("click", deleteTodo)
  span.innerText = `•${newTodo.text}`;
  todoList.appendChild(li);
  
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value="";
  const newTodoObject = {
    text : newTodo,
    id : Date.now(),
  }
  toDos.push(newTodoObject);
  paintTodo(newTodoObject);
  saveToDos()
}

todoForm.addEventListener("submit", handleTodoSubmit)

const savedToDos = localStorage.getItem("todos");

// function sayHello(item) {
//   console.log("This is turn off", item);
// } 밑에 화살표 함수랑 같은 의미

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos
  parsedToDos.forEach(paintTodo);
} 


