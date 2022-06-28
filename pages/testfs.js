import Link from "next/link";
import { useEffect, useState } from "react";
import {
  getUrlForFastFoodPhoto,
  fetchFastFoodStores,
  fetchFastFoodPhoto,
} from "../foursquare/foursquare";

const Testfs = () => {
  const [stores, setStores] = useState([]);
  const [photos, setPhotos] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [error, setError] = useState(null);
  //   const [latLong, setLatLong] = useState(
  //     "43.65267326999575,-79.39545615725015"
  //   );
  //   const [limit, setLimit] = useState("6");
  //   const [query, setQuery] = useState("fast food");
  //   const [fsq_id, setFsq_id] = useState("4cf53d2b99c6236ab7054a67");
  //   const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    // fetchFastFoodPhoto("61ff1842b64e6c1839e4e89f").then((data) => {
    //   //   console.log("FETCH PHOTO", data);
    //   setPhotos(data);
    // });

    const fetchAllData = async () => {
      const stores = await fetchFastFoodStores();
      const allData = await stores.map((store, idx) => {
        const blablabla = fetchFastFoodPhoto(store.id).then((data) => {
          return data;
        });

        console.log("BLABLABLA", blablabla);
        return {
          ...store,
          imgUrl: blablabla,
        };
      });

      setStores(allData);

      //   console.log("FETCH ALL DATA", allData);
    };

    fetchAllData();

    // fetchFastFoodStores().then((data) => {
    //   //   setStores(data);
    //   const newArraw = async () =>
    //     await data.map((venue, idx) => {
    //       const getImgUrl = async (venue) => {
    //         await fetchFastFoodPhoto(venue.fsq_id);
    //       };
    //       const result = getImgUrl(venue);
    //       return {
    //         ...venue,
    //         imgUrl: getImgUrl(venue),
    //       };
    //     });
    //   setStores(newArraw);
    // });
  }, []);

  useEffect(() => {
    console.log({ stores });
  }, [stores]);

  return (
    <div>
      <h1 className="text-center mt-10">Fetched FastFoods</h1>
      <ul className="mx-5 mt-5">
        {
          //     stores.map((store, idx) => {
          //   return (
          //     <li className="mb-2" key={idx}>
          //       {store.name} <br /> {store.location.country}
          //     </li>
          //   );
          // })
        }
      </ul>
    </div>
  );
};

export default Testfs;
