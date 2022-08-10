import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

const getFastFoodStoreVotes = async (req, res) => {
  const { id } = req.query;
  if (!id) {
    res.status(400).json({ message: "Missing id" });
  } else {
    if (id.length !== 24) {
      res.status(400).json({ message: "Wrong id" });
    } else {
      try {
        const docRef = doc(db, "fastfoodStores", id);
        const docSnap = await getDoc(docRef);
        const votes = await docSnap.data().votes;
        res.status(200);
        res.json(votes);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong", error });
      }
    }
  }
};

export default getFastFoodStoreVotes;
