import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

import type { ThemeButtonVariantText } from "./Button";
import { useEffect, useState } from "react";
import IconButton from "./IconButton";

interface ColorModeToggleProps {
  tooltip?: boolean;
  variant: ThemeButtonVariantText;
}

const ColorModeToggle: React.FC<ColorModeToggleProps> = (
  { tooltip } = {
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
      <IconButton
        onClick={() => {
          const nextMode = theme === "light" ? "dark" : "light";
          setTheme(nextMode);
        }}
        aria-label="color mode toggle"
      >
        {theme === "light" ? <Sun /> : <Moon />}
      </IconButton>
    </div>
  );
};
export default ColorModeToggle;
