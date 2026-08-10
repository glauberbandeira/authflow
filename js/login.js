// ======================================================
// AUTHFLOW - LOGIN
// ======================================================


// ------------------------------------------------------
// 1. Selecionamos o formulário pelo seu ID.
// ------------------------------------------------------

const loginForm = document.getElementById("loginForm");


// ------------------------------------------------------
// 2. Escutamos o evento "submit" do formulário.
//
// Quando o usuário clicar em "Entrar", essa função
// será executada.
// ------------------------------------------------------

loginForm.addEventListener("submit", function (event) {

    // Impede o comportamento padrão do formulário.
    //
    // Sem isso, o navegador recarregaria a página
    // automaticamente.
    event.preventDefault();


    // --------------------------------------------------
    // 3. Capturamos os valores digitados pelo usuário.
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
    // 4. Selecionamos os elementos onde exibiremos
    //    mensagens para o usuário.
    // --------------------------------------------------

    const emailError = document.getElementById("emailError");

    const passwordError = document.getElementById("passwordError");

    const formMessage = document.getElementById("formMessage");


    // --------------------------------------------------
    // 5. Limpamos mensagens antigas.
    //
    // Isso evita que uma mensagem de uma tentativa
    // anterior continue aparecendo.
    // --------------------------------------------------

    emailError.textContent = "";

    passwordError.textContent = "";

    formMessage.textContent = "";


    // --------------------------------------------------
    // 6. Validação básica dos campos.
    // --------------------------------------------------

    let isValid = true;


    // Verifica se o e-mail foi preenchido.

    if (!email) {

        emailError.textContent = "Digite seu e-mail.";

        isValid = false;
    }


    // Verifica se a senha foi preenchida.

    if (!password) {

        passwordError.textContent = "Digite sua senha.";

        isValid = false;
    }


    // Se existir algum erro de validação,
    // interrompemos a execução.

    if (!isValid) {
        return;
    }


    // --------------------------------------------------
    // 7. Recuperamos os usuários armazenados.
    //
    // localStorage sempre armazena dados como texto.
    //
    // Por isso usamos JSON.parse() para transformar
    // o texto novamente em um array JavaScript.
    // --------------------------------------------------

    const users = JSON.parse(
        localStorage.getItem("users")
    ) || [];


    // --------------------------------------------------
    // 8. Procuramos um usuário que tenha:
    //
    // - o mesmo e-mail
    // - a mesma senha
    //
    // O método "find()" retorna o primeiro usuário
    // que satisfaz a condição.
    // --------------------------------------------------

    const user = users.find(function (user) {

        return (
            user.email === email &&
            user.password === password
        );

    });


    // --------------------------------------------------
    // 9. Verificamos se encontramos o usuário.
    // --------------------------------------------------

    if (!user) {

        formMessage.textContent =
            "E-mail ou senha incorretos.";

        return;
    }


    // --------------------------------------------------
    // 10. Login realizado.
    //
    // Agora precisamos guardar uma informação dizendo
    // que existe um usuário autenticado.
    //
    // Para isso vamos criar uma sessão simples.
    // --------------------------------------------------

    const loggedUser = {

        id: user.id,

        name: user.name,

        email: user.email

    };


    // --------------------------------------------------
    // 11. Salvamos a sessão no localStorage.
    //
    // Observe que NÃO salvamos a senha na sessão.
    //
    // A dashboard poderá usar esses dados para saber
    // quem está conectado.
    // --------------------------------------------------

    localStorage.setItem(
        "loggedUser",
        JSON.stringify(loggedUser)
    );


    // --------------------------------------------------
    // 12. Redirecionamos o usuário.
    //
    // A dashboard ainda será criada no próximo passo.
    // Por enquanto, vamos apenas demonstrar que o login
    // foi concluído.
    // --------------------------------------------------

    // Após autenticar o usuário, redirecionamos para
    // a área protegida da aplicação.
    window.location.href = "dashboard.html";

});