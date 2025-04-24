import { db } from "./firebase-config.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

emailjs.init("SoYFGdC765nftygyX");

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
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

    emailjs
      .send("gmailMessage", "template_febra45", templateParams)
      .then(function (response) {
        console.log(
          "Email enviado com sucesso!",
          response.status,
          response.text
        );

        // Mostrar mensagem visual de sucesso
        const successDiv = document.getElementById("successMessage");
        successDiv.style.display = "block";

        // Opcional: esconder a mensagem após 4 segundos
        setTimeout(() => {
          successDiv.style.display = "none";
        }, 4000);

        // Salvar no Firestore
        return addDoc(collection(db, "userSubmissions"), {
          name: userName,
          email: userEmail,
          phone: userPhone,
          age: userAge,
          timestamp: new Date(),
        });
      })
      .then(function () {
        document.getElementById("loginForm").reset();
      })
      .catch(function (error) {
        console.error("Erro ao enviar o e-mail ou salvar no Firestore:", error);
        alert("Erro ao enviar formulário. Tente novamente.");
      });
  });
