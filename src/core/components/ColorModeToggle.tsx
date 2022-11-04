import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import GhostButton, { ThemedButtonVariant } from "./Button";

interface ColorModeToggleProps {
  tooltip?: boolean;
  tooltipGradient?: boolean;
  variant: ThemedButtonVariant;
  gradient: boolean;
}

const ColorModeToggle: React.FC<ColorModeToggleProps> = (
  { tooltip, variant, gradient, tooltipGradient } = {
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
      gradients={gradient}
      tooltipGradient={tooltipGradient}
    >
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </GhostButton>
  );
};
export default ColorModeToggle;
