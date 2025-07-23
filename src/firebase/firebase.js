import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBJjfrhCH2gN5w-Cj0RR4Ai92HYM9L-rw",
  authDomain: "treinos-f44e7.firebaseapp.com",
  projectId: "treinos-f44e7",
  storageBucket: "treinos-f44e7.firebasestorage.app",
  messagingSenderId: "49419231884",
  appId: "1:49419231884:web:c2a3b373fe4ccfe31cd1a9",
  measurementId: "G-R4CTFE4V5X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Configuração do provedor Google
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

// Exportações
export const db = getFirestore(app);
export const auth = getAuth(app);
export { googleProvider, signInWithPopup };
