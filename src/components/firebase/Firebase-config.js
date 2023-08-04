import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuHE4m6caHNl0pCTNqkNOR-TNFWOmNg_I",
  authDomain: "irbis-agro-blog.firebaseapp.com",
  projectId: "irbis-agro-blog",
  storageBucket: "irbis-agro-blog.appspot.com",
  messagingSenderId: "842363961564",
  appId: "1:842363961564:web:acceff49837c88087cf419",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, storage, auth, provider };
