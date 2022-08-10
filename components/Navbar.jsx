import React, { useEffect } from "react";
import logo from "../public/static/Logo_I_Want_Please.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { ToggleTheme } from "./ToggleTheme";

const twoKids =
  "https://res.cloudinary.com/programandoconmei/image/upload/v1656224864/iWantImg/two_kids_bw_tv8pki.jpg";

const hero_image =
  "https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const { theme, setTheme } = useTheme("dark");
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  return (
    <nav className="">
      <div className="relative lg:flex flex-row py-6 px-6 lg:justify-between">
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
            <a className="lg:w-20 px-4 py-4 lg:px-2 lg:py-2 text-md text-gray-800 rounded-md dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100  lg:mx-2">
              Home
            </a>
          </Link>
          <Link href="/iwant">
            <a className="lg:w-20 px-4 py-4 lg:px-2 lg:py-2 text-md text-gray-800 rounded-md dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100  lg:mx-2">
              I Want
            </a>
          </Link>

          <Link href="/testfs">
            <a className="lg:w-20 px-4 py-4 lg:px-2 lg:py-2 text-md text-gray-800 rounded-md dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100  lg:mx-2">
              FastFood
            </a>
          </Link>

          <Link href="/food">
            <a className="lg:w-20 px-4 py-4 lg:px-2 lg:py-2 text-md text-gray-800 rounded-md dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100  lg:mx-2">
              Recipes
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
              className="lg:w-20 px-4 py-4 lg:px-2 lg:py-2 text-md text-gray-800 rounded-md dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100  lg:mx-2"
            >
              Log Out
            </a>
          ) : (
            <Link href="/login">
              <a className="lg:w-20 px-4 py-4 lg:px-2 lg:py-2 text-md text-gray-800 rounded-md dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100  lg:mx-2">
                Log In
              </a>
            </Link>
          )}

          <ToggleTheme />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
