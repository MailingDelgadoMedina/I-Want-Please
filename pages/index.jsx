import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { useState } from "react";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import Counter from "../store/features/counter/Counter";
import { ToggleTheme } from "../components/ToggleTheme";
import { toggleTheme } from "../store/features/theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";

const twoKids =
  "https://res.cloudinary.com/programandoconmei/image/upload/v1656224864/iWantImg/two_kids_bw_tv8pki.jpg";

const hero_image =
  "https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80";

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  const dispatch = useDispatch();
  // const authorized = useAuth();

  // if (authorized.loading) return "loading...";

  return (
    <div className="bg-white dark:bg-gray-800">
      <Head>
        <title>Everyhing you wish for</title>
        <meta name="description" content="Will serve you" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex flex-col bg-white dark:bg-gray-800">
        <div className="lg:flex">
          <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">
                {" "}
                Everything you{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  wish
                </span>{" "}
                for
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
                “Everything you wish for is here on this page. <br />
                - A wonderful space to speak by typing in your wishes. <br />
                - Search for the best fast food restaurant in your area. <br />-
                Search for your new favorite recipe and start cooking.
              </p>

              <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                <a
                  href="#components"
                  className="block px-3 py-2 text-sm font-semibold text-center text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="hidden block px-3 py-2 text-sm font-semibold text-center text-gray-700 transition-colors duration-200 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300"
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
              priority
            ></Image>
          </div>
        </div>
      </header>

      {/* Second Section */}
      <section className="bg-white dark:bg-gray-900" id="components">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            Enjoy our <br /> awesome{" "}
            <span className="text-blue-500">Components</span>
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 500 500"
                  stroke="currentColor"
                >
                  <rect
                    width="32"
                    height="32"
                    x="144"
                    y="240"
                    fill="var(--ci-primary-color, currentColor)"
                  />
                  <rect
                    width="32"
                    height="32"
                    x="240"
                    y="240"
                    fill="var(--ci-primary-color, currentColor)"
                  />
                  <rect
                    width="32"
                    height="32"
                    x="336"
                    y="240"
                    fill="var(--ci-primary-color, currentColor)"
                  />
                  <path
                    fill="var(--ci-primary-color, currentColor)"
                    d="M464,32H48A32.036,32.036,0,0,0,16,64V352a32.036,32.036,0,0,0,32,32h64V496h30.627l112-112H464a32.036,32.036,0,0,0,32-32V64A32.036,32.036,0,0,0,464,32Zm0,320H241.373L144,449.373V352H48V64H464Z"
                  />
                </svg>
              </span>

              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Speak by typing
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                A wonderful space to speak by typing. This service is free and
                made with love for the non-verbal community.
              </p>

              <Link href="/iwant">
                <div className="cursor-pointer flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-200 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                  <span className="mx-1">Start Speaking</span>

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
                </div>
              </Link>
            </div>

            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                <svg
                  viewBox="12 13 30 30"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                >
                  <g>
                    <path
                      d="M38.46,17.5a21.625,21.625,0,0,0-20.948.431l10.381,24.03Zm1.863.731a1.887,1.887,0,0,0-.8-2.428,23.623,23.623,0,0,0-23.145.472,1.889,1.889,0,0,0-.732,2.392L26.057,42.75a2,2,0,0,0,3.672,0Z"
                      fillRule="evenodd"
                    />
                    <path
                      d="M28,21a17.677,17.677,0,0,0-9.468,2.847l-1.063-1.694A19.674,19.674,0,0,1,28,19a19.674,19.674,0,0,1,10.532,3.153l-1.063,1.694A17.677,17.677,0,0,0,28,21Z"
                      fillRule="evenodd"
                    />
                    <path
                      d="M25,31a5,5,0,0,0-5-5V24a7,7,0,0,1,4.631,12.25l-1.324-1.5A4.986,4.986,0,0,0,25,31Z"
                      fillRule="evenodd"
                    />
                    <path
                      d="M34,27a3,3,0,0,0-1.125,5.782l-.75,1.854a5,5,0,0,1,3.75-9.272l-.75,1.854A2.988,2.988,0,0,0,34,27Z"
                      fillRule="evenodd"
                    />
                    <path
                      d="M30,39a4,4,0,0,0-3.326,1.777l-1.661-1.113A6,6,0,0,1,30,37Z"
                      fillRule="evenodd"
                    />
                  </g>
                </svg>
              </span>

              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Fast Food Stores
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Are you hungry and want to find the best food? <br />
                Search for a fast food restaurant near you.
              </p>

              <Link href="/testfs">
                <div className="cursor-pointer flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-200 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                  <span className="mx-1">search</span>
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
                </div>
              </Link>
            </div>

            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 310 310"
                  className="w-6 h-6"
                  fill="currentColor"
                >
                  <path
                    d="M48.927,8v289.376c0,4.418-3.582,8-8,8c-4.418,0-8-3.582-8-8V8c0-4.418,3.582-8,8-8C45.345,0,48.927,3.582,48.927,8z
	 M313.302,13.248v278.881c0,4.418-3.582,8-8,8H157.681v38.1c0,2.71-1.372,5.236-3.646,6.711c-2.273,1.475-5.139,1.699-7.615,0.594
	l-19.782-8.829l-19.799,8.83c-1.041,0.464-2.152,0.694-3.258,0.694c-1.523,0-3.039-0.435-4.355-1.289
	c-2.273-1.476-3.645-4.001-3.645-6.711v-38.1H72.9c-4.418,0-8-3.582-8-8V13.248c0-4.418,3.582-8,8-8h232.402
	C309.72,5.248,313.302,8.829,313.302,13.248z M141.681,300.128h-30.1v25.773l11.801-5.263c2.074-0.925,4.443-0.926,6.519,0.001
	l11.78,5.258V300.128z M297.302,21.248H80.9v262.881h68.782h147.621V21.248z M118.631,138.656c0-17.121,13.929-31.049,31.05-31.049
	c2.759,0,5.481,0.363,8.106,1.071c5.423-9.374,15.479-15.388,26.85-15.388c11.161,0,21.324,6.118,26.799,15.402
	c2.64-0.717,5.379-1.085,8.156-1.085c17.121,0,31.05,13.929,31.05,31.049c0,17.121-13.929,31.05-31.05,31.05
	c-0.649,0-1.295-0.02-1.937-0.059v34.44c0,4.418-3.582,8-8,8h-50.034c-4.418,0-8-3.582-8-8v-34.44
	c-0.643,0.04-1.29,0.059-1.94,0.059C132.56,169.706,118.631,155.777,118.631,138.656z M134.631,138.656
	c0,8.298,6.751,15.05,15.05,15.05c2.275,0,4.456-0.492,6.483-1.463c2.479-1.188,5.394-1.02,7.72,0.445
	c2.326,1.465,3.737,4.021,3.737,6.77v36.63h34.034v-36.63c0-2.749,1.412-5.305,3.738-6.77c2.326-1.464,5.242-1.632,7.72-0.444
	c2.025,0.971,4.205,1.463,6.479,1.463c8.299,0,15.05-6.751,15.05-15.05s-6.751-15.049-15.05-15.049
	c-2.899,0-5.712,0.825-8.135,2.385c-2.197,1.416-4.946,1.669-7.366,0.677c-2.418-0.991-4.2-3.101-4.772-5.651
	c-1.524-6.795-7.699-11.728-14.682-11.728c-6.98,0-13.156,4.933-14.684,11.73c-0.573,2.549-2.355,4.658-4.773,5.648
	c-2.418,0.991-5.167,0.738-7.364-0.677c-2.422-1.56-5.235-2.385-8.135-2.385C141.382,123.606,134.631,130.357,134.631,138.656z"
                  />
                </svg>
              </span>

              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Search Food Recipes
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Want to try something new? <br />
                Search for your new favorite recipe and start cooking.
              </p>

              <Link href="/food">
                <div className="cursor-pointer flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-200 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                  <span className="mx-1">Start Searching</span>
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
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
