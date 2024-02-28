import firebase from "firebase/app";
import "firebase/auth";
import config from "../config.json"

const firebaseConfig = config.data;
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });



export const signingoogle = () =>
    auth
        .signInWithPopup(provider)
        .then((result) => {
          
        })
        .catch((error) => {
            var errorMessages = error.message;
            if (
                errorMessages ===
                "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address."
            ) {
                console.warn("Already exists email address.");
            }
        });


export default firebase;
