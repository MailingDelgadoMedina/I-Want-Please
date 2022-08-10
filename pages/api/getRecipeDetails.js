import { fetchRecipeDetails } from "../../lib/spoonacular";

const getRecipeDetails = async (req, res) => {
  try {
    const { id } = req.query;
    const recipe = await fetchRecipeDetails(id);
    res.status(200);
    res.json(recipe);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", error });
  }
};

export default getRecipeDetails;
