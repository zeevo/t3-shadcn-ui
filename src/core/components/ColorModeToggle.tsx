import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

import type { ThemeButtonVariantText } from "./Button";
import Button from "./Button";
import { useEffect, useState } from "react";

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
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <></>;
  }

  return (
    <div
      className="tooltip tooltip-bottom tooltip-accent"
      data-tip={
        tooltip ? (theme === "light" ? "Light mode" : "Dark mode") : undefined
      }
    >
      <Button
        className="btn-ghost btn hover:bg-accent"
        variant="ghost"
        onClick={() => {
          const nextMode = theme === "light" ? "dark" : "light";
          setTheme(nextMode);
        }}
        aria-label="color mode toggle"
      >
        {theme === "light" ? <Sun /> : <Moon />}
      </Button>
    </div>
  );
};
export default ColorModeToggle;
