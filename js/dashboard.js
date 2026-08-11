// ======================================================
// AUTHFLOW - DASHBOARD
// ======================================================


// ------------------------------------------------------
// Recuperamos o usuário autenticado.
//
// A função getLoggedUser() está em auth.js.
// ------------------------------------------------------

const loggedUser = getLoggedUser();


// ------------------------------------------------------
// Proteção da página.
//
// Se não existe usuário autenticado,
// enviamos o usuário para o login.
// ------------------------------------------------------

if (!loggedUser) {

    window.location.href = "index.html";
}


// ------------------------------------------------------
// Selecionamos os elementos da interface.
// ------------------------------------------------------

const userName =
    document.getElementById("userName");

const userEmail =
    document.getElementById("userEmail");

const logoutButton =
    document.getElementById("logoutButton");


// ------------------------------------------------------
// Exibimos os dados do usuário.
//
// textContent é utilizado para inserir texto de forma
// segura, evitando interpretar o conteúdo como HTML.
// ------------------------------------------------------

userName.textContent = loggedUser.name;

userEmail.textContent = loggedUser.email;


// ------------------------------------------------------
// Logout
// ------------------------------------------------------

logoutButton.addEventListener("click", function () {

    // Encerramos a sessão.
    logout();

    // Retornamos para o login.
    window.location.href = "index.html";

});