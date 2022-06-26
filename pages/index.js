import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import two_kids_bw from "../public/static/two_kids_bw.jpg";
import { useState } from "react";

const hero_image =
  "https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80";

export default function Home() {
  const [menu, setMenu] = useState(false);
  const { theme, setTheme } = useTheme("dark");
  return (
    <div>
      <Head>
        <title>Everyhing you wish for</title>
        <meta name="description" content="Will serve you" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-white dark:bg-gray-800">
        <nav className="px-6 py-4 shadow">
          <div className="lg:items-center lg:justify-between lg:flex">
            <div className="flex items-center justify-between">
              <div>
                <Link href="/">
                  <a className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">
                    I Want Please
                  </a>
                </Link>
              </div>

              {
                //<!-- Mobile menu button -->
              }
              <div className="lg:hidden">
                <button
                  onClick={() => setMenu(!menu)}
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="Toggle menu"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                  </svg>
                </button>
              </div>
            </div>

            {
              // Mobile Menu open: "block", Menu closed: "hidden"
            }
            <div
              className={`flex-col mt-2 -mx-2 lg:mt-0 lg:flex-row ${
                menu ? "flex" : "hidden lg:flex"
              }`}
            >
              <Link href="/">
                <a
                  href="#"
                  className="px-2 py-2 text-sm text-gray-800 rounded-md dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 hover:font-medium lg:mx-2"
                >
                  Home
                </a>
              </Link>
              <a
                href="#"
                className="px-2 py-2 text-sm text-gray-800 rounded-md dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 hover:font-medium lg:mx-2"
              >
                About
              </a>
              <a
                href="#"
                className="px-2 py-2 text-sm text-gray-800 rounded-md dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 hover:font-medium lg:mx-2"
              >
                Contact
              </a>
              <Link href="/login">
                <a className="px-2 py-2 text-sm text-gray-800 rounded-md dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 hover:font-medium lg:mx-2">
                  Log In
                </a>
              </Link>
              <a
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="cursor-pointer px-2 py-2 text-sm text-gray-800 rounded-md dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 hover:font-medium lg:mx-2"
              >
                🌙/🌞
                {
                  // theme === "dark" ? "🌙" : "🌞"
                }
              </a>
            </div>
          </div>
        </nav>

        <div className="lg:flex">
          <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">
                Help With Your New{" "}
                <span className="text-blue-600 dark:text-blue-400">Idea</span>
              </h2>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis commodi cum cupiditate ducimus, fugit harum id
                necessitatibus odio quam quasi, quibusdam rem tempora
                voluptates.
              </p>

              <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                <a
                  href="#"
                  className="block px-3 py-2 text-sm font-semibold text-center text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-sm font-semibold text-center text-gray-700 transition-colors duration-200 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="w-full h-64 lg:w-1/2 lg:h-auto">
            <Image alt="Two kids" src={two_kids_bw} layout="intrinsic"></Image>
          </div>
        </div>
      </header>
    </div>
  );
}
