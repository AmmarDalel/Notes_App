import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAaHSXvWIa1z1smUNy-nGkzhXf5peda9hg",
    authDomain: "notesapp-bef54.firebaseapp.com",
    projectId: "notesapp-bef54",
    storageBucket: "notesapp-bef54.appspot.com",
    messagingSenderId: "284757969550",
    appId: "1:284757969550:web:db5fdc6e438553c58a57df",
    measurementId: "G-6H4L5602TV"
  };
  
  // Initialiser Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const auth = getAuth(app);

  async function saveUserData(userId, data) {
    try {
      await set(ref(db, 'users/' + userId), data);
      console.log("Données utilisateur enregistrées avec succès!");
    } catch (error) {
      console.error("Erreur lors de l'enregistrement des données utilisateur:", error);
    }
  }

  async function getUserData(userId) {
    const dbRef = ref(db);
    try {
      const snapshot = await get(child(dbRef, `users/${userId}`));
      if (snapshot.exists()) {
        console.log("Données utilisateur:", snapshot.val());
        return snapshot.val();
      } else {
        console.log("Aucune donnée trouvée pour cet utilisateur!");
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des données utilisateur:", error);
    }
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userId = user.uid;
      console.log(userId);
      
      // Sauvegarder les données utilisateur
      saveUserData(userId, {
        username: "exampleUser",
        email: user.email
      });
      
      // Récupérer les données utilisateur
      getUserData(userId).then(data => {
        console.log(data);
      });
    } else {
      console.log('Aucun utilisateur connecté');
    }
  });
  
 
  function triggerAlways() {
  
        const userId = parent.localStorage.getItem('userid');
        if (userId) {
          getUserData(userId).then(data => {
            console.log(typeof localStorage.getItem('notestab'));
            const json = JSON.stringify(localStorage.getItem('notestab'));
            console.log(json);
            saveUserData(userId,json ) ;
            console.log('----------------'+getUserData(userId));
          });
        }
    
}

// Appel de la fonction
triggerAlways();
