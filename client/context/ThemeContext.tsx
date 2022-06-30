import { useState, createContext, useContext, useEffect } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<[Theme, Function]>(["light", () => {}]);

const useThemeContext = () => {
  return useContext(ThemeContext);
};

const ThemeContextProvider: React.FC<{ children: any }> = ({ children }) => {
  let prefersDark: boolean | null = false;
  prefersDark =
    typeof window !== undefined ||
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [mode, setTheme] = useState<Theme>(prefersDark ? "dark" : "light");

  const [themeLoaded, setThemeLoaded] = useState(false);
  useEffect(() => {
    const localStorageTheme = localStorage.getItem("theme-mode") as Theme;
    if (localStorageTheme) {
      setTheme(localStorageTheme);
    }
    setThemeLoaded(true);
  }, [setThemeLoaded]);

  return (
    <ThemeContext.Provider value={[mode, setTheme]}>
      {themeLoaded && children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

const { Consumer, Provider } = ThemeContext;

export { Consumer, Provider, useThemeContext };
