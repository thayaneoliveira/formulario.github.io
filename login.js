document.getElementById('loginButton').addEventListener('click', function(event) {
    
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let valid = true;
    const myEmail = 'thayane520.biel@gmail.com'; 
    const myPassword = '123'; 
    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Por favor, insira um e-mail válido.';
        valid = false;
    } else if (email !== myEmail) {
        document.getElementById('emailError').textContent = 'E-mail incorreto.';
        valid = false;
    }
    if (password !== myPassword) {
        document.getElementById('passwordError').textContent = 'Senha incorreta.';
        valid = false;
    }
    if (valid) {
        window.location.href = './form.html';
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
