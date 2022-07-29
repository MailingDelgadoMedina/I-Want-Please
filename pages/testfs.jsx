import { useEffect, useState } from "react";
import Image from "next/image";
import fastFoodGenericPicture from "../public/static/fastfood.jpg";
import { initialStores } from "../foursquare/localData";
import { useDispatch } from "react-redux";
import {
  setFetchedStores,
  setSelectedStore,
} from "../store/features/fastfood/fastfoodSlice";
import { useSelector } from "react-redux";
import { setLatLong } from "../store/features/latLong/latLongSlice";

import { useRouter } from "next/router";
import { fetchFastFoodStores } from "../foursquare/foursquare";

////// Server Side Code //////
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
const Card = ({ store, clickToOpenStorePage }) => {
  const storeLocation = `${
    store.location.formatted_address.length > 0
      ? store.location.formatted_address + ", "
      : ""
  }${store.location.country}`;
  return (
    <div className="overflow-hidden p-2 flex flex-col m-2 h-48 w-64 bg-gray-200 dark:bg-slate-700 justify-between border-2 border-gray-400 dark:border-black shadow-sm shadow-gray-400/50 hover:scale-105 transition-all duration-300">
      <div
        className="h-full w-full text-center hover:cursor-pointer"
        onClick={(e) => {
          clickToOpenStorePage(store);
        }}
      >
        <Image
          src={
            store.photos.length > 0 ? store.photos[0] : fastFoodGenericPicture
          }
          alt={`Photo of ${store.name}`}
          layout="responsive"
          width={200}
          height={90}
          sizes="50vw"
          className="object-cover"
        />
      </div>

      <h1 className="mt-2 text-center ">{store.name}</h1>
      <p className="text-center mb-2">
        Address: <span>{storeLocation}</span>
      </p>
    </div>
  );
};

const Testfs = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [stores, setStores] = useState(props.fastfoodStores);
  // const [latLong, setLatLong] = useState(
  //   "40.71266484705233,-74.00646731123601"
  // );
  const latLong = useSelector((state) => state.latLong.latLong);
  const [nearby, setNearby] = useState(false);
  const [loading, setLoading] = useState(false);

  const clickToOpenStorePage = (store) => {
    dispatch(setSelectedStore(store));
    router.push(`/fastfood-store/${store.fsq_id}`);
  };

  //get location data from browser
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        dispatch(
          setLatLong(`${position.coords.latitude},${position.coords.longitude}`)
        );
        // setNearby(true);
        // fetchNearbyStores();
      },

      function (error) {
        console.log("Error getting location", error);
        alert(`Error (${error.code}) getting location.  ${error.message}.`);
        // setNearby(false);
      }
    );
  };

  const fetchNearbyStores = async () => {
    setLoading(true);
    // const fetchedStores = await fetchFastFoodStores(latLong, "30");
    const fetchedStores = await fetch(
      `/api/getFastFoodStoresByLocation?latLong=${latLong}&limit=15`
    );
    const response = await fetchedStores.json();
    setStores(response);
    setNearby(true);
    setLoading(false);
  };

  useEffect(() => {
    if (latLong) {
      fetchNearbyStores(latLong);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latLong]);

  useEffect(() => {
    if (stores) {
      dispatch(setFetchedStores(stores));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stores]);

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
        {stores.map((store, idx) => {
          return (
            <Card
              key={idx}
              store={store}
              clickToOpenStorePage={clickToOpenStorePage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Testfs;
