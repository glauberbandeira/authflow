const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const formMessage = document.getElementById("formMessage");

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    formMessage.textContent = "";

    let isValid = true;

    if (name.length < 3) {
        nameError.textContent = "O nome deve ter pelo menos 3 caracteres.";
        isValid = false;
    }

    if (!email) {
        emailError.textContent = "Digite um e-mail.";
        isValid = false;
    }

    if (password.length < 6) {
        passwordError.textContent = "A senha deve ter pelo menos 6 caracteres.";
        isValid = false;
    }

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "As senhas não coincidem.";
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.some(function (user) {
        return user.email === email;
    });

    if (userExists) {
        emailError.textContent = "Este e-mail já está cadastrado.";
        return;
    }

    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        password: password
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    formMessage.textContent = "Cadastro realizado com sucesso!";

    registerForm.reset();
});