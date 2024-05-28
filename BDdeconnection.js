// firebase connection : 

// Importer les modules Firebase Auth
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase  } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword , createUserWithEmailAndPassword , signOut} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
// Importer les modules Firebase Auth


const firebaseConfig = {
  apiKey: "AIzaSyAaHSXvWIa1z1smUNy-nGkzhXf5peda9hg",
  authDomain: "notesapp-bef54.firebaseapp.com",
  projectId: "notesapp-bef54",
  storageBucket: "notesapp-bef54.appspot.com",
  messagingSenderId: "284757969550",
  appId: "1:284757969550:web:db5fdc6e438553c58a57df",
  measurementId: "G-6H4L5602TV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);









// Initialiser Firebase Auth
const auth = getAuth();




// Sélectionner le bouton de déconnexion
const logoutButton = document.getElementById('sign-out');

// Ajouter un événement 'click' au bouton de déconnexion
logoutButton.addEventListener('click', function() {
    signOut(auth)
    .then(() => {
        // Déconnexion réussie
        sessionStorage.setItem("userSession", "false");
        localStorage.setItem("userSession", "false");
        console.log('Déconnecté avec succès');
        // Rediriger vers la page de connexion ou effectuer d'autres actions
        window.location.href = "index.html";
    })
    .catch(error => {
        // Erreur lors de la déconnexion
        console.error('Erreur lors de la déconnexion :', error);
    });
});



 // Vérifiez si l'utilisateur est connecté
 function checkUserSession() {
    let ls = JSON.parse(window.parent.localStorage.getItem("userSession"));
    let ss=JSON.parse(window.parent.sessionStorage.getItem("userSession"));
    if ( !ls && !ss) {
        // Si l'utilisateur n'est pas connecté, redirigez-le vers la page de connexion
        window.location.href = "index.html";
       
    }
}


// Vérifiez l'état de la session utilisateur lors du chargement de la page
checkUserSession();





