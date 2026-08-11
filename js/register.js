// ======================================================
// AUTHFLOW - REGISTER
// ======================================================


// ------------------------------------------------------
// Selecionamos o formulário de cadastro.
// ------------------------------------------------------

const registerForm =
    document.getElementById("registerForm");


// ------------------------------------------------------
// Executamos quando o formulário for enviado.
// ------------------------------------------------------

registerForm.addEventListener("submit", function (event) {

    // Impede o envio tradicional do formulário.
    event.preventDefault();


    // --------------------------------------------------
    // Capturamos os dados.
    // --------------------------------------------------

    const name = document
        .getElementById("name")
        .value
        .trim();

    const email = document
        .getElementById("email")
        .value
        .trim()
        .toLowerCase();

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;


    // --------------------------------------------------
    // Elementos para mensagens.
    // --------------------------------------------------

    const nameError =
        document.getElementById("nameError");

    const emailError =
        document.getElementById("emailError");

    const passwordError =
        document.getElementById("passwordError");

    const confirmPasswordError =
        document.getElementById("confirmPasswordError");

    const formMessage =
        document.getElementById("formMessage");


    // Limpamos mensagens antigas.

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    formMessage.textContent = "";


    // --------------------------------------------------
    // Controle geral da validação.
    // --------------------------------------------------

    let isValid = true;


    // --------------------------------------------------
    // Validação do nome.
    // --------------------------------------------------

    if (name.length < 3) {

        nameError.textContent =
            "O nome deve ter pelo menos 3 caracteres.";

        isValid = false;
    }


    // --------------------------------------------------
    // Validação do e-mail.
    //
    // O input type="email" já realiza uma validação
    // básica no navegador, mas mantemos a verificação
    // também no JavaScript.
    // --------------------------------------------------

    if (!email) {

        emailError.textContent =
            "Digite um e-mail.";

        isValid = false;
    }


    // --------------------------------------------------
    // Validação da senha.
    // --------------------------------------------------

    if (password.length < 6) {

        passwordError.textContent =
            "A senha deve ter pelo menos 6 caracteres.";

        isValid = false;
    }


    // --------------------------------------------------
    // Verificação das senhas.
    // --------------------------------------------------

    if (password !== confirmPassword) {

        confirmPasswordError.textContent =
            "As senhas não coincidem.";

        isValid = false;
    }


    // Se houver algum erro, não continuamos.

    if (!isValid) {
        return;
    }


    // --------------------------------------------------
    // Recuperamos os usuários existentes.
    // --------------------------------------------------

    const users = JSON.parse(
        localStorage.getItem("users")
    ) || [];


    // --------------------------------------------------
    // Verificamos se o e-mail já está cadastrado.
    // --------------------------------------------------

    const userExists = users.some(function (user) {

        return user.email === email;

    });


    if (userExists) {

        emailError.textContent =
            "Este e-mail já está cadastrado.";

        return;
    }


    // --------------------------------------------------
    // Criamos o novo usuário.
    // --------------------------------------------------

    const newUser = {

        id: Date.now(),

        name: name,

        email: email,

        password: password

    };


    // --------------------------------------------------
    // Adicionamos o usuário ao array.
    // --------------------------------------------------

    users.push(newUser);


    // --------------------------------------------------
    // Salvamos novamente os usuários.
    // --------------------------------------------------

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );


    // --------------------------------------------------
    // Informamos que o cadastro foi concluído.
    // --------------------------------------------------

    formMessage.textContent =
        "Cadastro realizado com sucesso!";


    // Limpamos os campos do formulário.
    registerForm.reset();

});