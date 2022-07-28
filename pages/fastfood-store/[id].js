import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import fastFoodGenericPicture from "../../public/static/fastfood.jpg";

// Import Swiper React components & styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
// import useSWR from "swr";

import { initialStores } from "../../foursquare/localData";
import { fetchFastFoodStores } from "../../foursquare/foursquare";

export async function getStaticProps(staticProps) {
  const params = staticProps.params;

  const storesByLocation = await fetchFastFoodStores();
  const fastfoodStore = storesByLocation.find(
    (store) => store.fsq_id === params.id
  );
  const fastfoodStoreInitialData = initialStores.find(
    (store) => store.fsq_id === params.id
  );
  // console.log({ params });
  return {
    props: {
      fastfoodStore: fastfoodStore ? fastfoodStore : fastfoodStoreInitialData,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: initialStores.map((store) => ({
      params: { id: store.fsq_id },
    })),
    fallback: true,
  };
}

const FastfoodStore = (props) => {
  const selectedStore = useSelector((store) => store.fastfood.selectedStore);
  const router = useRouter();
  const id = router.query.id;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  //////// Check if the page is pre-rendered. If it's not, maybe I should render the page ////////
  if (Object.keys(props.fastfoodStore).length === 0) {
    return <div>No data to LOAD. Loading and loading...</div>;
  }

  return (
    <div className="bg-red-500">
      <div className="w-96 h-72 flex justify-center items-center">
        {props.fastfoodStore.photos.length > 0 ? (
          <Swiper
            className="bg-gray-500 h-full w-full"
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
          >
            {props.fastfoodStore.photos.map((photo, idx) => (
              <SwiperSlide key={idx}>
                <Image
                  priority
                  alt="fast-food store"
                  src={photo}
                  layout="responsive"
                  width={400}
                  height={400}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Swiper
            className="bg-gray-500 h-full w-full"
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
          >
            <SwiperSlide>
              <Image
                alt="fast-food store"
                src={fastFoodGenericPicture}
                layout="responsive"
                width={400}
                height={400}
              />
            </SwiperSlide>
          </Swiper>
        )}
      </div>
      <h1 className="text-3xl underline underline-offset-8 pb-4">
        {props.fastfoodStore.name}
      </h1>

      <h2 className="text-2xl">
        Categories:{" "}
        <span>
          {props.fastfoodStore.categories.map((category, idx) => {
            return (
              category.name +
              (idx < props.fastfoodStore.categories.length - 1 ? ", " : "")
            );
          })}
        </span>
      </h2>

      <h3 className="text-xl ">
        Address:{" "}
        <span>
          {props.fastfoodStore.location.formatted_address +
            ", " +
            props.fastfoodStore.location.country}
        </span>
      </h3>
    </div>
  );
};

export default FastfoodStore;
