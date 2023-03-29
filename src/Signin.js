import React, {useState} from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleIcon from "@mui/icons-material/Google";
import { app } from "./FIREBASE";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function Signin(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signinuser = () => {
      signInWithEmailAndPassword(auth,email,password)
        .then((value) => alert("Sign In Success"))
        .catch((err) => alert(err));
    };
    const signinWithGoogle = () => {
      signInWithPopup(auth, googleProvider).then((value) =>
        alert("Sign In Success")
      );
    };
  
  return (
    <div>
      <section class="h-screen">
        <div class="h-full">
          <div class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="w-full"
                alt="/"
              />
            </div>
            <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
              <form>
                <div class="flex flex-row items-center justify-center lg:justify-start my-4 before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p class="mx-4 mb-0 text-2xl text-center font-semibold">
                    Sign-In
                  </p>
                </div>

                {/* <div class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p class="mx-4 mb-0 text-center font-semibold">OR</p>
                </div> */}

                {/* <!-- Email input --> */}
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    required
                    class="border-dotted border-2 border-sky-500 peer block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-600 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100"
                    placeholder="Email Address"
                    id="exampleFormControlInput2"
                  />
                  {/* <label
                    for="exampleFormControlInput2"
                    class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-neutral-400"
                  >
                    Email address
                  </label> */}
                </div>

                {/* <!-- Password input --> */}
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    required
                    class="border-dotted border-2 border-sky-500 peer block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-600 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100"
                    id="exampleFormControlInput22"
                    placeholder="Password"
                  />
                  {/* <label
                    for="exampleFormControlInput22"
                    class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-neutral-400"
                  >
                    Password
                  </label>
                  <br /> */}
                </div>

                <div class="mb-6 flex items-center justify-between">
                  <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 dark:border-neutral-600 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary dark:checked:border-primary checked:bg-primary dark:checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                      type="checkbox"
                      value=""
                      id="exampleCheck2"
                    />
                    <label
                      class="inline-block pl-[0.15rem] hover:cursor-pointer"
                      for="exampleCheck2"
                    >
                      Remember Me
                    </label>
                  </div>
                </div>
                <div class="mb-6 flex items-center justify-between">
                  <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <a href="#!"> Forgot password?</a>
                  </div>
                </div>

                <div class="content-center text-center lg:text-left">
                  <button
                    onClick={signinuser}
                    type="button"
                    class="bg-blue-600 w-80 text-center py-3 rounded dark:md:hover:bg-orange-500 dark:text-black focus:outline-none my-1"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Log-In
                  </button>
                  <br />
                  <button
                    onClick={signinWithGoogle}
                    type="button"
                    class="bg-blue-600 w-80 text-center py-3 rounded dark:md:hover:bg-orange-500 dark:text-black focus:outline-none my-1"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <GoogleIcon /> Log-In With Google
                  </button>
                  <p class="mt-2 mb-5 pt-1 text-sm font-semibold">
                    Don't have an account?
                    <a
                      href="./Signup"
                      class="ml-1 text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                    >
                      Register Here
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signin;