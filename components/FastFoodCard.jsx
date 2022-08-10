import Image from "next/image";
import Link from "next/link";
import fastFoodGenericPicture from "../public/static/fastfood.jpg";

const FastFoodCard = ({ store }) => {
  const storeLocation = `${
    store.location.formatted_address.length > 0
      ? store.location.formatted_address + ", "
      : ""
  }${store.location.country}`;
  return (
    <Link href={`/fastfood-store/${store.fsq_id}`}>
      <div className="hover:cursor-pointer overflow-hidden p-2 flex flex-col m-2 h-48 w-64 bg-gray-200 dark:bg-slate-700 justify-between border-2 border-gray-400 dark:border-black shadow-sm shadow-gray-400/50 hover:scale-105 transition-all duration-300">
        <div className="h-full w-full text-center">
          <Image
            src={
              store.photos.length > 0 ? store.photos[0] : fastFoodGenericPicture
            }
            alt={`Photo of ${store.name}`}
            layout="responsive"
            width={200}
            height={90}
            sizes="50vw"
            className="object-cover"
          />
        </div>

        <h1 className="mt-2 text-center ">{store.name}</h1>
        <p className="text-center mb-2">
          Address: <span>{storeLocation}</span>
        </p>
      </div>
    </Link>
  );
};

export default FastFoodCard;
