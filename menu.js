
import { auth } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";


onAuthStateChanged(auth, (user) => {
  if (!user) {
    
    window.location.href = "login.html";
  }
});
