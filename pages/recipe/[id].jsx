import Link from "next/link";
import { useRouter } from "next/router";
import { fetchRecipeDetails } from "../../lib/spoonacular";
// import useSWR from "swr";
import parse from "html-react-parser";
import { Children } from "react";

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

  console.log("Ce lipseste???!?!??!?!?!??!?!", initialProps.recipe);

  if (router.isFallback) {
    return <div className="text-center text-3xl">Loading...</div>;
  }
  return (
    <div className="text-center">
      <Link href="/food">
        <a className="text-5xl text-center cursor-pointer">← Go Back</a>
      </Link>

      <h1 className="text-5xl">{title}</h1>
      <div className="p-4 flex justify-center">
        <img src={image} alt={title} />
      </div>

      <div className="text-center text-2xl dark:text-white">
        Recipe id is: <span className="text-blue-700">{id}</span>
      </div>

      {
        // Must detect client window to parse the html string, otherwise it will throw an error
        typeof window !== "undefined" ? (
          <>
            <div className="p-4">
              {
                //Parse the summary of the recipe
                summary &&
                  Children.toArray(
                    parse(summary, {
                      // Remove href (all) attributes from <a/> tag
                      replace: (domNode) => {
                        if (domNode.attribs && domNode.name === "a") {
                          return (domNode.attribs = "");
                        }
                      },
                    })
                  )
              }
            </div>
            <div className="p-4">
              {instructions && Children.toArray(parse(instructions))}
            </div>
          </>
        ) : null
      }
    </div>
  );
};

export default RecipeDetails;
