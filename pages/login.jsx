import { useRef, useState, useEffect } from "react";
import { auth, provider, db } from "../firebase/config";
import {
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";

import Image from "next/image";
import Link from "next/link";

import { setUserGlobal } from "../store/features/user/userSlice";
import { useDispatch } from "react-redux";
import { async } from "@firebase/util";

const loginPicture =
  "https://res.cloudinary.com/programandoconmei/image/upload/v1656224865/iWantImg/login_pencils_dfrpcs.jpg";

const Login = () => {
  const dispatch = useDispatch();
  const [user, loading, error] = useAuthState(auth);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [myMessage, setMessage] = useState("");
  const router = useRouter();

  const theData = async () => {
    //   const querySnapshot = await getDocs(collection(db, "users"));
    //   console.log("querySnapshot is: ", querySnapshot);
    //   querySnapshot.forEach((doc) => {
    //     console.log("doc.data() is: ", doc.data());
    //     console.log(`${doc.id} => ${doc.data().uid}`);
    //   });
    if (user) {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        try {
          const createdAt = new Date();
          // doc.data() will be undefined in this case
          console.log("No such document! I will create one!");
          await setDoc(docRef, {
            email: user.email,
            name: user.displayName,
            createdAt: createdAt.toISOString(),
          });
        } catch (error) {
          console.log("Error creating user.", error);
        }
      }
    }
  };

  useEffect(() => {
    //Retrieve user in database or create it if uid is not found

    theData();
  }, [user]);

  useEffect(() => {
    if (user) {
      const { uid, displayName, email, photoURL } = user;
      router.push("/");
      dispatch(setUserGlobal({ uid, displayName, email, photoURL }));
      // Check if user is in database and create if not
    } else {
      dispatch(setUserGlobal(null));
    }
  }, [user]);

  //Google Login
  const googleProvider = (e) => {
    console.log({ e });
    e.preventDefault();

    signInWithRedirect(auth, provider)
      .then((result) => {
        console.log({ result });
        setMessage(result.displaName);
        router.push("/iwant");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  //Sign In
  const signIn = (e) => {
    e.preventDefault();

    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
    console.log(`Hello ${emailRef.current.value}`);

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  //Register
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        console.log(userCredential);
        //signed up and logged
      })
      .catch((error) => {
        //Unable to signed up
        alert(error.message);
      });
  };

  //Password Reset

  const forgotPass = () => {
    sendPasswordResetEmail(auth, emailRef.current.value);
    alert(
      `If there is an account associated with this email, we will send an email for reset to " ${emailRef.current.value}`
    );
  };

  // if (user) {
  //   return router.push("/iwant");
  // }

  return (
    <>
      <div className="lg:mt-36 flex max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl ">
        <div className="hidden lg:block lg:w-1/2">
          <Image
            alt="login"
            src={loginPicture}
            layout="intrinsic"
            width={700}
            height={860}
          />
        </div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div></div>

          <form>
            <Link href="/">
              <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white cursor-pointer">
                I want please!
              </h2>
            </Link>

            <a
              onClick={googleProvider}
              className="cursor-pointer flex items-center justify-center mt-4 text-gray-600 transition-colors duration-200 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <div className="px-4 py-2">
                <svg className="w-6 h-6" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>

              <span className="w-5/6 px-4 py-3 font-bold text-center">
                Sign in with Google
              </span>
            </a>

            {/* <a
         onClick={logOut}
          className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-200 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          
         

          <span className="w-5/6 px-4 py-3 font-bold text-center">
          Log Out
          </span>
        </a> */}

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

              <a
                href="#"
                className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
              >
                or login with email
              </a>

              <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
            </div>

            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                id="email"
                ref={emailRef}
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  htmlFor="password"
                >
                  Password
                </label>

                <a
                  onClick={forgotPass}
                  className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
                >
                  Forget Password?
                </a>
              </div>

              <input
                id="password"
                ref={passwordRef}
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="mt-8">
              <button
                onClick={signIn}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Login
              </button>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            </div>

            <button
              onClick={register}
              className="mt-4 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
