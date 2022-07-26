import Link from "next/link";
import { useRouter } from "next/router";
// import useSWR from "swr";

const FastfoodStore = () => {
  const router = useRouter();
  const id = router.query.id;
  return (
    <div className="text-center text-xl dark:text-white">
      <h1>
        Fastfood store id is: <span className="text-blue-700">{id}</span>
      </h1>
      <Link href="/">Home</Link>
    </div>
  );
};

export default FastfoodStore;
