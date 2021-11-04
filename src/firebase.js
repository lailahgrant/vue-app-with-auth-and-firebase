// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { ref } from 'vue'

const firebaseConfig = {
    apiKey: "AIzaSyDISQM9KWzAccqvwc_aAXU8TuRneMw1T5E",
    authDomain: "vue-firebase-auth-d2658.firebaseapp.com",
    projectId: "vue-firebase-auth-d2658",
    storageBucket: "vue-firebase-auth-d2658.appspot.com",
    messagingSenderId: "190312009382",
    appId: "1:190312009382:web:72b422a72d55fd7a0d6e67",
    measurementId: "G-6GY78VELRH"
};

// Initialize Firebase 
initializeApp(firebaseConfig);


// register
export async function register(){
    const email = ref("");
    const auth = getAuth();
    const password = ref("");
    createUserWithEmailAndPassword(auth, email, password)

}









