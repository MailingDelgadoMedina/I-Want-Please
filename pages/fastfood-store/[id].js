import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { useSelector } from "react-redux";

// Import Swiper React components & styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
// import useSWR from "swr";

const FastfoodStore = () => {
  const selectedStore = useSelector((store) => store.fastfood.value);
  const router = useRouter();
  const id = router.query.id;
  console.log("Ce-a ajuns aici? ", selectedStore);
  return (
    <div className="bg-red-500">
      <div className="w-96 h-72 flex justify-center items-center">
        {selectedStore.photos.length > 0 ? (
          <Swiper
            className="bg-gray-500 h-full w-full"
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
          >
            {selectedStore.photos.map((photo, idx) => (
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
  );
};

export default FastfoodStore;
