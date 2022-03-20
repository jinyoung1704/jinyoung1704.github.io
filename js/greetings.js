
const login_form = document.querySelector("#login_form");
const button = document.querySelector("#login_form button");

const loginInput = document.querySelector("#login_form input");

const message = document.querySelector("#message");

const HIDDEN = "hidden";
const USERNAME_KEY = "username";

function onClickSubmit(event) {
    event.preventDefault();

    login_form.classList.add(HIDDEN);

    const text = loginInput.value;

    localStorage.setItem(USERNAME_KEY, text);
    
    message.innerHTML = `Hello ${text}`;

    message.classList.remove(HIDDEN);
    
}




const saveUserName = localStorage.getItem(USERNAME_KEY);

if(saveUserName === null) {
    login_form.classList.remove(HIDDEN);
    login_form.addEventListener("submit", onClickSubmit);
} else {
    message.innerHTML = `Hello ${saveUserName}`;
    message.classList.remove(HIDDEN);
    login_form.classList.add(HIDDEN);
    
}