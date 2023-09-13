import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth();

interface doSignInProps {
  email: string;
  password: string;
}
interface doSignupProps {
  email: string;
  password: string;
  name: string;
  phone: string;
}

export async function doSignup({
  email,
  password,
  name,
  phone,
}: doSignupProps) {
  console.log("GET AUTH", auth);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return { error: false, user };
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return {
        error: true,
        message: errorMessage,
      };
      // ..
    });
}
export async function doSignin({ email, password }: doSignInProps) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return { error: false, user };
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return {
        error: true,
        message: errorMessage,
      };
    });
}
