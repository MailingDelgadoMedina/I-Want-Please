import { useRouter } from "next/router";
// import useSWR from "swr";

const FastfoodStore = () => {
  const router = useRouter();
  const id = router.query.id;
  return (
    <div className="text-center text-xl dark:text-white">
      Fastfood store id is: <span className="text-blue-700">{id}</span>
    </div>
  );
};

export default FastfoodStore;
