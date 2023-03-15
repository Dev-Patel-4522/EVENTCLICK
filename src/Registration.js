import React,{ useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "./FIREBASE";
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

function Registration() {
    // const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [conformpassword, setConformpassword] = useState("");
    const createUser = () => {
      createUserWithEmailAndPassword(auth, email, password).then((value) =>
        alert("Sign Up Success")
      );
    };
    const signupWithGoogle = () => {
      signInWithPopup(auth, googleProvider).then((value) =>
        alert("Sign Up Success")
      );
    };
  return (
    <div>
      {/* component */}
      <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Sign Up </h1>
            <input
            //   onChange={(e) => setName(e.target.value)}
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
            />

            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <input
            //   onChange={(e) => setConformpassword(e.target.value)}
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />

            <button
              onClick={createUser}
              type="submit"
              class="w-full text-center py-3 rounded background-green hover:background-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>
            <button
              onClick={signupWithGoogle}
              type="submit"
              class="w-full text-center py-3 rounded background-green hover:background-green-dark focus:outline-none my-1"
            >
              Create with Google
            </button>

            <div class="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="/"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="/"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div class="text-grey-dark mt-6">
            Already have an account?
            <a
              class="no-underline border-b border-blue text-blue"
              href="./Signin.js"
            >
              Log in
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration