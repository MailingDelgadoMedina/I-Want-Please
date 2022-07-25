import { fetchFastFoodStores } from "../../foursquare/foursquare";

const getFastFoodStoresByLocation = async (req, res) => {
  try {
    console.log("req.query", req);
    const { lat, lng } = req.query;

    const stores = await fetchFastFoodStores(lat, lng);
    res.status(200).json(stores);
  } catch (error) {
    console.log("req.query - error", req);
    console.log(error);
    res.status(500).json({ message: "Something went wrong", error });
  }
};

export default getFastFoodStoresByLocation;
