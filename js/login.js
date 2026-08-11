// ======================================================
// AUTHFLOW - LOGIN
// ======================================================


// ------------------------------------------------------
// Selecionamos o formulário de login.
// ------------------------------------------------------

const loginForm = document.getElementById("loginForm");


// ------------------------------------------------------
// Executamos a lógica quando o formulário for enviado.
// ------------------------------------------------------

loginForm.addEventListener("submit", function (event) {

    // Impede o navegador de recarregar a página.
    event.preventDefault();


    // --------------------------------------------------
    // Capturamos os valores digitados.
    // --------------------------------------------------

    const email = document
        .getElementById("email")
        .value
        .trim()
        .toLowerCase();

    const password = document
        .getElementById("password")
        .value;


    // --------------------------------------------------
    // Selecionamos os elementos de mensagem.
    // --------------------------------------------------

    const emailError =
        document.getElementById("emailError");

    const passwordError =
        document.getElementById("passwordError");

    const formMessage =
        document.getElementById("formMessage");


    // Limpamos mensagens anteriores.
    emailError.textContent = "";
    passwordError.textContent = "";
    formMessage.textContent = "";


    // --------------------------------------------------
    // Validação dos campos.
    // --------------------------------------------------

    let isValid = true;


    if (!email) {

        emailError.textContent =
            "Digite seu e-mail.";

        isValid = false;
    }


    if (!password) {

        passwordError.textContent =
            "Digite sua senha.";

        isValid = false;
    }


    // Se houver erro, interrompemos o processo.
    if (!isValid) {
        return;
    }


    // --------------------------------------------------
    // Recuperamos os usuários cadastrados.
    // --------------------------------------------------

    const users = JSON.parse(
        localStorage.getItem("users")
    ) || [];


    // --------------------------------------------------
    // Procuramos um usuário com as credenciais
    // informadas.
    // --------------------------------------------------

    const user = users.find(function (user) {

        return (
            user.email === email &&
            user.password === password
        );

    });


    // --------------------------------------------------
    // Se não encontramos o usuário, informamos que
    // as credenciais estão incorretas.
    // --------------------------------------------------

    if (!user) {

        formMessage.textContent =
            "E-mail ou senha incorretos.";

        return;
    }


    // --------------------------------------------------
    // Criamos o objeto da sessão.
    //
    // Não colocamos a senha aqui.
    // --------------------------------------------------

    const loggedUser = {

        id: user.id,

        name: user.name,

        email: user.email

    };


    // --------------------------------------------------
    // Utilizamos a função centralizada de autenticação.
    // --------------------------------------------------

    setLoggedUser(loggedUser);


    // --------------------------------------------------
    // Usuário autenticado → dashboard.
    // --------------------------------------------------

    window.location.href = "dashboard.html";

});