import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { AnchorHTMLAttributes } from "react";
import {
  border,
  layout,
  BorderProps,
  LayoutProps,
  flex,
  FlexProps,
} from "styled-system";

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
    case "soft": {
      return {
        colorHover: theme.colors.text,
        color: theme.colors.text,
        bgHover: theme.colors.uiHovered,
        bg: theme.colors.subtleBg,
        activeFocus: theme.colors.uiActive,
        borderColor: theme.colors.subtleBg,
      };
    }
    default: // "text"
      return {
        colorHover: theme.colors.text,
        color: theme.colors.text,
        bgHover: theme.colors.uiHovered,
        bg: theme.colors.bg,
        activeFocus: theme.colors.uiActive,
        borderColor: theme.colors.bg,
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
    onHover?: any;
  } & AnchorHTMLAttributes<{}> &
    BorderProps &
    LayoutProps &
    FlexProps
>((props) => {
  const {
    theme,
    invert,
    fillWidth,
    variant = "text",
    borderColor: bcolor,
    color: vcolor,
    onHover,
  } = props;
  console.log(theme);
  const { color, bgHover, colorHover, bg, activeFocus, borderColor } =
    getVariantStyles({
      variant,
      theme,
      invert,
      borderColor: bcolor,
      textColor: vcolor,
    });

  return {
    flex: "0 0 auto",
    minHeight: "45px",
    padding: "15px",
    fontSize: "15px",
    lineHeight: 1,
    transition: "all 100ms",
    minWidth: "45px",
    width: fillWidth ? "100%" : "",
    backgroundColor: bg,
    color: color,
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: "10px",
    border: borderColor ? `2px solid ${borderColor}` : "",
    "&:hover": {
      backgroundColor: bgHover,
      color: colorHover,
      ...onHover,
    },
    "&:active, &:focus": {
      boxShadow: `0 0 0 2px ${activeFocus}`,
    },
    "&:active": {
      transform: "scale(0.95)",
    },
    ...border(props),
    ...layout(props),
    ...flex(props),
  };
});

export default GhostButton;
