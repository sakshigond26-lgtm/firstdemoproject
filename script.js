const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const loginData = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    console.log("Login data:");
    console.log(JSON.stringify(loginData, null, 2));

    alert("Login data submitted. Check the browser console.");
});