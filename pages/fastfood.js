// import { useEffect, useState } from "react";
// import {
//   fetchFastFoodStores,
//   getFastFoodPhoto,
// } from "../foursquare/foursquare";

// import Image from "next/image";

// import defaultImage from "../public/static/fastfood.jpg";

// const Card = ({ name, fsq_id, imgUrl, location }) => {
//   if (imgUrl) {
//     if (imgUrl.includes("undefined")) {
//       imgUrl = defaultImage;
//     }
//   }
//   return (
//     <div className=" mb-4 max-w-xs ml-2 overflow-hidden bg-white rounded-md shadow-md shadow-gray-800 dark:bg-gray-800 sm:transition-all sm:duration-300 sm:hover:scale-105">
//       <Image
//         src={imgUrl?imgUrl : defaultImage}
//         alt={name}
//         width={300}
//         height={200}
//       />

//       <div className="py-5 text-center">
//         <a href="#" className="text-xl block text-gray-800 dark:text-white">
//           {name}
//         </a>
//         <span className="text-sm text-gray-700 dark:text-gray-200">
//           {location.address}
//         </span>
//       </div>
//     </div>
//   );
// };

// const FastFood = () => {
//   const [fastFoods, setFastFoods] = useState([]);
//   const [fastFoodsWithPicture, setFastFoodsWithPicture] = useState([]);

//   useEffect(() => {
//     if (fastFoods.length === 0) {
//       fetchFastFoodStores().then((fastFoods) => {
//         setFastFoods(fastFoods);
//       });
//     }
//   }),
//     [];

//   useEffect(() => {
//     console.log({ fastFoodsWithPicture });
//   }, [fastFoodsWithPicture]);

//   useEffect(() => {
//     setFastFoodsWithPicture(fastFoods);
//     fastFoods?.map((fastFood) => {
//       fetch(getFastFoodPhoto(fastFood.fsq_id), {
//         headers: {
//           Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY,
//         },
//       }).then((response) => {
//         response.json().then((data) => {
//           setFastFoodsWithPicture([
//             ...fastFoodsWithPicture,
//             {
//               ...fastFood,
//               imgUrl: data[0]?.prefix + "200x200" + data[0]?.suffix,
//             },
//           ]);
//         });
//       });
//     });

//     // console.log({ fastFoodsWithPicture });
//   }, [fastFoods]);

//   return (
//     <div>
//       <h1 className="text-center mt-2">List of FastFood restaurants nearby</h1>
//       <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-4 mx-4 items-center">
//         {fastFoodsWithPicture ? (
//           fastFoods.map((venue, idx) => {
//             return (
//               <Card
//                 key={idx}
//                 name={venue.name}
//                 location={venue.location}
//                 fsq_id={venue.fsq_id}
//                 imgUrl={fastFoodsWithPicture[idx]?.imgUrl}
//               />
//             );
//           })
//         ) : (
//           <div>Loading...</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FastFood;
