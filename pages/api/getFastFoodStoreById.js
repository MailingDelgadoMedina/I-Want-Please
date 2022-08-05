import { fetchOneFastFoodStore } from "../../foursquare/foursquare";

const getFastFoodStoresById = async (req, res) => {
  try {
    const { id } = req.query;
    const store = await fetchOneFastFoodStore(id);
    res.status(200);
    res.json(store);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", error });
  }
};

export default getFastFoodStoresById;
