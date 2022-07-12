import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Select from "../components/Select";

import { recipesAdvancedSearchFields } from "../utils/recipesAdvancedSearchFields";

console.log({ recipesAdvancedSearchFields });

const gred =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80";

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
    <div className="bg-gray-200 dark:bg-gray-700 p-2 m-2 w-56 hover:cursor-pointer dark:text-gray-200 hover:scale-105 transition-all duration-300">
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
  const [advancedSearchQuery, setAdvancedSearchQuery] = useState({
    cuisine: "",
    excludeCuisine: "",
    diet: "",
    intolerances: "",
    includeIngredients: "",
  });

  useEffect(() => {
    // console.log({ advancedSearch });
    // console.log({ recipesAdvancedSearchFields });
  }),
    [advancedSearch];

  useEffect(() => {
    console.log({ advancedSearchQuery });
  }),
    [advancedSearchQuery];

  return (
    <div className="flex flex-col justify-center items-center py-2">
      <section className="m-4 p-6 max-w-[950px] mx-auto w-4/6 bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          I Want Please | Search for:
        </h2>

        <form>
          <div className="flex flex-col gap-6 mt-4 sm:grid-cols-2">
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

                setAdvancedSearch(!advancedSearch);
              }}
              className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              {advancedSearch ? "Simple Search" : "Advanced Search"}
            </button>
            {advancedSearch ? (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3">
                  {recipesAdvancedSearchFields.map((field, idx) => {
                    const name = Object.keys(field);

                    if (field[name].hidden === false) {
                      // console.log(field);
                      if (field[name] === "includeIngredients") {
                        console.log("AHAAAAA", { field });
                        return (
                          <Select
                            name={name}
                            key={idx.toString() + name}
                            values={field[name].values.map(
                              (ingredient) => ingredient[0][0][0]
                            )}
                            advancedSearchQuery={advancedSearchQuery}
                            setAdvancedSearchQuery={setAdvancedSearchQuery}
                          />
                        );
                      } else {
                        return (
                          <Select
                            name={name}
                            key={idx.toString() + name}
                            values={field[name].values}
                            advancedSearchQuery={advancedSearchQuery}
                            setAdvancedSearchQuery={setAdvancedSearchQuery}
                          />
                        );
                      }
                    }
                  })}
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </form>
      </section>

      <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recipes ? (
          recipes.results.map((recipe, idx) => {
            return <Card key={idx} recipe={recipe} />;
          })
        ) : (
          <p>No recipes found</p>
        )}
      </div>
    </div>
  );
};

export default Food;
