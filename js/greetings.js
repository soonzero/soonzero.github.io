const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    const date = new Date();
    const hours = date.getHours();
    if (hours < 11) {
        greeting.innerText = `Good morning, ${username}!`
    } else if (hours < 18) {
        greeting.innerText = `Good afternoon, ${username}!`
    } else if (hours < 23) {
        greeting.innerText = `Good evening, ${username}!`
    } else {
        greeting.innerText = `It's time for goodbye, ${username}!`
    }
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}