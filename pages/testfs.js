import { useEffect, useState } from "react";
import { fetchFastFoodStores } from "../foursquare/foursquare";

const Card = ({ name, address, photosNumber }) => {
  return (
    <div className="flex flex-col m-2 h-48 w-64 bg-slate-500 justify-between">
      <h1 className="mt-2 text-center ">{name}</h1>
      <h3 className="text-center">No of photos: {photosNumber}</h3>
      <p className="text-center mb-2">
        Address: <span>{address}</span>
      </p>
    </div>
  );
};

const Testfs = () => {
  const [stores, setStores] = useState([]);

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
            photosNumber={store.photos.length}
          />
        );
      })}
    </div>
  );
};

export default Testfs;
