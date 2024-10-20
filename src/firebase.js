
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {addDoc,collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyCJ5uTMKoaXpkUKTqsYc7P4IKes7mgvJrE",
  authDomain: "netflix-clone-26ca5.firebaseapp.com",
  projectId: "netflix-clone-26ca5",
  storageBucket: "netflix-clone-26ca5.appspot.com",
  messagingSenderId: "667763810617",
  appId: "1:667763810617:web:394d3153e63739699008e8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async(name, email, password)=>{
    try{
       const res =  await createUserWithEmailAndPassword(auth, email, password);
       const user = res.user;
       await addDoc(collection(db, "user"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
       });
    }catch (error){
        console.log(error);
        toast.error(error.code);

    }

}

const login = async(email, password)=>{
    try{
        signInWithEmailAndPassword(auth, email, password);

    }catch(error){
        console.log(error);
        toast.error(error.code);

    }
}

const logout = ()=>{
    signOut(auth);
}
export {auth, db, login, signup, logout};