// Importando a autenticação do Firebase
import { auth } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// Verifica o estado da autenticação
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // Se o usuário não estiver logado, redireciona para a página de login
    window.location.href = "login.html";
  }
});
