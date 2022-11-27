import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import type { ThemeButtonVariantText } from "./Button/Button";
import GhostButton from "./Button/Button";

interface ColorModeToggleProps {
  tooltip?: boolean;
  tooltipGradient?: boolean;
  variant: ThemeButtonVariantText;
  gradient: boolean;
}

const ColorModeToggle: React.FC<ColorModeToggleProps> = (
  { tooltip, variant } = {
    tooltip: false,
    variant: "text",
    gradient: false,
    tooltipGradient: false,
  }
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
      variant={variant}
    >
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </GhostButton>
  );
};
export default ColorModeToggle;
