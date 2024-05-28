// firebase connection : 

// Importer les modules Firebase Auth
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase  } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword , createUserWithEmailAndPassword , sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
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

// get ref to database services 
const db=getDatabase(app) ;


//--- login elements 
let emaillogin=document.getElementById('emaillogin');
let password_login=document.getElementById('password-login');
let loginsubmit=document.getElementById('loginsubmit');


let forget_password=document.getElementById('forget_password')

// Initialiser Firebase Auth
const auth = getAuth();


// enregistrer un utilisateur 
submitregister.addEventListener('click', function(e) {
    e.preventDefault();

    const userName = document.getElementById('UserName').value;
    const email = document.getElementById('emailregister').value;
    const password = document.getElementById('passwordregister').value;

    // Créer un nouvel utilisateur avec e-mail et mot de passe
    createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
        // Utilisateur créé avec succès
        const user = userCredential.user;
        window.location.href = "NotesPage.html";
        console.log('Utilisateur créé avec succès:', user.email);
    })
    .catch(error => {
        // Erreur lors de la création de l'utilisateur
        console.error('Erreur lors de la création de l\'utilisateur:', error);
    });
});

  

// Écouter l'événement click sur le bouton de connexion
loginsubmit.addEventListener('click', function () {
    const email = emaillogin.value;
    const password = password_login.value;
    console.log(email) ;
    console.log(password) ;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Connexion réussie, rediriger vers la page de profil par exemple
              // Stockez les informations de la session utilisateur
            sessionStorage.setItem("userSession", "true");
            localStorage.setItem("userSession", "true");
            auth.onAuthStateChanged(user => {
              if (user) {
                  // Utilisateur connecté
                  const userId = user.uid;
            sessionStorage.setItem("typeofuserid", typeof user.uid);
            sessionStorage.setItem("userid", userId);
          }});

            window.location.href = "NotesPage.html";

            console.log('correct login '+sessionStorage+' '+localStorage) ;
        })
        .catch((error) => {
            console.error('Erreur lors de la connexion :', error.message);
        });
});



// Fonction pour envoyer l'email de réinitialisation
forget_password.addEventListener('click', function() {
    const email = emaillogin.value;
  
    sendPasswordResetEmail(auth, email).then(() => {
      // Email envoyé
      alert("Un email de réinitialisation a été envoyé à " + email);
    }).catch((error) => {
      // Une erreur est survenue
      console.error("Erreur lors de l'envoi de l'email de réinitialisation:", error);
      alert("Erreur : " + error.message);
    });
  });



