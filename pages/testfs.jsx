import { useEffect, useState } from "react";
import FastFoodCard from "../components/FastFoodCard";


import { useSelector, useDispatch } from "react-redux";
import {
  setFetchedStores,
  setNearby,
} from "../redux/features/fastfood/fastfoodSlice";
import { setLatLong } from "../redux/features/latLong/latLongSlice";

import { fetchFastFoodStores } from "../lib/foursquare";

export async function getStaticProps(context) {
  const storesByLocation = await fetchFastFoodStores(
    "40.748627838930304,-73.98528717577388",
    "30" //Starting location: NYC
  );
  return {
    props: {
      fastfoodStores: storesByLocation,
    }, // will be passed to the page component as props
  };
}

////// Client Side Code //////

const Testfs = (props) => {
  const dispatch = useDispatch();

  const stores = useSelector((state) => state.fastfood.fetchedStores);
  // const latLong = useSelector((state) => state.latLong.latLong);
  const nearby = useSelector((state) => state.fastfood.nearby);
  const [loading, setLoading] = useState(false);

  //get location data from browser
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const actualPosition = `${position.coords.latitude},${position.coords.longitude}`;
        dispatch(setLatLong(actualPosition));

        setNearby(true);
        console.log("LatLong aquired!", actualPosition);
        fetchNearbyStores(actualPosition);
      },

      function (error) {
        console.log("Error getting location", error);
        alert(`Error (${error.code}) getting location.  ${error.message}.`);
        // setNearby(false);
      }
    );
  };

  const fetchNearbyStores = async (latLong) => {
    setLoading(true);
    const fetchedStores = await fetch(
      `/api/getFastFoodStoresByLocation?latLong=${latLong}&limit=15`
    );
    const response = await fetchedStores.json();
    dispatch(setFetchedStores(response));
    dispatch(setNearby(true));
    setLoading(false);
  };

  useEffect(() => {
    // If there are no stores in redux, get them from initial props
    if (stores.length > 0) {
      //We have some stores in redux. Nothing to do.
    } else {
      dispatch(setFetchedStores(props.fastfoodStores));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white relative flex flex-col items-center">
      <h1 className="text-center mt-10 text-2xl">I Want Please</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4 w-60"
        onClick={getLocation}
      >
        {loading ? "Loading..." : "View FastFoods nearby"}
      </button>
      <h2 className="text-xl text-center">{`${
        nearby ? "Nearby" : "New York"
      } FastFood Stores`}</h2>
      <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {stores &&
          stores.length > 0 &&
          stores.map((store, idx) => {
            return <FastFoodCard key={idx} store={store} />;
          })}
      </div>
    </div>
  );
};

export default Testfs;
