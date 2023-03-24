import React,{ useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import GoogleIcon from "@mui/icons-material/Google";
import { app } from "./FIREBASE";
// import { firestore } from "firebase/firestore";
// import { database } from "./FIREBASE";
// import { ref, push, child, update } from "firebase/database";
// import { getAuth,  } from "firebase/auth";
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

function Signup() {
    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    // const [category, setCategory] = useState("");
    // const [password, setPassword] = useState("");
    // const [conformpassword, setConformpassword] = useState("");
    const createUser = (e) => {
      createUserWithEmailAndPassword(auth, email, name)
      .then((value) => alert("Sign Up Success"))
          };
      // e.preventDefault();
      // firestore.collection("CustomersData").add({
      //   name: fname,
      //   lname: lname,
      //   email: email,
      //   category: category,
      // });
      // setFname("");
      // setLname("");
      // setEmail("");
      // setCategory("");
    // };
    const signupWithGoogle = () => {
      signInWithPopup(auth, googleProvider).then((value) =>
        alert("Sign Up Success")
      );
    };

    //  const handleInputChange = (e) => {
    //    const { id, value } = e.target;
    //    if (id === "firstName") {
    //      setFirstName(value);
    //    }
    //    if (id === "lastName") {
    //      setLastName(value);
    //    }
    //    if (id === "email") {
    //      setEmail(value);
    //    }
    //    if (id === "password") {
    //      setPassword(value);
    //    }
    //    if (id === "confirmPassword") {
    //      setConfirmPassword(value);
    //    }
    //  };
    // const [firstName, setFirstName] = useState(null);
    // const [lastName, setLastName] = useState(null);
    // const [email, setEmail] = useState(null);
    // const [password, setPassword] = useState(null);
    // const [confirmPassword, setConfirmPassword] = useState(null);
    // const handleSubmit = () => {
    //   let obj = {
    //     firstName: firstName,
    //     lastName: lastName,
    //     email: email,
    //     password: password,
    //     confirmPassword: confirmPassword,
    //   };
    //   const newPostKey = push(child(ref(database), "posts")).key;
    //   const updates = {};
    //   updates["/" + newPostKey] = obj;
    //   return update(ref(database), updates);
    // };

    // reauthenticateWithPopup(auth.currentUser, provider)
    //   .then((result) => {
    //     // User is re-authenticated with fresh tokens minted and can perform
    //     // sensitive operations like account deletion, or updating their email
    //     // address or password.

    //     // The signed-in user info.
    //     const user = result.user;

    //     // You can also get the Apple OAuth Access and ID Tokens.
    //     const credential = OAuthProvider.credentialFromResult(result);
    //     const accessToken = credential.accessToken;
    //     const idToken = credential.idToken;

    //     // ...
    //   })
    //   .catch((error) => {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // The email of the user's account used.
    //     const email = error.customData.email;
    //     // The credential that was used.
    //     const credential = OAuthProvider.credentialFromError(error);

    //     // ...
    //   });
return (
  <div>
    {/* component */}
    <div class="bg-grey-lighter min-h-screen flex flex-col">
      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 class="mb-8 text-3xl text-center">Sign Up/Registration </h1>
          <input
            onChange={(e) => setName(e.target.value)}
            // value={name}
            // onChange={(e) => setFname(e.target.value)}
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
          />

          <input
            //   onChange={(e) => setName(e.target.value)}
            // value={lname}
            // onChange={(e) => setLname(e.target.value)}
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="lastname"
            placeholder="Last Name"
          />

          <input
            // onChange={(e) => setEmail(e.target.value)}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />

          <div className="relative w-full mb-4 lg:max-w-sm">
            <select
              // value="Category"
              // onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            >
              <option>Select</option>
              <option>User</option>
              <option>Photoghrapher</option>
              <option>React With Headless UI</option>
            </select>
          </div>

          <input
            // onChange={(e) => setPassword(e.target.value)
            // value={password}
            // onChange={(e) => handleInputChange(e)}
            type="password"
            required
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />
          {/* <input
              //   onChange={(e) => setConformpassword(e.target.value)}
              // value={confirmPassword}
              // onChange={(e) => handleInputChange(e)}
              type="password"
              required
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            /> */}

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
  </div>
);
}

export default Signup;