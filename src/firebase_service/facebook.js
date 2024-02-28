import firebase from "firebase/app";
import "firebase/auth";

var provider = new firebase.auth.FacebookAuthProvider();
provider.addScope("user_birthday");
 firebase.auth().useDeviceLanguage();
 provider.setCustomParameters({
     display: "popup",
 });


export const loginfacebook = () => firebase
     .auth()
     .signInWithPopup(provider)
     .then((result) => {
  
     })
     .catch((error) => {
         var errorMessage = error.message;
        if (
            errorMessage ===
            "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address."
        ) {
            console.warn("Already exists email address.");
        }
     });

     export default firebase;