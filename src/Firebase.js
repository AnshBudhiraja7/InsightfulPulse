import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/database"
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBkOpllHIMLDiKLVDCP6_aFOd3SBM925K8",
    authDomain: "bloggingwebsite-a1acf.firebaseapp.com",
    projectId: "bloggingwebsite-a1acf",
    storageBucket: "bloggingwebsite-a1acf.appspot.com",
    messagingSenderId: "533469549338",
    appId: "1:533469549338:web:1daa9eaa5712c0114b12a3"
  };
const app=firebase.initializeApp(firebaseConfig)
export default app.database().ref()
export const storage= app.storage().ref()
export const auth=app.auth()