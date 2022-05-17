import { Theme } from "@emotion/react";
import styled from "@emotion/styled";

const getVariantStyles = (variant: string, theme: Theme, invert?: boolean) => {
  switch (variant) {
    case "contained":
      return {
        colorHover: theme.colors.text,
        color: theme.colors.text,
        bgHover: theme.colors.background,
        bg: theme.colors.background,
        activeFocus: theme.colors.secondary,
        borderColor: theme.colors.text,
      };
    case "outlined":
      return {
        colorHover: theme.colors.text,
        color: theme.colors.background,
        bgHover: theme.colors.secondary,
        bg: "inherit",
        activeFocus: theme.colors.secondary,
        borderColor: theme.colors.secondary,
      };
    default: // "text"
      return {
        colorHover: theme.colors.text,
        color: theme.colors.background,
        bgHover: theme.colors.secondary,
        bg: "inherit",
        activeFocus: theme.colors.secondary,
      };
  }
};

const GhostButton = styled.button<{
  invert?: boolean;
  fillWidth?: boolean;
  variant?: string;
}>(({ theme, invert, fillWidth, variant = "text" }) => {
  const { color, bgHover, colorHover, bg, activeFocus, borderColor } =
    getVariantStyles(variant, theme, invert);
  return `
    all: unset;
    flex: 0 0 auto;
    height: 45px;
    border-radius: 8px;
    font-size: 15px;
    line-height: 1;
    transition: all 100ms;
    min-width: 45px;
    ${fillWidth ? "width: 100%" : ""};
    background-color: ${bg};
    color: ${color};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    ${borderColor ? `border: 1px solid ${borderColor}` : ""};
    &:hover {
      background-color: ${bgHover};
      color: ${colorHover}
    }
    &:active, &:focus {
      box-shadow: 0 0 0 2px ${activeFocus};
    }
    &:active {
      transform: scale(0.85);
    }
  `;
});

export default GhostButton;
