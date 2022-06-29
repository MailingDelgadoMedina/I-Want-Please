import { useEffect, useState } from "react";
import { fetchFastFoodStores } from "../foursquare/foursquare";
import Image from "next/image";
import fastFoodGenericPicture from "../public/static/fastfood.jpg";

const Card = ({ name, address, photos }) => {
  return (
    <div className="flex flex-col m-2 h-48 w-64 bg-slate-700 justify-between border-2 border-black shadow-sm shadow-yellow-400/50 hover:scale-105 transition-all duration-300">
      <Image
        src={photos.length > 0 ? photos[0] : fastFoodGenericPicture}
        alt={`Photo of ${name}`}
        width={64}
        height={64}
        sizes="50vw"
        className="object-cover"
      />

      <h1 className="mt-2 text-center ">{name}</h1>
      <p className="text-center mb-2">
        Address: <span>{address}</span>
      </p>
    </div>
  );
};

const Testfs = () => {
  const [stores, setStores] = useState([]);
  const [latLong, setLatLong] = useState(
    "30.317341711033016,-81.65736726333698"
  );
  const [nearby, setNearby] = useState(false);
  const [loading, setLoading] = useState(false);

  //get location data from browser
  const getLocation = () => {
    setNearby(true);
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(
        "latLong is :" +
          position.coords.latitude +
          "," +
          position.coords.longitude
      );
      setLatLong(`${position.coords.latitude},${position.coords.longitude}`);
      console.log({ latLong });
    });
  };

  // const nearbyFetchFastFoodStores = async () => {
  //   const stores = await fetchFastFoodStores(latLong, "10");
  //   setStores(stores);
  // };

  useEffect(() => {
    //This should be moved to getStaticProps

    const onceAtStartupFetchFastFoodStores = async () => {
      setLoading(true);
      const stores = await fetchFastFoodStores(latLong, "5");
      setStores(stores);
      setLoading(false);
    };

    onceAtStartupFetchFastFoodStores();
  }, [latLong]);

  useEffect(() => {
    console.log({ stores });
  }, [stores]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center mt-10 text-2xl">
        {loading ? "Loading..." : "I Want Please"}
      </h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
        onClick={getLocation}
      >
        View FastFoods nearby
      </button>
      <h2 className="text-xl text-center">{`${
        nearby ? "Nearby" : "Jacksonville"
      } FastFood Stores`}</h2>
      {stores.map((store, idx) => {
        return (
          <Card
            key={idx}
            name={store.name}
            address={store.location.address}
            photos={store.photos}
          />
        );
      })}
    </div>
  );
};

export default Testfs;
