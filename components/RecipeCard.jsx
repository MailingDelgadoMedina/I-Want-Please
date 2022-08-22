import Image from "next/image";
import Link from "next/link";

const RecipeCard = ({ recipe }) => {
  return (
    <Link href={`/recipe/${recipe.id}`}>
      <div className="flex flex-col justify-between bg-gray-200 dark:bg-gray-700 p-2 m-2 w-64 h-80 hover:cursor-pointer dark:text-gray-200 hover:scale-105 transition-all duration-300 overflow-hidden">
        <h1 className="mt-1 mb-3 text-md text-center">{recipe.title}</h1>
        <Image
          alt="food picture"
          src={recipe.image}
          width={500}
          height={500}
          layout="responsive"
          className="object-cover rounded-md"
        />
      </div>
    </Link>
  );
};

export default RecipeCard;
