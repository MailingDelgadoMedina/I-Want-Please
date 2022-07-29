import { ingredients } from "./ingredientsList.js";

export const recipesAdvancedSearchFields = [
  {
    cuisine: {
      values: [
        "African",
        "American",
        "British",
        "Cajun",
        "Caribbean",
        "Chinese",
        "Eastern European",
        "European",
        "French",
        "German",
        "Greek",
        "Indian",
        "Irish",
        "Italian",
        "Japanese",
        "Jewish",
        "Korean",
        "Latin American",
        "Mediterranean",
        "Mexican",
        "Middle Eastern",
        "Nordic",
        "Southern",
        "Spanish",
        "Thai",
        "Vietnamese",
      ],
      info: 'The cuisine(s) of the recipes. Multiple values will be interpreted as "AND",',
      combine: "csv",
      default: "italian",
      hidden: false,
    },
  },
  {
    excludeCuisine: {
      values: [
        "African",
        "American",
        "British",
        "Cajun",
        "Caribbean",
        "Chinese",
        "Eastern European",
        "European",
        "French",
        "German",
        "Greek",
        "Indian",
        "Irish",
        "Italian",
        "Japanese",
        "Jewish",
        "Korean",
        "Latin American",
        "Mediterranean",
        "Mexican",
        "Middle Eastern",
        "Nordic",
        "Southern",
        "Spanish",
        "Thai",
        "Vietnamese",
      ],
      info: 'The cuisine(s) the recipes must not match. Multiple values will be interpreted as "AND".',
      combine: "csv",
      default: "greek",
      hidden: false,
    },
  },
  {
    diet: {
      values: [
        "pescetarian",
        " lacto vegetarian",
        " ovo vegetarian",
        " vegan",
        " paleo",
        " privegetarianmal",
        " vegetarian",
      ],
      info: "The diet(s) of the recipes.",
      combine: "no",
      default: "vegetarian",
      hidden: false,
    },
  },
  {
    intolerances: {
      values: [
        "dairy",
        "egg",
        "gluten",
        "peanut",
        "seafood",
        "sesame",
        "shellfish",
        "soy",
        "sulfite",
        "tree nut",
        "wheat",
      ],
      info: "All found recipes must not have ingredients that could cause problems for people with one of the given tolerances.",
      combine: "csv",
      default: "gluten",
      hidden: false,
    },
  },
  {
    equipment: {
      values: ["pan", "blender", "frying pan", "bow"],
      info: 'The equipment required. Multiple values will be interpreted as "OR"',
      combine: "csv",
      default: "blender,frying pan,bowl",
      hidden: true,
    },
  },
  {
    includeIngredients: {
      values: ingredients,
      info: 'The ingredients that must be included in the recipes. Multiple values will be interpreted as "AND"',
      combine: "csv",
      default: "tomato,cheese",
      hidden: false,
    },
  },
  {
    excludeIngredients: {
      values: ingredients,
      info: 'The ingredients that must not be included in the recipes. Multiple values will be interpreted as "AND"',
      combine: "csv",
      default: "eggs",
      hidden: true,
    },
  },
  {
    type: {
      values: [
        "main course",
        " side dish",
        " dessert",
        " appetizer",
        " salad",
        " bread",
        " breakfast",
        " soup",
        " beverage",
        " sauce",
        " drink",
      ],
      info: "The type of the recipes. One of the following: main course, side dish, dessert, appetizer, salad, bread, breakfast, soup, beverage, sauce, or drink.",
      combine: "no",
      default: "main course",
      hidden: true,
    },
  },
  {
    instructionsRequired: {
      values: ["true", "false"],
      info: "Whether the recipes must have instructions.",
      combine: "no",
      default: "true",
      hidden: true,
    },
  },
  {
    fillIngredients: {
      values: ["true", "false"],
      info: "Information about the used and missing ingredients in each recipe.",
      combine: "no",
      default: "false",
      hidden: true,
    },
  },
  {
    addRecipeInformation: {
      values: ["true", "false"],
      info: "If set to true, you get more information about the recipes returned. This saves the calls to get recipe information.",
      combine: "no",
      default: "false",
      hidden: true,
    },
  },
  {
    author: {
      values: [""],
      info: "The username of the recipe author.",
      combine: "no",
      hidden: true,
    },
  },
  {
    tags: {
      values: [""],
      info: "User defined tags that have to match. The author pram has to be set.",
      combine: "no",
      hidden: true,
    },
  },
  {
    recipeBoxId: {
      values: [""],
      info: "The id of the recipe box to which the search should be limited to.",
      combine: "no",
      hidden: true,
    },
  },

  {
    titleMatch: {
      values: [""],
      info: "A string that the recipes must contain in their titles.",
      combine: "no",
      default: "Crock Pot",
      hidden: true,
    },
  },
  {
    maxReadyTime: {
      values: [""],
      info: "The maximum time in minutes it should take to prepare and cook the recipe.",
      combine: "no",
      default: "20",
      hidden: true,
    },
  },
  {
    ignorePantry: {
      values: ["true", "false"],
      info: "Whether to ignore typical pantry items, such as water, salt, flour, etc.",
      combine: "no",
      default: "true",
      hidden: true,
    },
  },
  {
    sort: {
      values: [
        "meta-score",
        "popularity",
        "healthiness",
        "price",
        "time",
        "random",
        "max-used-ingredients",
        "min-missing-ingredients",
        "alcohol",
        "caffeine",
        "copper",
        "energy",
        "calories",
        "calcium",
        "carbohydrates",
        "carbs",
        "choline",
        "cholesterol",
        "total-fat",
        "fluoride",
        "trans-fat",
        "saturated-fat",
        "mono-unsaturated-fat",
        "poly-unsaturated-fat",
        "fiber",
        "folate",
        "folic-acid",
        "iodine",
        "iron",
        "magnesium",
        "manganese",
        "vitamin-b3",
        "niacin",
        "vitamin-b5",
        "pantothenic-acid",
        "phosphorus",
        "potassium",
        "protein",
        "vitamin-b2",
        "riboflavin",
        "selenium",
        "sodium",
        "vitamin-b1",
        "thiamin",
        "vitamin-a",
        "vitamin-b6",
        "vitamin-b12",
        "vitamin-c",
        "vitamin-d",
        "vitamin-e",
        "vitamin-k",
        "sugar",
        "zinc",
      ],
      info: "The strategy to sort recipes by.",
      combine: "no",
      default: "calories",
      hidden: true,
    },
  },
  {
    sortDirection: {
      values: ["asc", "desc"],
      info: "The direction to sort recipes by.",
      combine: "no",
      default: "asc",
      hidden: true,
    },
  },
  {
    minCarbs: {
      values: [""],
      info: "The minimum number of grams of carbohydrates the recipe must have.",
      combine: "no",
      default: "10",
      hidden: true,
    },
  },
  {
    maxCarbs: {
      values: [""],
      info: "The maximum number of grams of carbohydrates the recipe must have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },
  {
    minProtein: {
      values: [""],
      info: "The minimum number of grams of protein the recipe must have.",
      combine: "no",
      default: "10",
      hidden: true,
    },
  },
  {
    maxProtein: {
      values: [""],
      info: "The maximum number of grams of protein the recipe must have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },
  {
    minCalories: {
      values: [""],
      info: "The minimum number of calories the recipe must have.",
      combine: "no",
      default: "50",
      hidden: true,
    },
  },
  {
    maxCalories: {
      values: [""],
      info: "The maximum number of calories the recipe must have.",
      combine: "no",
      default: "800",
      hidden: true,
    },
  },
  {
    minFat: {
      values: [""],
      info: "The minimum number of grams of fat the recipe must have.",
      combine: "no",
      default: "10",
      hidden: true,
    },
  },
  {
    maxFat: {
      values: [""],
      info: "The maximum number of grams of fat the recipe must have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },
  {
    minAlcohol: {
      values: [""],
      info: "The minimum number of grams of alcohol the recipe can have.",
      combine: "no",
      default: "0",
      hidden: true,
    },
  },

  {
    maxAlcohol: {
      values: [""],
      info: "The maximum number of grams of alcohol the recipe can have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },

  {
    minCaffeine: {
      values: [""],
      info: "The minimum number of milligrams of caffeine the recipe can have.",
      combine: "no",
      default: "10",
      hidden: true,
    },
  },

  {
    maxCaffeine: {
      values: [""],
      info: "The maximum number of milligrams of caffeine the recipe can have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },

  {
    minCopper: {
      values: [""],
      info: "The minimum number of milligrams of copper the recipe must have.",
      combine: "no",
      default: "0",
      hidden: true,
    },
  },

  {
    maxCopper: {
      values: [""],
      info: "The maximum number of milligrams of copper the recipe must have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },

  {
    minCalcium: {
      values: [""],
      info: "The minimum number of milligrams of calcium the recipe can have.",
      combine: "no",
      default: "0",
      hidden: true,
    },
  },

  {
    maxCalcium: {
      values: [""],
      info: "The maximum number of milligrams of calcium the recipe cam have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },

  {
    minCholine: {
      values: [""],
      info: "The minimum number of milligrams of choline the recipe cam have.",
      combine: "no",
      default: "0",
      hidden: true,
    },
  },

  {
    maxCholine: {
      values: [""],
      info: "The maximum number of milligrams of choline the recipe cam have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },

  {
    minCholesterol: {
      values: [""],
      info: "The minimum number of milligrams of cholesterol the recipe cam have.",
      combine: "no",
      default: "0",
      hidden: true,
    },
  },

  {
    maxCholesterol: {
      values: [""],
      info: "The maximum number of milligrams of cholesterol the recipe cam have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },

  {
    minVitaminB12: {
      values: [],
      info: "The minimum number of milligrams of VitaminB12 the recipe can have.",
      combine: "no",
      default: "0",
      hidden: true,
    },
  },
  {
    maxPhosphorus: {
      values: [],
      info: "The maximum number of milligrams of Phosphorus the recipe can have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },
  {
    maxIodine: {
      values: [],
      info: "The maximum number of milligrams of Iodine the recipe can have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },
  {
    maxSugar: {
      values: [],
      info: "The maximum number of milligrams of Sugar the recipe can have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },
  {
    minSaturatedFat: {
      values: [],
      info: "The minimum number of milligrams of SaturatedFat the recipe can have.",
      combine: "no",
      default: "0",
      hidden: true,
    },
  },
  {
    minVitaminB2: {
      values: [],
      info: "The minimum number of milligrams of VitaminB2 the recipe can have.",
      combine: "no",
      default: "0",
      hidden: true,
    },
  },
  {
    minVitaminD: {
      values: [],
      info: "The minimum number of milligrams of VitaminD the recipe can have.",
      combine: "no",
      default: "0",
      hidden: true,
    },
  },
  {
    ranking: {
      values: ["0", "1", "2"],
      info: "Whether to minimize missing ingredients (0), maximize used ingredients (1) first, or rank recipes by relevance (2)",
      combine: "no",
      default: "2",
      hidden: true,
    },
  },
  {
    limitLicense: {
      values: ["true", "false"],
      info: "Whether the recipes should have an open license that allows for displaying with proper attribution.",
      combine: "no",
      default: "false",
      hidden: true,
    },
  },
  {
    maxFiber: {
      values: [],
      info: "The maximum number of milligrams of Fiber the recipe can have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },
  {
    maxFluoride: {
      values: [],
      info: "The maximum number of milligrams of Fluoride the recipe can have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },
  {
    maxFolate: {
      values: [],
      info: "The maximum number of milligrams of Folate the recipe can have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },
  {
    maxFolicAcid: {
      values: [],
      info: "The maximum number of milligrams of FolicAcid the recipe can have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },
  {
    maxIron: {
      values: [],
      info: "The maximum number of milligrams of Iron the recipe can have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },
  {
    maxMagnesium: {
      values: [],
      info: "The maximum number of milligrams of Magnesium the recipe can have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },
  {
    maxManganese: {
      values: [],
      info: "The maximum number of milligrams of Manganese the recipe can have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },
  {
    maxPotassium: {
      values: [],
      info: "The maximum number of milligrams of Potassium the recipe can have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },
  {
    maxSaturatedFat: {
      values: [],
      info: "The maximum number of milligrams of SaturatedFat the recipe can have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },
  {
    maxSelenium: {
      values: [],
      info: "The maximum number of milligrams of Selenium the recipe can have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },
  {
    maxSodium: {
      values: [],
      info: "The maximum number of milligrams of Sodium the recipe can have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },
  {
    maxVitaminA: {
      values: [],
      info: "The maximum number of milligrams of VitaminA the recipe can have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },
  {
    maxVitaminB1: {
      values: [],
      info: "The maximum number of milligrams of VitaminB1 the recipe can have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },
  {
    maxVitaminB12: {
      values: [],
      info: "The maximum number of milligrams of VitaminB12 the recipe can have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },
  {
    maxVitaminB2: {
      values: [],
      info: "The maximum number of milligrams of VitaminB2 the recipe can have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },
  {
    maxVitaminB3: {
      values: [],
      info: "The maximum number of milligrams of VitaminB3 the recipe can have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },
  {
    maxVitaminB5: {
      values: [],
      info: "The maximum number of milligrams of VitaminB5 the recipe can have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },
  {
    maxVitaminB6: {
      values: [],
      info: "The maximum number of milligrams of VitaminB6 the recipe can have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },
  {
    maxVitaminC: {
      values: [],
      info: "The maximum number of milligrams of VitaminC the recipe can have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },
  {
    maxVitaminD: {
      values: [],
      info: "The maximum number of milligrams of VitaminD the recipe can have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },
  {
    maxVitaminE: {
      values: [],
      info: "The maximum number of milligrams of VitaminE the recipe can have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },
  {
    maxVitaminK: {
      values: [],
      info: "The maximum number of milligrams of VitaminK the recipe can have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },
  {
    maxZinc: {
      values: [],
      info: "The maximum number of milligrams of Zinc the recipe can have.",
      combine: "no",
      default: "100",
      hidden: true,
    },
  },
  {
    minFiber: {
      values: [],
      info: "The minimum number of milligrams of Fiber the recipe can have.",
      combine: "no",
      default: "0",
      hidden: true,
    },
  },
  {
    minFluoride: {
      values: [],
      info: "The minimum number of milligrams of Fluoride the recipe can have.",
      combine: "no",
      default: "0",
      hidden: true,
    },
  },
  {
    minFolate: {
      values: [],
      info: "The minimum number of milligrams of Folate the recipe can have.",
      combine: "no",
      default: "0",
      hidden: true,
    },
  },
  {
    minFolicAcid: {
      values: [],
      info: "The minimum number of milligrams of FolicAcid the recipe can have.",
      combine: "no",
      default: "0",
      hidden: true,
    },
  },
  {
    minIodine: {
      values: [],
      info: "The minimum number of milligrams of Iodine the recipe can have.",
      combine: "no",
      default: "0",
      hidden: true,
    },
  },
  {
    minIron: {
      values: [],
      info: "The minimum number of milligrams of Iron the recipe can have.",
      combine: "no",
      default: "0",
      hidden: true,
    },
  },
  {
    minMagnesium: {
      values: [],
      info: "The minimum number of milligrams of Magnesium the recipe can have.",
      combine: "no",
      default: "0",
      hidden: true,
    },
  },
  {
    minManganese: {
      values: [],
      info: "The minimum number of milligrams of Manganese the recipe can have.",
      combine: "no",
      default: "0",
      hidden: true,
    },
  },
  {
    minPhosphorus: {
      values: [],
      info: "The minimum number of milligrams of Phosphorus the recipe can have.",
      combine: "no",
      default: "0",
      hidden: true,
    },
  },
  {
    minPotassium: {
      values: [],
      info: "The minimum number of milligrams of Potassium the recipe can have.",
      combine: "no",
      default: "0",
      hidden: true,
    },
  },
  {
    minSelenium: {
      values: [],
      info: "The minimum number of milligrams of Selenium the recipe can have.",
      combine: "no",
      default: "0",
      hidden: true,
    },
  },
  {
    minSodium: {
      values: [],
      info: "The minimum number of milligrams of Sodium the recipe can have.",
      combine: "no",
      default: "0",
      hidden: true,
    },
  },
  {
    minSugar: {
      values: [],
      info: "The minimum number of milligrams of Sugar the recipe can have.",
      combine: "no",
      default: "0",
      hidden: true,
    },
  },
  {
    minVitaminA: {
      values: [],
      info: "The minimum number of milligrams of VitaminA the recipe can have.",
      combine: "no",
      default: "0",
      hidden: true,
    },
  },
  {
    minVitaminB1: {
      values: [],
      info: "The minimum number of milligrams of VitaminB1 the recipe can have.",
      combine: "no",
      default: "0",
      hidden: true,
    },
  },
  {
    minVitaminB3: {
      values: [],
      info: "The minimum number of milligrams of VitaminB3 the recipe can have.",
      combine: "no",
      default: "0",
      hidden: true,
    },
  },
  {
    minVitaminB5: {
      values: [],
      info: "The minimum number of milligrams of VitaminB5 the recipe can have.",
      combine: "no",
      default: "0",
      hidden: true,
    },
  },
  {
    minVitaminB6: {
      values: [],
      info: "The minimum number of milligrams of VitaminB6 the recipe can have.",
      combine: "no",
      default: "0",
      hidden: true,
    },
  },
  {
    minVitaminC: {
      values: [],
      info: "The minimum number of milligrams of VitaminC the recipe can have.",
      combine: "no",
      default: "0",
      hidden: true,
    },
  },
  {
    minVitaminE: {
      values: [],
      info: "The minimum number of milligrams of VitaminE the recipe can have.",
      combine: "no",
      default: "0",
      hidden: true,
    },
  },
  {
    minVitaminK: {
      values: [],
      info: "The minimum number of milligrams of VitaminK the recipe can have.",
      combine: "no",
      default: "0",
      hidden: true,
    },
  },
  {
    minZinc: {
      values: [],
      info: "The minimum number of milligrams of Zinc the recipe can have.",
      combine: "no",
      default: "0",
      hidden: true,
    },
  },
  {
    number: {
      values: [],
      info: "The number of results to return (between 1 and 100).",
      combine: "no",
      default: "10",
      hidden: true,
    },
  },
  {
    offset: {
      values: [],
      info: "The number of results to skip (between 0 and 900).",
      combine: "no",
      default: "0",
      hidden: true,
    },
  },
];
