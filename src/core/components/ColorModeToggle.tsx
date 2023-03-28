import { SunMoon } from "lucide-react";
import { useTheme } from "next-themes";

import type { ThemeButtonVariantText } from "./Button";
import IconButton from "./IconButton";

interface ColorModeToggleProps {
  tooltip?: boolean;
  variant: ThemeButtonVariantText;
}

const ColorModeToggle: React.FC<ColorModeToggleProps> = ({ tooltip }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="tooltip tooltip-bottom tooltip-accent"
      data-tip={tooltip ? "Theme" : undefined}
    >
      <IconButton
        onClick={() => {
          const nextMode = theme === "light" ? "dark" : "light";
          setTheme(nextMode);
        }}
        aria-label="color mode toggle"
      >
        <SunMoon />
      </IconButton>
    </div>
  );
};

export default ColorModeToggle;
