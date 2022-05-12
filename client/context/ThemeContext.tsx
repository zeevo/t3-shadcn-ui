import { useState, createContext, useContext } from "react";

const ThemeContext = createContext<[string, Function]>(["light", () => {}]);

const useThemeContext = () => {
  return useContext(ThemeContext);
};

const ThemeContextProvider: React.FC<{ children: any }> = ({ children }) => {
  const prefersDark =
    typeof window !== undefined ||
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [mode, setTheme] = useState(prefersDark ? "dark" : "light");
  return (
    <ThemeContext.Provider value={[mode, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

const { Consumer, Provider } = ThemeContext;

export { Consumer, Provider, useThemeContext };
