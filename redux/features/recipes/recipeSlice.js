import { createSlice } from "@reduxjs/toolkit";

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

const initialState = {
  recipes: defaultRecipes,
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setRecipes: (state, action) => {
      state.recipes = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRecipes } = recipeSlice.actions;

export default recipeSlice.reducer;
