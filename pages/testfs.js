import { useEffect, useState } from "react";
import { fetchFastFoodStores } from "../foursquare/foursquare";
import Image from "next/image";
import fastFoodGenericPicture from "../public/static/fastfood.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Details = ({ store }) => {
  // console.log("I have clicked on fsq_id = ", store.fsq_id);
  console.log("I have clicked on store = ", store);
};

const handleClick = (store) => {
  console.log("I have clicked on a card with fsq_id = ", store);
};

const Card = ({ store, clickToOpenModal }) => {
  return (
    <div className="p-2 flex flex-col m-2 h-48 w-64 bg-slate-700 justify-between border-2 border-black shadow-sm shadow-yellow-400/50 hover:scale-105 transition-all duration-300">
      <div
        className="h-full w-full text-center hover:cursor-pointer"
        onClick={(e) => {
          clickToOpenModal(store);
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
        Address: <span>{store.address}</span>
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
  const [modal, setModal] = useState(false);
  const [selectedStore, setSelectedStore] = useState({
    fsq_id: "4f43ce78e4b0c2ab9b37e2f1",
    categories: [
      {
        id: 13072,
        name: "Asian Restaurant",
        icon: {
          prefix: "https://ss3.4sqi.net/img/categories_v2/food/asian_",
          suffix: ".png",
        },
      },
      {
        id: 13094,
        name: "Burmese Restaurant",
        icon: {
          prefix: "https://ss3.4sqi.net/img/categories_v2/food/asian_",
          suffix: ".png",
        },
      },
      {
        id: 13145,
        name: "Fast Food Restaurant",
        icon: {
          prefix: "https://ss3.4sqi.net/img/categories_v2/food/fastfood_",
          suffix: ".png",
        },
      },
    ],
    chains: [],
    distance: 7622,
    geocodes: {
      main: {
        latitude: 30.288381,
        longitude: -81.585339,
      },
      roof: {
        latitude: 30.288381,
        longitude: -81.585339,
      },
    },
    link: "/v3/places/4f43ce78e4b0c2ab9b37e2f1",
    location: {
      address: "Hogan Rd",
      address_extended: "Ste 7",
      census_block: "120310159241004",
      country: "US",
      cross_street: "",
      dma: "Jacksonville",
      formatted_address: "Hogan Rd, Jacksonville, FL 32216",
      locality: "Jacksonville",
      neighborhood: ["Killarney Shores"],
      postcode: "32216",
      region: "FL",
    },
    name: "Maw's Sushi & Fast Food",
    related_places: {},
    timezone: "America/New_York",
    photos: [
      "https://fastly.4sqi.net/img/general/original/vvB5ruuwouSwSfzojpi3bPw-Bo_yyvjWEO7IpyVVGhs.jpg",
    ],
  });

  const clickToOpenModal = (store) => {
    setSelectedStore(store);
    setModal(true);
    console.log("clickToOpenModal store is: ", store);
  };

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

  useEffect(() => {
    console.log({ modal });
  }),
    [modal];

  return (
    <div className="relative flex flex-col items-center">
      {true && (
        // selectedStore.length > 0 && modal &&
        <div className="bg-red-500/70 fixed top-0 right-0 left-0 z-50 w-full flex flex-col justify-center items-center overflow-y-auto overflow-x-hidden md:inset-0 h-modal md:h-full">
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>

          <h1 className="text-3xl underline underline-offset-8 pb-4">
            {selectedStore.name}
          </h1>

          <h2 className="text-2xl">
            Categories:{" "}
            <span>
              {selectedStore.categories.map((category, idx) => {
                return (
                  category.name +
                  (idx < selectedStore.categories.length - 1 ? ", " : "")
                );
              })}
            </span>
          </h2>

          <h3 className="text-xl ">
            Address:{" "}
            <span>
              {selectedStore.location.formatted_address +
                ", " +
                selectedStore.location.country}
            </span>
          </h3>
        </div>
      )}
      <h1 className="text-center mt-10 text-2xl">I Want Please</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4 w-60"
        onClick={getLocation}
      >
        {loading ? "Loading..." : "View FastFoods nearby"}
      </button>
      <h2 className="text-xl text-center">{`${
        nearby ? "Nearby" : "Jacksonville"
      } FastFood Stores`}</h2>
      {stores.map((store, idx) => {
        return (
          <Card key={idx} store={store} clickToOpenModal={clickToOpenModal} />
        );
      })}
    </div>
  );
};

export default Testfs;
