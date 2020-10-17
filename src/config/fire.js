import * as firebase from "firebase";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
  };
 
  const fire=firebase.initializeApp(firebaseConfig);
  export default fire;
