document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('login__username').value;
    const password = document.getElementById('login__password').value;
    const validUsername = 'thayane';
    const validPassword = '123';
if (username === validUsername && password === validPassword) {
        window.location.href = './form.html';
    } else {
        alert('Usuário ou senha inválidos. Tente novamente.');
    }
});
