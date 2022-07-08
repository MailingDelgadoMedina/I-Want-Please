import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Select from "../components/Select";

import { recipesAdvancedSearchFields } from "../utils/recipesAdvancedSearchFields";

const defaultRecipes = {
  results: [
    {
      id: 749013,
      title: "Pasta",
      image: "https://spoonacular.com/recipeImages/749013-312x231.jpeg",
      imageType: "jpeg",
    },
    {
      id: 358073,
      title: "Pasta",
      image: "https://spoonacular.com/recipeImages/358073-312x231.jpeg",
      imageType: "jpeg",
    },
    {
      id: 450759,
      title: "Pasta Pie",
      image: "https://spoonacular.com/recipeImages/450759-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 376941,
      title: "Pasta Rosa",
      image: "https://spoonacular.com/recipeImages/376941-312x231.jpeg",
      imageType: "jpeg",
    },
    {
      id: 532245,
      title: "Pasta Bake",
      image: "https://spoonacular.com/recipeImages/532245-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 602638,
      title: "Pasta Nest",
      image: "https://spoonacular.com/recipeImages/602638-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 603414,
      title: "Pasta Mama",
      image: "https://spoonacular.com/recipeImages/603414-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 487873,
      title: "Pasta Salad",
      image: "https://spoonacular.com/recipeImages/487873-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 377153,
      title: "Pasta Ponza",
      image: "https://spoonacular.com/recipeImages/377153-312x231.jpeg",
      imageType: "jpeg",
    },
    {
      id: 379582,
      title: "Pasta Salad",
      image: "https://spoonacular.com/recipeImages/379582-312x231.jpeg",
      imageType: "jpeg",
    },
  ],
  offset: 0,
  number: 10,
  totalResults: 8202,
};

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
  },
};

// https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=pasta&cuisine=italian&excludeCuisine=greek&diet=vegetarian&intolerances=gluten&equipment=pan&includeIngredients=tomato%2Ccheese&excludeIngredients=eggs&type=main%20course&instructionsRequired=true&fillIngredients=false&addRecipeInformation=false&titleMatch=Crock%20Pot&maxReadyTime=20&ignorePantry=true&sort=calories&sortDirection=asc&minCarbs=10&maxCarbs=100&minProtein=10&maxProtein=100&minCalories=50&maxCalories=800&minFat=10&maxFat=100&minAlcohol=0&maxAlcohol=100&minCaffeine=0&maxCaffeine=100&minCopper=0&maxCopper=100&minCalcium=0&maxCalcium=100&minCholine=0&maxCholine=100&minCholesterol=0&maxCholesterol=100&minFluoride=0&maxFluoride=100&minSaturatedFat=0&maxSaturatedFat=100&minVitaminA=0&maxVitaminA=100&minVitaminC=0&maxVitaminC=100&minVitaminD=0&maxVitaminD=100&minVitaminE=0&maxVitaminE=100&minVitaminK=0&maxVitaminK=100&minVitaminB1=0&maxVitaminB1=100&minVitaminB2=0&maxVitaminB2=100&minVitaminB5=0&maxVitaminB5=100&minVitaminB3=0&maxVitaminB3=100&minVitaminB6=0&maxVitaminB6=100&minVitaminB12=0&maxVitaminB12=100&minFiber=0&maxFiber=100&minFolate=0&maxFolate=100&minFolicAcid=0&maxFolicAcid=100&minIodine=0&maxIodine=100&minIron=0&maxIron=100&minMagnesium=0&maxMagnesium=100&minManganese=0&maxManganese=100&minPhosphorus=0&maxPhosphorus=100&minPotassium=0&maxPotassium=100&minSelenium=0&maxSelenium=100&minSodium=0&maxSodium=100&minSugar=0&maxSugar=100&minZinc=0&maxZinc=100&offset=0&number=10&limitLicense=false&ranking=2

const searchForRecipes = async (query = "pasta") => {
  const result = await fetch(
    `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${query}`,
    options
  );
  const data = await result.json();
  return data;
};

const advancedSearchForRecipes = async (
  query = "pasta",
  cousine = "european",
  diet = "ovo vegetarian"
) => {
  const result = await fetch(
    `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${query}&cuisine=${cousine}&diet=${diet}`,
    options
  );
  const data = await result.json();
  return data;
};

const Card = ({ recipe }) => {
  return (
    <div className="bg-yellow-400 p-2 m-2 w-56 hover:cursor-pointer dark:text-gray-800 hover:scale-105 transition-all duration-300">
      <Image
        alt="food picture"
        src={recipe.image}
        width={300}
        height={300}
        layout="responsive"
        className="object-cover rounded-md"
      />
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-xl">{recipe.title}</h3>
        <p>{`ID is: ${recipe.id}`}</p>
      </div>
    </div>
  );
};

const Food = () => {
  const [recipes, setRecipes] = useState(defaultRecipes);
  const searchRef = useRef("");
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [submenu, setSubmenu] = useState(false);

  useEffect(() => {
    console.log({ submenu });
  }),
    [submenu];

  return (
    <div className="flex flex-col justify-center items-center py-2">
      <section className="m-4 max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          I Want Please | Search for:
        </h2>

        <form>
          <div className="flex flex-col gap-6 mt-4 sm:grid-cols-2">
            {advancedSearch ? (
              <>
                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    htmlFor="search"
                  >
                    Recipe Name
                  </label>
                  <input
                    ref={searchRef}
                    id="search"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div className="flex items-center justify-center">
                  <div className="relative inline-block w-full">
                    {/* -- Dropdown toggle button --> */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setSubmenu(!submenu);
                      }}
                      className="relative z-10 px-6 py-2 w-full leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                    >
                      Cuisine
                    </button>

                    {/* -- Dropdown menu --> */}
                    {submenu ? (
                      <div className="absolute z-20 mt-2 overflow-hidden bg-white rounded-md shadow-lg w-80 dark:bg-gray-800">
                        <div className="py-2">
                          <a className="flex items-center px-4 py-3 -mx-2 transition-colors duration-200 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700">
                            <img
                              className="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                              alt="avatar"
                            />
                            <p className="mx-2 text-sm text-gray-600 dark:text-white">
                              <span className="font-bold">Sara Salah</span>{" "}
                              replied on the{" "}
                              <span className="font-bold text-blue-500">
                                Upload Image
                              </span>{" "}
                              artical . 2m
                            </p>
                          </a>
                          <a className="flex items-center px-4 py-3 -mx-2 transition-colors duration-200 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700">
                            <img
                              className="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full"
                              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                              alt="avatar"
                            />
                            <p className="mx-2 text-sm text-gray-600 dark:text-white">
                              <span className="font-bold">Slick Net</span> start
                              following you . 45m
                            </p>
                          </a>
                          <a className="flex items-center px-4 py-3 -mx-2 transition-colors duration-200 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700">
                            <img
                              className="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full"
                              src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                              alt="avatar"
                            />
                            <p className="mx-2 text-sm text-gray-600 dark:text-white">
                              <span className="font-bold">Jane Doe</span> Like
                              Your reply on{" "}
                              <span className="font-bold text-blue-500">
                                Test with TDD
                              </span>{" "}
                              artical . 1h
                            </p>
                          </a>
                          <a className="flex items-center px-4 py-3 -mx-2 transition-colors duration-200 transform hover:bg-gray-100 dark:hover:bg-gray-700">
                            <img
                              className="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full"
                              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80"
                              alt="avatar"
                            />
                            <p className="mx-2 text-sm text-gray-600 dark:text-white">
                              <span className="font-bold">Abigail Bennett</span>{" "}
                              start following you . 3h
                            </p>
                          </a>
                        </div>
                        <a className="block py-2 font-bold text-center text-white bg-gray-800 dark:bg-gray-700 hover:underline">
                          See all notifications
                        </a>
                      </div>
                    ) : null}
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    const query = searchRef.current.value;
                    searchForRecipes(query).then((data) => {
                      setRecipes(data);
                      searchRef.current.value = "";
                    });
                  }}
                  className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                >
                  Search
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();

                    setAdvancedSearch(true);
                  }}
                  className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                >
                  Advanced Search
                </button>
              </>
            ) : (
              <>
                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    htmlFor="search"
                  >
                    Recipe Name
                  </label>
                  <input
                    ref={searchRef}
                    id="search"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    const query = searchRef.current.value;
                    searchForRecipes(query).then((data) => {
                      setRecipes(data);
                      searchRef.current.value = "";
                    });
                  }}
                  className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                >
                  Search
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();

                    setAdvancedSearch(true);
                  }}
                  className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                >
                  Advanced Search
                </button>
              </>
            )}
          </div>
        </form>
      </section>

      <div className="grid grid-cols-2">
        {recipesAdvancedSearchFields.map((field) => {
          const name = Object.keys(field);
          console.log(field[name]);
          if (field[name].hidden === false) {
            return <Select name={name} key={name} />;
          }
        })}
      </div>

      {recipes.results.map((recipe, idx) => {
        return <Card key={idx} recipe={recipe} />;
      })}
    </div>
  );
};

export default Food;
