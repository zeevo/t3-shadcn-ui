import { useThemeContext } from "./ThemeContext";

import { ValueIcon } from "@radix-ui/react-icons";
import styled from "@emotion/styled";

const GhostButton = styled.button(
  ({ theme }) => `
  all: unset;
  flex: 0 0 auto;
  height: 45px;
  border-radius: 8px;
  font-size: 15px;
  line-height: 1;
  transition: all 100ms;
  min-width: 45px;
  background-color: transparent;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  &:hover {
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.background}
  }
  &:active, &:focus {
    box-shadow: 0 0 0 2px ${theme.colors.secondary};
  }
`
);

const ColorModeToggle: React.FC = () => {
  const [mode, setMode] = useThemeContext();

  return (
    <GhostButton
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      <ValueIcon />
    </GhostButton>
  );
};
export default ColorModeToggle;
