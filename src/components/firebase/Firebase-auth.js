import { auth, provider } from "./Firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";

export async function userSignIn(setIsSignIn) {
  await signInWithPopup(auth, provider)
    .then((result) => {
      setIsSignIn(true);
      console.log("Sign-in successful!");
    })
    .catch((error) => {
      console.log("Error!", error);
    });
}

export async function userSignOut(setIsSignIn) {
  signOut(auth)
    .then(() => {
      setIsSignIn(false);
      console.log("Sign-out successful!");
    })
    .catch((error) => {
      console.log("Error!", error);
    });
}

export function getProfilePicUrl() {
  return auth.currentUser.photoURL;
}

export function getUserName() {
  return auth.currentUser.displayName;
}
