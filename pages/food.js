//   const spoonacular = {
//     method: "GET",
//     headers: {
//         'x-api-key': process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY,
//     }
//   }

import Image from "next/image";
import { useState } from "react";

//   fetch(
//     "https://api.spoonacular.com/recipes/complexSearch",
//     spoonacular
//   )
//     .then((response) => response.json())
//     .then((response) => console.log({ response }))
//     .catch((err) => console.error(err));

//////// Rapid API ////////

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

// fetch(
//   "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=pasta&cuisine=italian",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log({ response }))
//   .catch((err) => console.error(err));

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
  return (
    <div className="flex flex-col justify-center items-center py-2">
      <section className="relative w-full max-w-md px-5 py-4 mx-auto rounded-md">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-5 h-5 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>

          <input
            type="text"
            className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            placeholder="Search"
          />
        </div>
      </section>
      {recipes.results.map((recipe, idx) => {
        return <Card key={idx} recipe={recipe} />;
      })}
    </div>
  );
};

export default Food;
