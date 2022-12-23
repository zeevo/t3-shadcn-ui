import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import type { ThemeButtonVariantText } from "./Button";
import Button from "./Button";

interface ColorModeToggleProps {
  tooltip?: boolean;
  variant: ThemeButtonVariantText;
}

const ColorModeToggle: React.FC<ColorModeToggleProps> = (
  { tooltip, variant } = {
    tooltip: false,
    variant: "text",
  }
) => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      onClick={() => {
        const nextMode = theme === "light" ? "dark" : "light";
        setTheme(nextMode);
      }}
      tooltip={
        tooltip ? (theme === "light" ? "Light mode" : "Dark mode") : undefined
      }
      variant={variant}
      aria-label="color mode toggle"
    >
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
export default ColorModeToggle;
