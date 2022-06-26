const getUrlForFastFoodStores = (latLong, query, limit) => {
  return `https://api.foursquare.com/v3/places/nearby?ll=${latLong}&query=${query}&v=20220203&limit=${limit}`;
};

export const getFastFoodPhoto = (fsq_id = "4cf53d2b99c6236ab7054a67") => {
  return `https://api.foursquare.com/v3/places/${fsq_id}/photos`;
};

export const fetchFastFoodStores = async (
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

    return (
      data.results?.map((venue, idx) => {
        return {
          ...venue,
          //   imgUrl:
          //     imageLink.prefix + "100x100" + imageLink.sufix,
        };
      }) || []
    );
  } catch (error) {
    if (!process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY) {
      console.error("Can't get access to api key");
    }
    console.log("Something went wrong fetching fast food data", error);
    return [];
  }
};
