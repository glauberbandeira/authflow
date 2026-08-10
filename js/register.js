// Função para validar o formulário de registro
const registerForm = document.getElementById("registerForm");

// Adiciona um ouvinte de evento para o envio do formulário
registerForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const name = document.getElementById("name").value.trim(); // Obtém o valor do campo de nome e remove espaços em branco
    const email = document.getElementById("email").value.trim().toLowerCase(); // Obtém o valor do campo de e-mail e converte para minúsculas
    const password = document.getElementById("password").value; // Obtém o valor do campo de senha
    const confirmPassword = document.getElementById("confirmPassword").value; // Obtém o valor do campo de confirmação de senha

    const nameError = document.getElementById("nameError"); // Obtém o elemento de erro para o nome
    const emailError = document.getElementById("emailError"); // Obtém o elemento de erro para o e-mail
    const passwordError = document.getElementById("passwordError"); // Obtém o elemento de erro para a senha
    const confirmPasswordError = document.getElementById("confirmPasswordError"); // Obtém o elemento de erro para a confirmação de senha
    const formMessage = document.getElementById("formMessage"); // Obtém o elemento de mensagem do formulário

    nameError.textContent = ""; // Limpa mensagens de erro anteriores
    emailError.textContent = ""; // Limpa mensagens de erro anteriores
    passwordError.textContent = ""; // Limpa mensagens de erro anteriores
    confirmPasswordError.textContent = ""; // Limpa mensagens de erro anteriores
    formMessage.textContent = ""; // Limpa mensagens de sucesso anteriores

    let isValid = true; // Variável para rastrear a validade do formulário

    // Validações do formulário    
    if (name.length < 3) { // Valida se o nome tem pelo menos 3 caracteres
        nameError.textContent = "O nome deve ter pelo menos 3 caracteres.";
        isValid = false;
    }
    // Valida se o e-mail não está vazio
    if (!email) { // Valida se o e-mail não está vazio
        emailError.textContent = "Digite um e-mail.";
        isValid = false;
    }

    if (password.length < 6) { // Valida se a senha tem pelo menos 6 caracteres
        passwordError.textContent = "A senha deve ter pelo menos 6 caracteres.";
        isValid = false;
    }

    if (password !== confirmPassword) { // Valida se a senha e a confirmação de senha coincidem
        confirmPasswordError.textContent = "As senhas não coincidem.";
        isValid = false;
    }

    if (!isValid) { // Se o formulário não for válido, interrompe a execução
        return;
    }

    // Recupera os usuários existentes do localStorage ou inicializa um array vazio
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Verifica se o e-mail já está cadastrado
    const userExists = users.some(function (user) {
        return user.email === email;
    });

    // Se o e-mail já estiver cadastrado, exibe uma mensagem de erro e interrompe a execução
    if (userExists) {
        emailError.textContent = "Este e-mail já está cadastrado.";
        return;
    }

    // Cria um novo objeto de usuário com os dados fornecidos
    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        password: password
    };

    users.push(newUser); // Adiciona o novo usuário ao array de usuários

    localStorage.setItem("users", JSON.stringify(users)); // Salva o array atualizado de usuários no localStorage

    formMessage.textContent = "Cadastro realizado com sucesso!"; // Exibe uma mensagem de sucesso

    registerForm.reset(); // Limpa os campos do formulário
});