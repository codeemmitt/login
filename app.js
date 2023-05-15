const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
  { username: 'user3', password: 'password3' },
  { username: 'user4', password: 'password4' },
  { username: 'user5', password: 'password5' }
];

const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    const user = users.find(user => user.username === enteredUsername && user.password === enteredPassword);

    if (user) {
        window.location.href = "welcome.html";
    } else {
        alert("Invalid username or password");
    }

    usernameInput.value = "";
    passwordInput.value = "";
});
