import { doc, getDoc, setDoc, runTransaction } from "firebase/firestore";
import { db } from "../../lib/firebase";

const upvoteFastFoodStore = async (req, res) => {
  const { id } = req.query;
  const sfDocRef = doc(db, "fastfoodStores", id);
  if (!id) {
    res.status(400).json({ message: "Missing id" });
  } else {
    if (id.length !== 24) {
      res.status(400).json({ message: "Wrong id" });
    } else {
      try {
        await runTransaction(db, async (transaction) => {
          const sfDoc = await transaction.get(sfDocRef);
          if (!sfDoc.exists()) {
            throw "Document does not exist!";
          }

          const plusOneVotes = sfDoc.data().votes + 1;
          transaction.update(sfDocRef, { votes: plusOneVotes });
          res.status(200);
          res.json({
            message: `Transaction successfully committed! Votes increased to: ${plusOneVotes}`,
          });
        });
      } catch (e) {
        console.log("Transaction failed: ", e);
        res.status(500).json({ message: "Something went wrong", e });
      }
    }
  }
};

export default upvoteFastFoodStore;
