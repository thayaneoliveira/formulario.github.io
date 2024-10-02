import { db } from './firebase-config.js'; 
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";


(function(){
    emailjs.init("SoYFGdC765nftygyX"); 
})();


document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const userName = document.getElementById("txt").value; 
    const userEmail = document.getElementById("email").value; 
    const userPhone = document.getElementById("broj").value; 
    const userAge = document.getElementById("password").value; 

    const templateParams = {
        from_name: userName, 
        to_email: userEmail, 
        phone: userPhone,    
        age: userAge,        
    };

    emailjs.send("gmailMessage", "template_febra45", templateParams)
        .then(function(response) {
            console.log("Email enviado com sucesso!", response.status, response.text);
            alert("Formulário enviado com sucesso!");

            addDoc(collection(db, "userSubmissions"), {
                name: userName,
                email: userEmail,
                phone: userPhone,
                age: userAge,
                timestamp: new Date() 
            })
            .then(function() {
                // console.log("Dados salvos no Firestore com sucesso!");
                // alert("Dados salvos no banco de dados com sucesso!");

                
                document.getElementById("loginForm").reset();
            })
            .catch(function(error) {
                console.error("Erro ao salvar os dados no Firestore:", error);
                alert("Erro ao salvar os dados no banco de dados.");
            });
        }, function(error) {
            console.log("Erro ao enviar o e-mail:", error);
            alert("Erro ao enviar formulário. Tente novamente.");
        });
});
