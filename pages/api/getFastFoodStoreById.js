import { fetchOneFastFoodStore } from "../../foursquare/foursquare";

const getFastFoodStoresById = async (req, res) => {
  try {
    console.log("req.query", req.query);
    const { id } = req.query;
    const store = await fetchOneFastFoodStore(id);
    console.log("Baaaaaaaaaaaaah", store);
    res.status(200);
    res.json(store);
  } catch (error) {
    console.log("req.query - error", req);
    console.log(error);
    res.status(500).json({ message: "Something went wrong", error });
  }
};

export default getFastFoodStoresById;
