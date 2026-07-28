const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const loginData = {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        };

        console.log("Login data:");
        console.log(JSON.stringify(loginData, null, 2));

        alert("Login submitted. Check the browser console.");
    });
}

const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;
        const confirmPassword =
            document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        const signupData = {
            fullName: fullName,
            email: email
        };

        console.log("Signup data:");
        console.log(JSON.stringify(signupData, null, 2));

        alert("Account created. Check the browser console.");
    });
}