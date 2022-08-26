import Link from "next/link";
import { useRouter } from "next/router";
import { fetchRecipeDetails } from "../../lib/spoonacular";
// import useSWR from "swr";
import parse from "html-react-parser";
import { Children } from "react";
import Image from "next/image";
import Tooltip from "../../components/Tooltip";
import TalkButton from "../../components/TalkButton";

export async function getStaticProps(staticProps) {
  // Fetch recipe store data from spoonacular api
  const fetchRecipeById = await fetchRecipeDetails(staticProps.params.id);

  // Check if the store exists in the database
  //   if (findFastfoodStoreById) {
  //   const docRef = doc(db, "fastfoodStores", staticProps.params.id);
  //   const docSnap = await getDoc(docRef);

  //   if (docSnap.exists()) {
  //     // console.log("The fastfood store exists in the database");
  //   } else {
  //     try {
  //       const createdAt = new Date();
  //       await setDoc(docRef, {
  //         votes: 0,
  //         createdAt: createdAt.toISOString(),
  //       });
  //     } catch (error) {
  //       console.log("Error creating user.", error);
  //     }
  //   }
  // }

  return {
    props: {
      recipe: fetchRecipeById ? fetchRecipeById : {},
    },
  };
}

export async function getStaticPaths() {
  // const storesByLocation = await fetchFastFoodStores();
  // return {
  //   paths: storesByLocation.map((store) => ({
  //     params: { id: store.fsq_id },
  //   })),
  //   fallback: true,
  // };
  return {
    paths: [{ params: { id: "749013" } }, { params: { id: "602638" } }],
    fallback: true,
  };
}

const RecipeDetails = (initialProps) => {
  const router = useRouter();
  const id = router.query.id;
  const { title, image, summary, instructions } = initialProps.recipe || [];

  if (router.isFallback) {
    return <div className="text-center text-3xl">Loading...</div>;
  }
  return (
    <div className="py-8 lg:px-4 mx-auto bg-gray-200 dark:bg-gray-700 container flex flex-col place-items-center">
      <Link href="/food">
        <a className="w-full ml-8 my-2 text-4xl text-left cursor-pointer">
          ← Go Back
        </a>
      </Link>

      <h1 className="text-3xl pb-4 text-sky-800 dark:text-sky-200">{title}</h1>
      <div className="lg:p-8 w-11/12 flex flex-col lg:w-9/12 lg:max-h-[700px] overflow-hidden justify-center">
        <Image
          src={image}
          alt={`Photo of ${title}`}
          layout="intrinsic"
          width={500}
          height={500}
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <hr className="mt-2 w-full" />

      <div className="text-center text-2xl dark:text-white pt-4">
        <h3>
          Total time to make:{" "}
          <span className="dark:text-sky-300">
            {initialProps.recipe.preparationMinutes +
              initialProps.recipe.cookingMinutes}
          </span>
        </h3>
        <p className="text-sm">
          {" "}
          Minutes to prepare:
          <span className="dark:text-sky-300">
            {initialProps.recipe.preparationMinutes}
          </span>{" "}
        </p>
        <p className="text-sm">
          {" "}
          Minutes to cook:
          <span className="dark:text-sky-300">
            {initialProps.recipe.cookingMinutes}
          </span>{" "}
        </p>

        <p className="mt-4">Ingredients:</p>
        {initialProps.recipe.extendedIngredients.map((ingredient) => (
          <Tooltip key={ingredient.id} message={ingredient.original}>
            <p className="text-sm" key={ingredient.id}>
              {ingredient.name}: {ingredient.amount} {ingredient.unit}
              <br />
            </p>
          </Tooltip>
        ))}

        <div className="p-4">
          <TalkButton
            text={`Total time to make is ${
              initialProps.recipe.preparationMinutes +
              initialProps.recipe.cookingMinutes
            }
                The ingredients are: ${initialProps.recipe.extendedIngredients.map(
                  (ingredient) =>
                    `${ingredient.name} ${ingredient.amount} ${ingredient.unit}`
                )}`}
          />
        </div>
      </div>

      <a
        className="mt-8 mx-2"
        href={initialProps.recipe.sourceUrl}
        target="_blank"
        rel="noreferrer"
      >
        {initialProps.recipe.sourceUrl}
      </a>

      {
        // Must detect client window to parse the html string, otherwise it will throw an error
        typeof window !== "undefined" ? (
          <>
            <div className="p-4 max-w-7xl flex flex-col items-center">
              {
                //Parse the summary of the recipe
                summary && (
                  <div className="p-2">
                    <p className="text-lg p-2 text-sky-900 dark:text-sky-200">
                      Summary
                    </p>
                    <hr className="pb-1 mx-2" />

                    <div className="mx-2">
                      {Children.toArray(
                        parse(summary, {
                          // Remove href (all) attributes from <a/> tag
                          replace: (domNode) => {
                            if (domNode.attribs && domNode.name === "a") {
                              return (domNode.attribs = "");
                            }
                          },
                        })
                      )}
                    </div>
                    <div className="w-full p-2 mt-4">
                      <TalkButton
                        text={summary
                          .replaceAll(/(<([^>]+)>)/gi, "")
                          .toString()}
                      />
                    </div>
                  </div>
                )
              }
            </div>
            {instructions && (
              <div className="p-4 max-w-7xl flex flex-col items-center">
                <div className="p-2">
                  <p className="text-lg p-2 text-sky-900 dark:text-sky-200">
                    Instructions
                  </p>
                  <hr className="pb-1 mx-2" />

                  <div className="mx-2">
                    {Children.toArray(parse(instructions))}
                  </div>
                </div>
                <div className="w-full p-4">
                  <TalkButton
                    text={instructions
                      .replaceAll(/(<([^>]+)>)/gi, "")
                      .toString()}
                  />
                </div>
              </div>
            )}
          </>
        ) : null
      }
    </div>
  );
};

export default RecipeDetails;
