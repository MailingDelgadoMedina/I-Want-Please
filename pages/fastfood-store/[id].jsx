import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import fastFoodGenericPicture from "../../public/static/fastfood.jpg";

import useSWR from "swr";

// Import Swiper React components & styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
// import useSWR from "swr";

import { initialStores } from "../../foursquare/localData";
import {
  fetchFastFoodStores,
  fetchOneFastFoodStore,
} from "../../foursquare/foursquare";
import { useEffect, useState } from "react";

export async function getStaticProps(staticProps) {
  console.log("staticProps", staticProps);
  const params = staticProps.params;

  const storesByLocation = await fetchFastFoodStores();
  // console.log("storesByLocation", storesByLocation);
  const findFastfoodStoreById = storesByLocation.find(
    (store) => store.fsq_id === params.id
  );
  console.log("findFastfoodStoreById", findFastfoodStoreById);

  return {
    props: {
      fastfoodStore: findFastfoodStoreById ? findFastfoodStoreById : {},
    },
  };
}

export async function getStaticPaths() {
  const storesByLocation = await fetchFastFoodStores();
  return {
    paths: storesByLocation.map((store) => ({
      params: { id: store.fsq_id },
    })),
    fallback: true,
  };
}

const FastfoodStore = (initialProps) => {
  // initialProps are from getStaticProps
  console.log("initialProps=", initialProps);
  const router = useRouter();
  const id = router.query.id;
  const [fastfoodStore, setFastfoodStore] = useState(
    initialProps.fastfoodStore || {}
  );
  const selectedStore = useSelector((store) => store.fastfood.selectedStore);
  const fastfoodStores = useSelector((store) => store.fastfood.fetchedStores);

  useEffect(() => {
    console.log("Looks like I am running...");
    // if (Object.keys(initialProps.fastfoodStore).length === 0) {
    //   if (fastfoodStores.length > 0) {
    //     const findFastfoodStoreById = fastfoodStores.find(
    //       (store) => store.fsq_id === params.id
    //     );
    //     setFastfoodStore(findFastfoodStoreById);
    //   }
    // } else {
    //   console.log("SSG");
    // }
  }, []);

  const fetcher = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  // const { data, error } = useSWR(
  //   `
  //   /api/getFastFoodStoreById?id=${id}
  // `,
  //   fetcher
  // );
  // useEffect(() => {
  //   if (data && data.length > 0) {
  //     setFastfoodStore(data);
  //     console.log(() => "Dataaaa maaa:", data);
  //   }
  // }, [data]);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  //////// Check if the page is pre-rendered. If it's not, maybe I should render the page ////////
  // if (Object.keys(props.fastfoodStore).length === 0) {
  //   return <div>No data to LOAD. Loading and loading...</div>;
  // }

  return (
    <div className="text-center text-5xl">
      <a
        onClick={() => {
          router.back();
        }}
        className="text-5xl text-center cursor-pointer"
      >
        Go back!
      </a>
      <br />
      Is working!
      <br />
      <span className="text-3xl">ID is: {id}</span>
    </div>
    // <div className="bg-red-500">
    //   <div className="w-96 h-72 flex justify-center items-center">
    //     {fastfoodStore?.photos?.length > 0 ? (
    //       <Swiper
    //         className="bg-gray-500 h-full w-full"
    //         modules={[Navigation]}
    //         spaceBetween={50}
    //         slidesPerView={1}
    //         navigation
    //       >
    //         {fastfoodStore.photos.map((photo, idx) => (
    //           <SwiperSlide key={idx}>
    //             <Image
    //               priority
    //               alt="fast-food store"
    //               src={photo}
    //               layout="responsive"
    //               width={400}
    //               height={400}
    //             />
    //           </SwiperSlide>
    //         ))}
    //       </Swiper>
    //     ) : (
    //       <Swiper
    //         className="bg-gray-500 h-full w-full"
    //         modules={[Navigation]}
    //         spaceBetween={50}
    //         slidesPerView={1}
    //         navigation
    //       >
    //         <SwiperSlide>
    //           <Image
    //             alt="fast-food store"
    //             src={fastFoodGenericPicture}
    //             layout="responsive"
    //             width={400}
    //             height={400}
    //           />
    //         </SwiperSlide>
    //       </Swiper>
    //     )}
    //   </div>
    //   <h1 className="text-3xl underline underline-offset-8 pb-4">
    //     {fastfoodStore.name}
    //   </h1>

    //   <h2 className="text-2xl">
    //     Categories:{" "}
    //     <span>
    //       {fastfoodStore.categories.map((category, idx) => {
    //         return (
    //           category.name +
    //           (idx < fastfoodStore.categories.length - 1 ? ", " : "")
    //         );
    //       })}
    //     </span>
    //   </h2>

    //   <h3 className="text-xl ">
    //     Address:{" "}
    //     <span>
    //       {fastfoodStore.location.formatted_address +
    //         ", " +
    //         fastfoodStore.location.country}
    //     </span>
    //   </h3>
    // </div>
  );
};

export default FastfoodStore;
