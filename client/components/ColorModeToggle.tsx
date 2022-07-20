import { useTheme } from "next-themes";

import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import GhostButton from "./Button";

interface ColorModeToggleProps {
  tooltip?: boolean;
}

const ColorModeToggle: React.FC<ColorModeToggleProps> = (
  { tooltip } = { tooltip: false }
) => {
  const { theme, setTheme } = useTheme();
  return (
    <GhostButton
      onClick={() => {
        const nextMode = theme === "light" ? "dark" : "light";
        setTheme(nextMode);
      }}
      tooltip={
        tooltip ? (theme === "light" ? "Light mode" : "Dark mode") : undefined
      }
    >
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </GhostButton>
  );
};
export default ColorModeToggle;
