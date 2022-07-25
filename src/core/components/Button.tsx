import React, { ComponentProps, PropsWithChildren } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import styled, { keyframes } from "../../theme";

const slideDownAndFade = keyframes({
  "0%": { transform: "scale(.5)" },
  "100%": { transform: "scale(1)" },
});

const ThemedButton = styled("button", {
  flex: "0 0 auto",
  minHeight: "45px",
  padding: "15px",
  fontSize: "15px",
  lineHeight: 1,
  transition: "all 100ms",
  minWidth: "45px",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  borderRadius: "10px",
  "&:active": {
    transform: "scale(0.95)",
  },
  variants: {
    fillWidth: {
      true: {
        width: "100%",
      },
    },
    active: {
      true: {
        backgroundColor: "$uiHovered",
      },
    },
    variant: {
      text: {
        "&:hover": {
          color: "$text",
          backgroundColor: "$uiHovered",
        },
        color: "$text",
        backgroundColor: "inherit",
        "&:active, &:focus": {
          boxShadow: `0 0 0 2px $uiActive`,
        },
        borderColor: "$text",
      },
      contained: {
        "&:hover": {
          color: "$text",
          backgroundColor: "$uiHover",
        },
        color: "$text",
        backgroundColor: "$subtle",
        "&:active, &:focus": {
          boxShadow: `0 0 0 2px $uiActive`,
        },
        borderColor: "$text",
      },
      outlined: {
        "&:hover": {
          color: "$text",
          backgroundColor: "$subtleBg",
        },
        color: "$text",
        "&:active, &:focus": {
          boxShadow: `0 0 0 2px $uiActive`,
        },
        border: "2px solid $text",
        colorHover: "$text",
        backgroundColor: "$bg",
      },
      soft: {
        "&:hover": {
          color: "$text",
          backgroundColor: "$uiHovered",
        },
        color: "$text",
        "&:active, &:focus": {
          boxShadow: `0 0 0 2px $uiActive`,
        },
        border: "2px solid $subtleBg",
        colorHover: "$text",
        backgroundColor: "$subtleBg",
      },
    },
  },
  defaultVariants: {
    variant: "text",
  },
});

const StyledContent = styled(Tooltip.Content, {
  marginTop: "5px",
  borderRadius: "10px",
  padding: "5px 15px",
  fontWeight: "bold",
  fontSize: ".8rem",
  color: "$text",
  backgroundColor: "$uiHovered",
  transformOrigin: "var(--radix-tooltip-content-transform-origin)",
  animation: `${slideDownAndFade} 0.1s`,
});

interface GhostButtonProps {
  tooltip?: string;
  active?: boolean;
  href?: string;
  as?: string;
}

const GhostButton: React.FC<
  ComponentProps<typeof ThemedButton> & PropsWithChildren<GhostButtonProps>
> = ({ children, tooltip, ...props }) => {
  if (tooltip) {
    return (
      <Tooltip.Provider>
        <Tooltip.Root delayDuration={100}>
          <Tooltip.Trigger asChild>
            <ThemedButton {...props}>{children}</ThemedButton>
          </Tooltip.Trigger>
          <Tooltip.Content>
            <StyledContent>{tooltip}</StyledContent>
          </Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>
    );
  }
  return <ThemedButton {...props}>{children}</ThemedButton>;
};

export default GhostButton;
