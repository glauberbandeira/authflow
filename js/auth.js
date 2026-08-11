// ======================================================
// AUTHFLOW - AUTHENTICATION UTILITIES
// ======================================================

// ------------------------------------------------------
// Recupera o usuário atualmente autenticado.
// Retorna:
// - objeto do usuário, caso exista uma sessão
// - null, caso não exista
// ------------------------------------------------------

function getLoggedUser() {

    const loggedUser = localStorage.getItem("loggedUser");

    // Se não existir sessão, retornamos null.
    if (!loggedUser) {
        return null;
    }

    // Converte a string JSON em objeto JavaScript.
    return JSON.parse(loggedUser);
}


// ------------------------------------------------------
// Salva o usuário autenticado.
// Recebe um objeto contendo os dados do usuário
// e armazena esse objeto no localStorage.
// ------------------------------------------------------

function setLoggedUser(user) {

    localStorage.setItem(
        "loggedUser",
        JSON.stringify(user)
    );
}


// ------------------------------------------------------
// Encerra a sessão atual.
// Importante:
// removemos somente "loggedUser".
// Os usuários cadastrados continuam armazenados.
// ------------------------------------------------------

function logout() {

    localStorage.removeItem("loggedUser");
}


// ------------------------------------------------------
// Verifica se existe um usuário autenticado.
// Retorna:
// true  → usuário autenticado
// false → usuário não autenticado
// ------------------------------------------------------

function isAuthenticated() {

    return getLoggedUser() !== null;
}