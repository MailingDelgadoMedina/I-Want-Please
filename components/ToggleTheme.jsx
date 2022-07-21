import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../store/features/theme/themeSlice";
import { useDarkMode } from "../utils/userDarkMode";

export const ToggleTheme = () => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useDarkMode();
  const dispatch = useDispatch();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setIsDark(!isDark);
      }}
      className="lg:w-20 lg:mr-12 cursor-pointer px-4 py-4 lg:px-2 lg:py-2 text-md text-gray-800 rounded-md dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100  lg:mx-2"
    >
      {isDark ? "🌙" : "🌞"}
    </button>
  );
};
