// ======================================================
// AUTHFLOW - DASHBOARD
// ======================================================


// ------------------------------------------------------
// 1. Recuperamos a sessão atual.
//
// JSON.parse() transforma a string armazenada no
// localStorage novamente em um objeto JavaScript.
//
// Se não existir sessão, o resultado será null.
// ------------------------------------------------------

const loggedUser = JSON.parse(
    localStorage.getItem("loggedUser")
);


// ------------------------------------------------------
// 2. Proteção da dashboard.
//
// Se não existe usuário autenticado, não permitimos
// acesso à página.
// ------------------------------------------------------

if (!loggedUser) {

    // Envia o usuário de volta para o login.

    window.location.href = "index.html";
}


// ------------------------------------------------------
// 3. Selecionamos os elementos da interface.
// ------------------------------------------------------

const userName = document.getElementById("userName");

const userEmail = document.getElementById("userEmail");

const logoutButton = document.getElementById("logoutButton");


// ------------------------------------------------------
// 4. Preenchemos os dados do usuário.
//
// Usamos textContent para inserir texto na página.
// ------------------------------------------------------

userName.textContent = loggedUser.name;

userEmail.textContent = loggedUser.email;


// ------------------------------------------------------
// 5. Evento de Logout.
//
// Quando o usuário clicar no botão "Sair", esta função
// será executada.
// ------------------------------------------------------

logoutButton.addEventListener("click", function () {

    // --------------------------------------------------
    // Removemos somente a sessão atual.
    //
    // IMPORTANTE:
    //
    // Não removemos "users", pois os usuários cadastrados
    // devem continuar existindo.
    // --------------------------------------------------

    localStorage.removeItem("loggedUser");


    // --------------------------------------------------
    // Depois de remover a sessão, enviamos o usuário
    // novamente para a página de login.
    // --------------------------------------------------

    window.location.href = "index.html";

});