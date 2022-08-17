import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import fastFoodGenericPicture from "../../public/static/fastfood.jpg";

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
    console.log("Data la linia 110 este: ", data);
  }, []);

  useEffect(() => {
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
  }, [data, selectedStoreVotes, id]);

  const [photos, setPhotos] = useState([fastFoodGenericPicture]);

  useEffect(() => {
    if (fastfoodStore) {
      // if (Object.keys(fastfoodStore).find("photos")) {
      // }
      setPhotos(fastfoodStore.photos);
    }
  }, [fastfoodStore]);

  if (router.isFallback) {
    return <div className="text-center text-3xl">Loading...</div>;
  }

  return (
    <div className="bg-gray-700 flex flex-col items-center">
      <Link href="/testfs">
        <a className="text-5xl text-center cursor-pointer">← Go Back</a>
      </Link>
      <div className="w-96 h-72 flex justify-center items-center">
        {fastfoodStore && fastfoodStore.photos?.length > 0 ? (
          <Swiper
            className="bg-gray-500 h-full w-full"
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
          >
            {fastfoodStore.photos.map((photo, idx) => (
              <SwiperSlide key={idx}>
                <Image
                  priority
                  alt="fast-food store"
                  src={photo}
                  as="img"
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
      <h1 className="text-3xl underline underline-offset-8 pb-4">
        {fastfoodStore.name}
      </h1>

      <div className="flex">
        <h1 className="text-3xl">
          ⭐ <span className="text-2xl mr-10">{votes}</span>
        </h1>
        <button
          className="text-2xl"
          onClick={(e) => {
            handleUpvote(id);
            Router.reload(window.location.pathname);
          }}
        >
          Like!
        </button>
      </div>

      <h2 className="text-2xl">
        Categories:{" "}
        <span>
          {fastfoodStore.categories?.map((category, idx) => {
            return (
              category.name +
              (idx < fastfoodStore.categories.length - 1 ? ", " : "")
            );
          })}
        </span>
      </h2>

      <h3 className="text-xl ">
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
