import { useState, createContext, useContext } from "react";

const ThemeContext = createContext<[string, Function]>(["light", () => {}]);

const useThemeContext = () => {
  return useContext(ThemeContext);
};

const ThemeContextProvider: React.FC<{ children: any }> = ({ children }) => {
  let prefersDark: boolean | null = false;
  let localStorageTheme: string | null = null;
  prefersDark =
    typeof window !== undefined ||
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  try {
    localStorageTheme = localStorage.getItem("theme-mode");
  } catch (e) {}

  const [mode, setTheme] = useState(
    localStorageTheme ? localStorageTheme : prefersDark ? "dark" : "light"
  );

  return (
    <ThemeContext.Provider value={[mode, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

const { Consumer, Provider } = ThemeContext;

export { Consumer, Provider, useThemeContext };
