
document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault(); 

   
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
    console.log('Email:', email);
    console.log('Password:', password);

    
    const validEmail = 'thayane520.biel@gmail.com'; 
    const validPassword = '123'; 

    console.log('Valid Email:', validEmail);
    console.log('Valid Password:', validPassword);

    if (email === validEmail && password === validPassword) {
      
        window.location.href = './form.html';
    } else {
        alert('Email ou senha inválidos. Tente novamente.'); 
    }
});
