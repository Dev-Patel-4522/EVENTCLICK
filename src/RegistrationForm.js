import React, { useState, } from "react";
import { database } from "./FIREBASE";
import {
  getFirestore,
  collection,
  // ,
  // doc,
  // getDoc,
  // updateDoc,
} from "firebase/firestore";
// import {ref,push,child,update} from "firebase/database";
// import db from "./FIREBASE";
// import { Text, View } from "react";
// import "./style.css";
import { app } from "./FIREBASE";
const firestore = getFirestore(app);

function RegistrationForm() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [category, setCategory] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const sub = (e) => {
    e.preventDefault();

    // Add data to the store
    database.collection("data")
      .add({
        FirstN: firstName,
        LastN: lastName,
        Email: email,
        category: category,
        password: password,
        confirmPassword: confirmPassword,
      })
      .then((value) => {
        alert("Data Successfully Submitted");
      })
      .catch((error) => {
        alert("Error adding document: ", error);
      });
  };

  // const handleInputChange = (e) => {
  //   const { id, value } = e.target;
  //   if (id === "firstName") {
  //     setFirstName(value);
  //   }
  //   if (id === "lastName") {
  //     setLastName(value);
  //   }
  //   if (id === "email") {
  //     setEmail(value);
  //   }
  //   if (id === "category") {
  //     setCategory(value);
  //   }
  //   if (id === "password") {
  //     setPassword(value);
  //   }
  //   if (id === "confirmPassword") {
  //     setConfirmPassword(value);
  //   }
  // };

  // const handleSubmit = () => {
  //   let obj = {
  //     firstName: firstName,
  //     lastName: lastName,
  //     email: email,
  //     category: category,
  //     password: password,
  //     confirmPassword: confirmPassword,
  //   };
  //   console.log(firstName, lastName, email, category, password, confirmPassword);
  //   const newPostKey = push(child(ref(database), "posts")).key;
  //   const updates = {};
  //   updates["/" + newPostKey] = obj;
  //   return update(ref(database), updates);
  // };

  

  return (
    <form
      onSubmit={(event) => {
        sub(event);
      }}
    >
      <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Sign Up/Registration </h1>

            <div className="username">
              <label className="form__label" for="firstName">
                First Name{" "}
              </label>
              <input
                class="block border border-grey-light w-full p-3 rounded mb-4"
                type="text"
                value={firstName}
                onChange={(e) => {
                  (collection(firestore,setFirstName(e.target.value)));
                }}
                // onChange={(e) => handleInputChange(e)}
                id="firstName"
                placeholder="First Name"
              />
            </div>
            <div className="lastname">
              <label className="form__label" for="lastName">
                Last Name{" "}
              </label>
              <input
                type="text"
                name=""
                id="lastName"
                value={lastName}
                class="block border border-grey-light w-full p-3 rounded mb-4"
                // onChange={(e) => handleInputChange(e)}
                onChange={(e) => {
                  (collection(firestore,setLastName(e.target.value)));
                }}
                placeholder="LastName"
              />
            </div>
            <div className="email">
              <label className="form__label" for="email">
                Email{" "}
              </label>
              <input
                type="email"
                id="email"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                required
                value={email}
                // onChange={(e) => handleInputChange(e)}
                onChange={(e) => {
                  (collection(firestore, setEmail(e.target.value)));
                }}
                placeholder="Email"
              />
            </div>
            <div className="relative w-full mb-4 lg:max-w-sm">
              <select
                onChange={(e) => {
                  (collection(firestore, setCategory(e.target.value)));
                }}
                // onChange={(e) => handleInputChange(e)}
                className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              >
                <option>Select</option>
                <option>User</option>
                <option>Photoghrapher</option>
                {/* <option>Admin</option> */}
              </select>
            </div>
            <div className="password">
              <label className="form__label" for="password">
                Password{" "}
              </label>
              <input
                class="block border border-grey-light w-full p-3 rounded mb-4"
                type="password"
                id="password"
                required
                value={password}
                // onChange={(e) => handleInputChange(e)}
                onChange={(e) => {
                  (collection(firestore, setPassword(e.target.value)));
                }}
                placeholder="Password"
              />
            </div>
            <div className="confirm-password">
              <label className="form__label" for="confirmPassword">
                Confirm Password{" "}
              </label>
              <input
                class="block border border-grey-light w-full p-3 rounded mb-4"
                type="password"
                id="confirmPassword"
                required
                value={confirmPassword}
                // onChange={(e) => handleInputChange(e)}
                onChange={(e) => {
                  (collection(firestore, setConfirmPassword(e.target.value)));
                }}
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div class="footer">
            <button
              // onClick={() => handleSubmit()}
              type="submit"
              class="w-full text-center py-3 rounded background-green hover:background-green-dark focus:outline-none my-1 btn"
            >
              Register
            </button>
          </div>
          <button
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            Forgot Password Screen
          </button>
        </div>
      </div>
    </form>
  );
}

export default RegistrationForm;
