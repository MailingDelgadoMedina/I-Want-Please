import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { useState } from "react";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import logo from "../public/static/Logo_I_Want_Please.svg";

const twoKids =
  "https://res.cloudinary.com/programandoconmei/image/upload/v1656224864/iWantImg/two_kids_bw_tv8pki.jpg";

const hero_image =
  "https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80";

export default function Home() {
  const [menu, setMenu] = useState(false);
  const { theme, setTheme } = useTheme("dark");
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  //test
  //const [myMessage, setMessage] = useState("");

  //Logout
  // const logOut = () =>{
  //   signOut(auth).then(() =>{
  //     // console.log("You Logged out!");
  //  setMessage('You logged Out!');

  //   }).catch((error) =>{
  //     console.log(error.message);
  //   })
  // }

  return (
    <div className="">
      <Head>
        <title>Everyhing you wish for</title>
        <meta name="description" content="Will serve you" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex flex-col bg-white dark:bg-gray-800">
        <nav className="px-6 py-4 shadow">
          <div className="relative lg:flex flex-row p-8 lg:justify-between">
            <div className="flex items-center justify-between w-full">
              <div className="flex justify-center content-center">
                <Image
                  src={logo}
                  alt="logo"
                  width={56}
                  height={56}
                  className="hover:scale-105 transition-all duration-200"
                />
                <Link href="/">
                  <a className="place-self-center  mx-4 text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">
                    I Want Please
                  </a>
                </Link>
              </div>

              {
                //<!-- Mobile menu button -->
              }
              <div className="lg:hidden bg-white dark:bg-slate-700">
                <button
                  onClick={() => setMenu(!menu)}
                  type="button"
                  className=" text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="Toggle menu"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current m-2">
                    <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                  </svg>
                </button>
              </div>
            </div>

            {
              // Mobile Menu open: "block", Menu closed: "hidden"
            }
            <div
              className={`rounded flex flex-col mt-2 -mx-2 lg:mt-0 lg:flex-row lg:w-full lg:justify-end lg:items-center bg-gray-200/90 dark:bg-slate-700/90  lg:shadow-none lg:bg-transparent lg:dark:bg-transparent ${
                menu
                  ? "text-right absolute right-8 z-10 shadow-lg"
                  : "hidden lg:flex"
              }`}
            >
              <Link href="/">
                <a className="px-4 py-4 lg:px-2 lg:py-2 text-md text-gray-800 rounded-md dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 hover:font-medium lg:mx-2">
                  Home
                </a>
              </Link>
              <Link href="/iwant">
                <a className="px-4 py-4 lg:px-2 lg:py-2 text-md text-gray-800 rounded-md dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 hover:font-medium lg:mx-2">
                  I want
                </a>
              </Link>

                <Link     href="#">
                
              
              <a
            
                className="px-4 py-4 lg:px-2 lg:py-2 text-md text-gray-800 rounded-md dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 hover:font-medium lg:mx-2"
              >
                       </a>
                  </Link>
               
       
              {user ? (
                <a
                  onClick={() =>
                    signOut(auth, () => {
                      router.push("/");
                      console.log("Logged out");
                    })
                  }
                  className="px-4 py-4 lg:px-2 lg:py-2 text-md text-gray-800 rounded-md dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 hover:font-medium lg:mx-2"
                >
                  Log Out
                </a>
              ) : (
                <Link href="/login">
                  <a className="px-4 py-4 lg:px-2 lg:py-2 text-md text-gray-800 rounded-md dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 hover:font-medium lg:mx-2">
                    Log In
                  </a>
                </Link>
              )}

              <a
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className=" lg:mr-12 cursor-pointer px-4 py-4 lg:px-2 lg:py-2 text-md text-gray-800 rounded-md dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 hover:font-medium lg:mx-2"
              >
                🌙/🌞
                {
                  // theme === "dark" ? "🌙" : "🌞"
                }
              </a>
            </div>
          </div>
        </nav>

        <div classNameName="lg:flex">
          <div classNameName="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
            <div classNameName="max-w-xl">
              <h2 classNameName="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">
                Help With Your New{" "}
                <span classNameName="text-blue-600 dark:text-blue-400">Idea</span>
              </h2>

              <p classNameName="mt-2 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis commodi cum cupiditate ducimus, fugit harum id
                necessitatibus odio quam quasi, quibusdam rem tempora
                voluptates.
              </p>

              <div classNameName="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                <a
                  href="#"
                  classNameName="block px-3 py-2 text-sm font-semibold text-center text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  classNameName="block px-3 py-2 text-sm font-semibold text-center text-gray-700 transition-colors duration-200 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="block p-4 w-full h-auto m-auto lg:w-1/2 lg:h-auto">
            <Image
              className="rounded-md"
              alt="Two kids"
              src={twoKids}
              layout="responsive"
              width={712}
              height={524}
            ></Image>
          </div>
        </div>
      </header>

      {/* Second Section */}
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            explore our <br /> awesome{" "}
            <span className="text-blue-500">Components</span>
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </span>

              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Copy & paste components
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>

              <a
                href="#"
                className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-200 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                <span className="mx-1">read more</span>
                <svg
                  className="w-4 h-4 mx-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>

            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </span>

              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Zero Configrations
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>

              <a
                href="#"
                className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-200 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                <span className="mx-1">read more</span>
                <svg
                  className="w-4 h-4 mx-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>

            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </span>

              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Simple & clean designs
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>

              <a
                href="#"
                className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-200 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                <span className="mx-1">read more</span>
                <svg
                  className="w-4 h-4 mx-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
