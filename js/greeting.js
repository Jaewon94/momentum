// const loginForm = document.querySelector(".login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
// 위 아래 두가지 방법 존재

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const name = document.querySelector("#name");
const toDoForm = document.querySelector("#todo-form");

const HIDDEN_CLASSNAME ="hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  // greeting.innerText = "Hello " +username;
  // 위 아래 같은 표현
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

const greetings = ["안녕하세요","こんにちは", "Hello", "您好", "Bonjour", "jHoia", "Guten Tag", "Boun giorno", "Здравствуйте", "สวัสดีครับ"];
const chosenGreeting = greetings[Math.floor(Math.random() * greetings.length)];

function paintGreeting(username) {
  greeting.innerText = `${chosenGreeting}, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  // name.innerText = username;
  // name.classList.remove(HIDDEN_CLASSNAME);
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  }


const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greeting 
  paintGreeting(savedUsername);
}