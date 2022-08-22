import Image from "next/image";
import Link from "next/link";

const RecipeCard = ({ recipe }) => {
  return (
    <Link href={`/recipe/${recipe.id}`}>
      <div className="bg-gray-200 dark:bg-gray-700 p-2 m-2 w-56 hover:cursor-pointer dark:text-gray-200 hover:scale-105 transition-all duration-300">
        <Image
          alt="food picture"
          src={recipe.image}
          width={300}
          height={300}
          layout="responsive"
          className="object-cover rounded-md"
        />
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <h3 className="text-xl">{recipe.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
