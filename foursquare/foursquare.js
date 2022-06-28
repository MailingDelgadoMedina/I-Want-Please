//URL query for getting the stores near a location
const getUrlForFastFoodStores = (latLong, query, limit) => {
  return `https://api.foursquare.com/v3/places/nearby?ll=${latLong}&query=${query}&v=20220203&limit=${limit}`;
};

//URL query for getting the photos of a specific location
const getUrlForFastFoodPhoto = (fsq_id = "4cf53d2b99c6236ab7054a67") => {
  return `https://api.foursquare.com/v3/places/${fsq_id}/photos`;
};

//Query for getting the stores near a location
const fetchFastFoodStores = async (
  latLong = "43.65267326999575,-79.39545615725015",
  limit = "6"
) => {
  try {
    const response = await fetch(
      getUrlForFastFoodStores(latLong, "fast food", limit),
      {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY,
        },
      }
    );

    const data = await response.json();

    return data.results;
    //   data.results?.map((venue, idx) => {
    //     return {
    //       ...venue,
    //       //   imgUrl:
    //       //     imageLink.prefix + "100x100" + imageLink.sufix,
    //     };
    //   })
  } catch (error) {
    if (!process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY) {
      console.error("Can't get access to api key");
    }
    console.log("Something went wrong fetching fast food data", error);
    return [];
  }
};

//Query for getting the photos of a location and returning an array of photo links
const fetchFastFoodPhoto = async (fsq_id = "4cf53d2b99c6236ab7054a67") => {
  try {
    const response = await fetch(getUrlForFastFoodPhoto(fsq_id), {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY,
      },
    });

    const data = await response.json();
    console.log("FETCH PHOTO - data", data);

    if (data.length > 0) {
      const arrayOfPhotos = data.map((photo, idx) => {
        return photo.prefix + "original" + photo.suffix;
      });
      console.log("FETCH PHOTO - arrayOfPhotos", arrayOfPhotos);
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

export { getUrlForFastFoodPhoto, fetchFastFoodStores, fetchFastFoodPhoto };
