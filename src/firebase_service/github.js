import firebase from "firebase/app";
import "firebase/auth";

var provider = new firebase.auth.GithubAuthProvider();
provider.addScope('repo');
provider.addScope('user');
provider.addScope('public_repo');
provider.setCustomParameters({
    allow_signup: "true",
});



export const signingithub = () =>
    firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
           
        })
        .catch((err) => {
            var errorMess = err.message;
            if (
                errorMess ===
                "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address."
            ) {
                console.warn("Already exists email address.");
            }
        });
     export default firebase;