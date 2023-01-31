import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

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
      {theme === "light" ? <Sun /> : <Moon />}
    </Button>
  );
};
export default ColorModeToggle;
