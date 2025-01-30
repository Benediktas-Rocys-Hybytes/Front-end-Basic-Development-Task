import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAw0B-iuWuJ4eMdfyQoc5zT-50ZDzrEq1s",
    authDomain: "inance-eafe5.firebaseapp.com",
    projectId: "inance-eafe5",
    storageBucket: "inance-eafe5.firebasestorage.app",
    messagingSenderId: "928604992629",
    appId: "1:928604992629:web:007b6f91106de33103b43c"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
