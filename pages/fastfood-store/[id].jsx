import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import fastFoodGenericPicture from "../../public/static/fastfood.jpg";
import Tooltip from "../../components/Tooltip";

import useSWR from "swr";

// Import Swiper React components & styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import {
  fetchFastFoodStores,
  fetchOneFastFoodStore,
} from "../../lib/foursquare";
import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

import {
  setSelectedStore,
  setSelectedStoreVotes,
} from "../../redux/features/fastfood/fastfoodSlice";

export async function getStaticProps(staticProps) {
  // Fetch fastfood store data from Foursquare
  const findFastfoodStoreById = await fetchOneFastFoodStore(
    staticProps.params.id
  );

  // Check if the store exists in the database
  if (findFastfoodStoreById) {
    const docRef = doc(db, "fastfoodStores", staticProps.params.id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("The fastfood store exists in the database");
    } else {
      try {
        const createdAt = new Date();
        await setDoc(docRef, {
          votes: 0,
          createdAt: createdAt.toISOString(),
        });
      } catch (error) {
        console.log("Error creating user.", error);
      }
    }
  }

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
  const router = useRouter();
  const id = router.query.id;
  const dispatch = useDispatch();
  const [fastfoodStore, setFastfoodStore] = useState(
    initialProps.fastfoodStore || {}
  );
  const selectedStore = useSelector(
    (store) => store.fastfood.selectedStore || {}
  );
  const selectedStoreVotes = useSelector(
    (store) => store.fastfood.selectedStoreVotes || 0
  );
  const fastfoodStores = useSelector(
    (store) => store.fastfood.fetchedStores || {}
  );

  const handleUpvote = async (id) => {
    await fetch(`/api/upvoteFastFoodStore?id=${id}`);
  };

  // fetcher function for useSWR
  const fetcher = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const [votes, setVotes] = useState(0);

  const { data, error } = useSWR(
    id ? `/api/getFastFoodStoreVotes?id=${id}` : null,
    fetcher
  );

  useEffect(() => {
    console.log("fastfoodStore is....: ", fastfoodStore);
    if (id) {
      // Check if store is in redux state
      if (selectedStore && selectedStore.fsq_id === id) {
        setFastfoodStore(selectedStore);
      } else {
        // Store not found in the redux state, fetch it from the api, set it in the redux state and set votes to 0
        fetch(`/api/getFastFoodStoreById?id=${id}`).then((res) => {
          res.json().then((data) => {
            dispatch(setSelectedStore(data));
            setFastfoodStore(data);
            dispatch(setSelectedStoreVotes(0));
          });
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, fastfoodStores]);

  useEffect(() => {
    // If there are votes fetched from the api, set them in the redux state
    if (data && data !== 0) {
      console.log("Votes for this fastfood store are: ", data);
      setVotes(data);
      if (selectedStoreVotes[id] !== data) {
        console.log("setSelectedStoreVotes is:  ", { [id]: data });
        dispatch(setSelectedStoreVotes({ [id]: data }));
      }
    } else if (
      selectedStoreVotes &&
      Object.keys(selectedStoreVotes)[0] === id
    ) {
      console.log("I have found votes in redux state");
      setVotes(selectedStoreVotes[id]);
    } else {
      console.log("No votes found");
      // If there are no votes fetched from the api, set the votes in the redux state to 0

      if (selectedStoreVotes[id] !== 0) {
        dispatch(setSelectedStoreVotes({ [id]: 0 }));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, selectedStoreVotes, id]);

  const [photos, setPhotos] = useState([fastFoodGenericPicture]);

  useEffect(() => {
    if (fastfoodStore) {
      // if (Object.keys(fastfoodStore).find("photos")) {
      // }
      setPhotos(fastfoodStore.photos);
    }
  }, [fastfoodStore]);

  //
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1024);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1280);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  if (router.isFallback) {
    return <div className="text-center text-3xl">Loading...</div>;
  }

  return (
    <div className="py-8 lg:px-4 mx-auto bg-gray-200 dark:bg-gray-700 container flex flex-col place-items-center">
      <Link href="/testfs">
        <a className="w-full ml-8 my-2 text-4xl text-left cursor-pointer">
          ← Go Back
        </a>
      </Link>
      <h1 className="text-3xl pb-4 text-sky-800 dark:text-sky-200">
        {fastfoodStore.name}
      </h1>
      <div className="lg:p-8 w-11/12 flex lg:w-9/12 lg:max-h-[700px] overflow-hidden">
        {fastfoodStore && fastfoodStore.photos?.length > 0 ? (
          <Swiper
            className=""
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={isDesktop ? "2" : "1"}
            navigation
          >
            {fastfoodStore.photos.map((photo, idx) => (
              <SwiperSlide key={idx}>
                <Image
                  priority
                  alt="fast-food store"
                  src={photo}
                  as="img"
                  layout="intrinsic"
                  width={900}
                  height={900}
                  sizes="50vw"
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
                priority
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

      <div className="w-full py-2 px-8 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-3xl">
            ⭐ <span className="text-2xl mr-6">{votes}</span>
          </h1>
          <Tooltip message={"Vote"}>
            <button
              className="text-2xl"
              onClick={(e) => {
                handleUpvote(id);
                Router.reload(window.location.pathname);
              }}
            >
              👍
            </button>
          </Tooltip>
        </div>

        <h3 className="hidden xl:block text-xl p-4">
          Address:{" "}
          <span className="text-sky-700 dark:text-sky-400">
            {fastfoodStore.location?.formatted_address +
              ", " +
              fastfoodStore.location?.country}
          </span>
        </h3>

        <div className="text-2xl flex text-gray-700">
          {fastfoodStore.categories?.map((category, idx) => {
            return (
              <div className="relative" key={category.id}>
                <Tooltip message={category.name}>
                  <div className="flex flex-col items-center group">
                    <Image
                      src={`${category.icon.prefix}32${category.icon.suffix}`}
                      alt={category.name}
                      className="ml-2 bg-gray-700"
                      width={32}
                      height={32}
                    />
                  </div>
                </Tooltip>
              </div>
            );
          })}
        </div>
      </div>

      <hr className="hidden border w-full max-w-xl border-gray-700 dark:border-gray-200" />

      <h3 className="text-xl p-4 xl:hidden">
        Address:{" "}
        <span>
          {fastfoodStore.location?.formatted_address +
            ", " +
            fastfoodStore.location?.country}
        </span>
      </h3>
    </div>
  );
};

export default FastfoodStore;
