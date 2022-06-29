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
  const [latLong, setLatLong] = useState("44.4071008,26.1530244");

  //get location data from browser
  useEffect(() => {
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
  });

  useEffect(() => {
    const onceAtStartupFetchFastFoodStores = async () => {
      const stores = await fetchFastFoodStores();
      setStores(stores);
    };

    onceAtStartupFetchFastFoodStores();
  }, []);

  useEffect(() => {
    console.log({ stores });
  }, [stores]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center mt-10">Fetched FastFoods</h1>
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
