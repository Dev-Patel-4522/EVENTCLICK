import React,{ useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import GoogleIcon from "@mui/icons-material/Google";
import { app } from "./FIREBASE";

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

function Signup() {
    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    const [password, setPassword] = useState("");    
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
    <form>
      <div class="bg-grey-lighter min-h-screen flex flex-col mb-5">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-md  w-full">
            <h1 class="mb-8 text-3xl text-center">Sign Up/Registration </h1>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4 focus:border-indigo-600"
              name="fullname"
              placeholder="Full Name"
            />

            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4 focus:border-indigo-600"
              name="lastname"
              placeholder="Last Name"
            />

            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4 focus:border-indigo-600"
              name="contactnumber"
              placeholder="Contact Number"
            />

            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              class="block border border-grey-light w-full p-3 rounded mb-4 focus:border-indigo-600"
              name="email"
              placeholder="Email"
            />

            <div className="relative w-full mb-4 lg:max-w-sm">
              <select className="w-full p-2.5 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>Select Category</option>
                <option>User</option>
                <option>Photoghrapher</option>
              </select>
            </div>

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              class="block border border-grey-light w-full p-3 rounded mb-4 focus:border-indigo-600"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              required
              class="block border border-grey-light w-full p-3 rounded mb-4 focus:border-indigo-600"
              name="confirm_password"
              placeholder="Confirm Password"
            />

            <button
              onClick={createUser}
              type="submit"
              class="bg-blue-600 w-full justify-center text-center py-3 rounded dark:md:hover:bg-orange-500 focus:outline-none my-1"
            >
              Create Account
            </button>
            <button
              onClick={signupWithGoogle}
              type="submit"
              class="bg-blue-600 w-full justify-center text-center py-3 rounded dark:md:hover:bg-orange-500 focus:outline-none my-1"
            >
              <GoogleIcon /> Create With Google
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
            <div class="text-center text-grey-dark mt-6">
              Already have an account?
              <a
                class="ml-1 no-underline border-b border-blue text-blue"
                href="./Signin"
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
);
}

export default Signup;