import Image from "next/image";
import Link from "next/link";
import fastFoodGenericPicture from "../public/static/pngwing.com.png";

const FastFoodCard = ({ store }) => {

  //Modify location so it will show formatted_addres, country
  const storeLocation = `${
    store.location.formatted_address.length > 0
      ? store.location.formatted_address + ", "
      : ""
  }${store.location.country}`;
  return (
    <Link href={`/fastfood-store/${store.fsq_id}`}>
      <div className="hover:cursor-pointer overflow-hidden p-2 flex flex-col m-2 h-96 w-64 bg-gray-200 dark:bg-slate-700 justify-between border-2 border-gray-400 dark:border-black shadow-sm shadow-gray-400/50 hover:scale-105 transition-all duration-300">
        <h1 className="h-8 mt-1 mb-3 text-center overflow-clip dark:text-sky-100 text-sky-900">
          {store.name}
        </h1>

        <div className="h-full w-full text-center">
          <hr className="mb-1 border-slate-600 dark:border-gray-400" />
          <Image
            src={
              store.photos.length > 0 ? store.photos[0] : fastFoodGenericPicture
            }
            alt={`Photo of ${store.name}`}
            layout="responsive"
            width={500}
            height={500}
            className={`object-cover rounded-md ${
              store.photos.length === 0 ? "dark:opacity-50" : ""
            }`}
          />
          <hr className="mt-1 border-slate-600 dark:border-gray-400" />
        </div>

        <p className="text-center text-sm mb-2 place-self-center">
          Address:{" "}
          <span className="text-sky-800 dark:text-sky-200">
            {storeLocation}
          </span>
        </p>
      </div>
    </Link>
  );
};

export default FastFoodCard;
