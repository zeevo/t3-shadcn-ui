import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { AnchorHTMLAttributes } from "react";

const getVariantStyles = ({
  variant,
  theme,
  borderColor,
}: {
  variant: string;
  theme: Theme;
  invert?: boolean;
  borderColor?: string;
  textColor?: string;
}) => {
  switch (variant) {
    case "contained":
      return {
        colorHover: theme.colors.bg,
        color: theme.colors.bg,
        bgHover: theme.colors.soft,
        bg: theme.colors.text,
        activeFocus: theme.colors.uiActive,
        borderColor: borderColor ? borderColor : theme.colors.text,
      };
    case "outlined":
      return {
        colorHover: theme.colors.text,
        color: theme.colors.text,
        bgHover: theme.colors.subtleBg,
        bg: theme.colors.bg,
        activeFocus: theme.colors.uiActive,
        borderColor: borderColor ? borderColor : theme.colors.text,
      };
    default: // "text"
      return {
        colorHover: theme.colors.text,
        color: theme.colors.text,
        bgHover: theme.colors.uiHovered,
        bg: theme.colors.subtleBg,
        activeFocus: theme.colors.uiActive,
        borderColor: borderColor ? borderColor : "rgba(0,0,0,0)",
      };
  }
};

const GhostButton = styled.button<
  {
    invert?: boolean;
    fillWidth?: boolean;
    variant?: string;
    borderColor?: string;
    color?: string;
  } & AnchorHTMLAttributes<{}>
>(
  ({
    theme,
    invert,
    fillWidth,
    variant = "text",
    borderColor: bcolor,
    color: vcolor,
  }) => {
    const { color, bgHover, colorHover, bg, activeFocus, borderColor } =
      getVariantStyles({
        variant,
        theme,
        invert,
        borderColor: bcolor,
        textColor: vcolor,
      });
    return `
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
    ${borderColor ? `border: 2px solid ${borderColor}` : ""};
    &:hover {
      background-color: ${bgHover};
      color: ${colorHover}
    }
    &:active, &:focus {
      box-shadow: 0 0 0 2px ${activeFocus};
    }
    &:active {
      transform: scale(0.95);
    }
  `;
  }
);

export default GhostButton;
