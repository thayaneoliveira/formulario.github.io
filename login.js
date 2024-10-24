import { auth } from "./firebase-config.js";
import {
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const provider = new GoogleAuthProvider();

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const validEmail = "thayane520.biel@gmail.com";
    const validPassword = "123456";

    if (email === validEmail && password === validPassword) {

      sessionStorage.setItem('isAuthenticated', 'true');

      window.location.href = "./menu.html";
    } else {
      alert("Email ou senha incorretos. Por favor, tente novamente.");
    }
  });

document.getElementById("googleLogin").addEventListener("click", function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user);
      window.location.href = "./menu.html";
    })
    .catch((error) => {
      console.error("Erro ao fazer login com Google:", error);
    });
});
