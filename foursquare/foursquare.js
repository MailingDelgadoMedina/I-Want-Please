const options = {
  headers: {
    Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY,
  },
};

//URL for getting the stores near a location
const getUrlForFastFoodStores = (latLong, query, limit) => {
  return `https://api.foursquare.com/v3/places/nearby?ll=${latLong}&query=${query}&v=20220203&limit=${limit}`;
};

//URL for getting the photos of a specific location
const getUrlForFastFoodPhoto = (fsq_id = "4cf53d2b99c6236ab7054a67") => {
  return `https://api.foursquare.com/v3/places/${fsq_id}/photos`;
};

//Query for getting the photos of a location and returning an array of photo links
const fetchFastFoodPhoto = async (fsq_id = "4cf53d2b99c6236ab7054a67") => {
  try {
    const response = await fetch(getUrlForFastFoodPhoto(fsq_id), options);

    const data = await response.json(); //fetched photos

    if (data.length > 0) {
      const arrayOfPhotos = data.map((photo) => {
        return photo.prefix + "original" + photo.suffix;
      });

      return arrayOfPhotos;
    } else {
      return [];
    }
  } catch (error) {
    if (!process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY) {
      console.error("Can't get access to api key");
    }
    console.log("Something went wrong fetching fast food photos", error);
    return [];
  }
};

//Query for fetching one store by id and get the photos of that store
const fetchOneFastFoodStore = async (fsq_id = "4ddf7c1ae4cde756db33f4e3") => {
  try {
    //Getting info about the store
    const response = await fetch(
      `https://api.foursquare.com/v3/places/${fsq_id}`,
      options
    );
    const data = await response.json(); //fetched store with NO photos

    //Getting photos of the store
    const storePhoto = await fetchFastFoodPhoto(fsq_id);
    const newObject = { ...data, photos: storePhoto };

    return newObject; //fetched store with photos
  } catch (error) {
    if (!process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY) {
      console.error("Can't get access to api key");
    }
    console.log("Something went wrong fetching fast food data", error);
    return [];
  }
};

//THE QUERY for getting the stores near a location and for every store make another query for photos.
const fetchFastFoodStores = async (
  latLong = "44.435510050459264,26.102560366909422",
  limit = "6"
) => {
  try {
    const response = await fetch(
      getUrlForFastFoodStores(latLong, "fast food", limit),
      options
    );

    const data = await response.json(); //fetched stores withouth photos

    const promises = data.results.map(async (store, idx) => {
      const storePhoto = await fetchFastFoodPhoto(store.fsq_id);
      return { ...store, photos: storePhoto };
    });
    const storesWithPhotos = Promise.all(promises).then((results) => {
      results;
      return results;
    });

    return storesWithPhotos; //fetched stores with photos
  } catch (error) {
    if (!process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY) {
      console.error("Can't get access to api key");
    }
    console.log("Something went wrong fetching fast food data", error);
    return [];
  }
};

export { fetchFastFoodStores, fetchOneFastFoodStore };
