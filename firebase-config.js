
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js"; 

const firebaseConfig = {
  apiKey: "AIzaSyBm4CTZtfzMkuUojKo1ZA6VRATpfeBQ1Oo",
  authDomain: "jornadaqa-full.firebaseapp.com",
  projectId: "jornadaqa-full",
  storageBucket: "jornadaqa-full.appspot.com",
  messagingSenderId: "671761111796",
  appId: "1:671761111796:web:a4aedcdd224f5b1d225ca1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 

export { auth, db }; 