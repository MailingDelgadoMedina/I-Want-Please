import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../redux/features/theme/themeSlice";

export const ToggleTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        theme === "dark" ? setTheme("light") : setTheme("dark");
      }}
      className="lg:w-20 lg:mr-12 cursor-pointer px-4 py-4 lg:px-2 lg:py-2 text-md text-gray-800 rounded-md dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100  lg:mx-2"
    >
<<<<<<< HEAD
      {isDark ? "🌞" : "🌙"}
=======
      {theme === "dark" ? "🌙" : "🌞"}
>>>>>>> f63f5f247c87595bfb2f7741f2e4325989ec404e
    </button>
  );
};
