import { SunMoon } from "lucide-react";
import { useTheme } from "next-themes";

import IconButton from "./IconButton";

interface ColorModeToggleProps {
  tooltip?: boolean;
}

const ColorModeToggle: React.FC<ColorModeToggleProps> = ({ tooltip }) => {
  const { theme, setTheme } = useTheme();

  return (
    <IconButton
      onClick={() => {
        const nextMode = theme === "light" ? "dark" : "light";
        setTheme(nextMode);
      }}
      tooltip={tooltip ? "Theme" : undefined}
      className="opacity-70 hover:opacity-100"
      aria-label="color mode toggle"
    >
      <SunMoon />
    </IconButton>
  );
};

export default ColorModeToggle;
