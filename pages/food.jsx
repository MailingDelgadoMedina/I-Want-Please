import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Select from "../components/Select";
import { ChevronDoubleDownIcon } from "@heroicons/react/outline";

import { recipesAdvancedSearchFields } from "../utils/recipesAdvancedSearchFields";
import Link from "next/link";

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

const getRecipeDetails = async (id) => {
  const result = await fetch(
    `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
    options
  );
  const data = await result.json();
  console.log(data);
};

const Card = ({ recipe }) => {
  return (
    <div
      className="bg-gray-200 dark:bg-gray-700 p-2 m-2 w-56 hover:cursor-pointer dark:text-gray-200 hover:scale-105 transition-all duration-300"
      onClick={() => {
        getRecipeDetails(recipe.id);
        // window.location.href = `/recipe/${recipe.id}`;
      }}
    >
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

  const advancedSearchForRecipes = async (
    query = "fish",
    stringToSearch = transformAdvancedSearchQuery()
  ) => {
    const result = await fetch(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${query}${stringToSearch}`,
      options
    );
    const data = await result.json();
    return data;
  };

  // Function to transform advancedSearchQuery to a string
  const transformAdvancedSearchQuery = () => {
    let query = "";
    for (let key in advancedSearchQuery) {
      if (advancedSearchQuery[key] !== "") {
        query += `&${key}=${advancedSearchQuery[key]}`;
      }
    }
    return query;
  };
  // Search for bulk recipes by ID
  // useEffect(() => {
  //   fetch(
  //     "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids=749013%2C358073%2C450759",
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => console.log("Bulk", response))
  //     .catch((err) => console.error(err));
  // }),
  //   [];

  useEffect(() => {
    const id = "749013";
    fetch(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log("JustOne", response))
      .catch((err) => console.error(err));
  }),
    [];

  return (
    <div className="flex flex-col justify-center items-center py-2">
      <section className="m-4 p-6 max-w-[950px] mx-auto sm:w-4/6 bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          <Link href="/">I Want Please</Link> | Search for:
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

                setAdvancedSearch(!advancedSearch);
              }}
              className=" text-gray-700 flex justify-center items-center px-6 py-2 leading-5 dark:text-white transition-colors duration-200 transform bg-gray-300 dark:bg-gray-700 rounded-md hover:bg-gray-400 hover:text-black dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              <div
                className={`text-gray-700 hover:text-black dark:text-gray-300 h-6 w-6 mr-2 transition-all duration-300 ${
                  advancedSearch ? "rotate-180" : ""
                }`}
              >
                {<ChevronDoubleDownIcon />}
              </div>
              {advancedSearch ? `Show Simple Search` : "Show Advanced Search"}
            </button>
            {advancedSearch ? (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3">
                  {recipesAdvancedSearchFields.map((field, idx) => {
                    const name = Object.keys(field);

                    if (field[name].hidden === false) {
                      if (name[0] === "includeIngredients") {
                        return (
                          <Select
                            name={name}
                            key={idx.toString() + name}
                            values={field[name].values
                              .map((ingredient) => ingredient)
                              .map((value) => ({
                                value: value,
                                label: value,
                              }))}
                            advancedSearchQuery={advancedSearchQuery}
                            setAdvancedSearchQuery={setAdvancedSearchQuery}
                          />
                        );
                      } else {
                        if (field[name].combine === "csv") {
                          return (
                            <Select
                              name={name}
                              key={idx.toString() + name}
                              values={field[name].values.map((value) => ({
                                value: value,
                                label: value,
                              }))}
                              advancedSearchQuery={advancedSearchQuery}
                              setAdvancedSearchQuery={setAdvancedSearchQuery}
                            />
                          );
                        } else {
                          return (
                            <div className="m-2">
                              <label
                                htmlFor={name}
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 capitalize"
                              >
                                {name}
                              </label>
                              <select
                                id={name}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 capitalize"
                                defaultValue=""
                                onChange={(e) => {
                                  setAdvancedSearchQuery({
                                    ...advancedSearchQuery,
                                    [name[0]]: e.target.value.replace(
                                      /\s+/g,
                                      "%20"
                                    ),
                                  });
                                }}
                              >
                                <option value="" className="">
                                  Select...
                                </option>
                                {field[name].values.map((value, idx) => {
                                  if (typeof value === "string") {
                                    return (
                                      <option
                                        key={idx}
                                        value={value}
                                        className="capitalize"
                                      >
                                        {value}
                                      </option>
                                    );
                                  } else {
                                    return (
                                      <option
                                        key={idx}
                                        value={value[0]}
                                        className=""
                                      >
                                        {value[0]}
                                      </option>
                                    );
                                  }
                                })}
                              </select>
                            </div>
                          );
                        }
                      }
                    }
                  })}
                </div>
              </>
            ) : (
              <></>
            )}
            <button
              onClick={(e) => {
                e.preventDefault();
                const query = searchRef.current.value;
                advancedSearchForRecipes(query).then((data) => {
                  console.log("Data from advancedSearchForRecipes", data);
                  setRecipes(data);
                  searchRef.current.value = "";
                });
              }}
              className="px-6 py-2 leading-5 text-gray-700 dark:text-white transition-colors duration-200 transform bg-gray-300 hover:text-black dark:bg-gray-700 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              {advancedSearch ? "Advanced Search" : "Search"}
            </button>
          </div>
        </form>
      </section>

      <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recipes ? (
          recipes.results.map((recipe, idx) => {
            console.log({ recipe });
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
