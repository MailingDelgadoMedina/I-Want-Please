const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
  },
};

export const fetchRecipeDetails = async (id = "450759") => {
  const result = await fetch(
    `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
    options
  );
  const data = await result.json();
  return data;
};

export const advancedSearchForRecipes = async (
  query = "fish",
  stringToSearch = ""
) => {
  const result = await fetch(
    `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${query}${stringToSearch}`,
    options
  );
  const data = await result.json();
  return data;
};
