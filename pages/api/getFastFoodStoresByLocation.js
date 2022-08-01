import { fetchFastFoodStores } from "../../foursquare/foursquare";

const getFastFoodStoresByLocation = async (req, res) => {
  try {
    // console.log("req.query", req);
    const { latLong, limit } = req.query;
    const stores = await fetchFastFoodStores(latLong, limit);
    res.status(200);
    res.json(stores);
  } catch (error) {
    console.log("req.query - error", req);
    console.log(error);
    res.status(500).json({ message: "Something went wrong", error });
  }
};

export default getFastFoodStoresByLocation;
