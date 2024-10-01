// form.js

// Inicializa o EmailJS
(function(){
    emailjs.init("SoYFGdC765nftygyX"); // Substitua pela sua Public API Key
})();

// Manipula o envio do formulário
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Coleta os dados do formulário
    const userName = document.getElementById("txt").value; // Nome de usuário
    const userEmail = document.getElementById("email").value; // E-mail
    const userPhone = document.getElementById("broj").value; // Telefone
    const userAge = document.getElementById("password").value; // Idade

    // Cria um objeto com os dados do formulário
    const templateParams = {
        from_name: userName, // Corresponde ao template
        to_email: userEmail, // Corresponde ao template
        phone: userPhone,     // Corresponde ao template
        age: userAge,        // Corresponde ao template
    };

    // Envia o e-mail
    emailjs.send("gmailMessage", "template_febra45", templateParams)
        .then(function(response) {
            console.log("Email enviado com sucesso!", response.status, response.text);
            alert("Formulário enviado com sucesso!");
        }, function(error) {
            console.log("Erro ao enviar o e-mail:", error);
            alert("Erro ao enviar formulário. Tente novamente.");
        });
});
