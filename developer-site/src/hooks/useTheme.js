import { useDispatch, useSelector } from "react-redux";
import { themeToggler } from "@/features";

export const useTheme = () => {
  const dispatch = useDispatch();

  const { theme } = useSelector((state) => state.app);

  const handleThemeToggler = () => {
    if (theme === "light") {
      dispatch(themeToggler("dark"));
      sessionStorage.setItem("banhcafedevtheme", JSON.stringify("dark"));
    } else {
      dispatch(themeToggler("light"));
      sessionStorage.setItem("banhcafedevtheme", JSON.stringify("light"));
    }
  };

  return {
    theme,
    handleThemeToggler,
  };
};
