import { useThemeContext } from "./ThemeContext";

import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import Button from "../../components/Button";

const saveToLocalStorage = (mode: string) => {
  localStorage.setItem("theme-mode", mode);
};

const ColorModeToggle: React.FC = () => {
  const [mode, setMode] = useThemeContext();

  return (
    <Button
      onClick={() => {
        const nextMode = mode === "light" ? "dark" : "light";
        setMode(nextMode);
        saveToLocalStorage(nextMode);
      }}
    >
      {mode === "light" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
export default ColorModeToggle;
