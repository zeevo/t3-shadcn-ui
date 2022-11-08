import React, { ComponentProps, PropsWithChildren, useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import styled, { keyframes } from "../../theme";
import Link from "next/link";

export const slideDownAndFade = keyframes({
  "0%": { transform: "scale(.5)" },
  "100%": { transform: "scale(1)" },
});

export type ThemeButtonVariantText = "text" | "contained" | "soft" | "outlined";

export type ThemedButtonVariant =
  | ThemeButtonVariantText
  | {
      [key: string]: any;
    };

const gradient =
  "linear-gradient(30deg, $lowContrastText 20%, $uiHover 69%, $subtleBg 100%)";

export const ThemedButton = styled("button", {
  flex: "0 0 auto",
  fontSize: "15px",
  lineHeight: 1,
  transition: "all 100ms",
  whiteSpace: "nowrap",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  borderRadius: "10px",
  "&:active": {
    transform: "scale(0.95)",
  },
  backgroundColor: "inherit",
  variants: {
    borderRadius: {
      straight: {
        borderRadius: "0px",
      },
    },
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
    gradients: {
      true: {
        "&:hover": {
          backgroundImage: gradient,
          color: "$bg !important",
        },
      },
    },
    spaced: {
      true: {
        "&:not(:last-child)": {
          marginRight: "15px",
        },
      },
    },
    variant: {
      text: {
        "&:hover": {
          color: "$text",
          backgroundColor: "$uiHovered",
        },
        color: "$text",
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
    padded: {
      true: {
        padding: "15px",
        minHeight: "45px",
        minWidth: "45px",
      },
    },
  },
  compoundVariants: [
    {
      gradients: true,
      active: true,
      css: {
        backgroundImage: gradient,
        color: "$bg",
      },
    },
  ],
  defaultVariants: {
    padded: true,
  },
});

export const StyledContent = styled(Tooltip.Content, {
  marginTop: "5px",
  borderRadius: "10px",
  padding: "5px 10px",
  fontWeight: "bold",
  fontSize: ".8rem",
  color: "$bg",
  backgroundColor: "$lowContrastText",
  transformOrigin: "var(--radix-tooltip-content-transform-origin)",
  animation: `${slideDownAndFade} 0.05s`,
  variants: {
    gradient: {
      true: {
        backgroundImage: gradient,
        color: "$bg !important",
      },
    },
  },
});

export const StyledAnchor = styled("a", {
  padding: "15px",
  minHeight: "45px",
  minWidth: "45px",
});

export interface GhostButtonProps {
  tooltip?: string;
  active?: boolean;
  href?: string;
  as?: string;
  tooltipGradient?: boolean;
}

export const GhostButton: React.FC<
  ComponentProps<typeof ThemedButton> & PropsWithChildren<GhostButtonProps>
> = ({ children, tooltip, tooltipGradient, ...props }) => {
  const [open, setOpen] = useState<boolean>();
  let button;
  if (props.href) {
    const { href, ...rest } = props;
    button = (
      <ThemedButton as="div" padded={false} {...rest}>
        <Link href={href} passHref>
          <StyledAnchor>{children}</StyledAnchor>
        </Link>
      </ThemedButton>
    );
  } else {
    button = <ThemedButton {...props}>{children}</ThemedButton>;
  }
  if (tooltip) {
    return (
      <Tooltip.Root open={open}>
        <Tooltip.Trigger
          asChild
          onMouseLeave={() => {
            setOpen(false);
          }}
          onMouseEnter={() => setOpen(true)}
        >
          {button}
        </Tooltip.Trigger>
        <Tooltip.Content>
          <StyledContent gradient={tooltipGradient}>{tooltip}</StyledContent>
        </Tooltip.Content>
      </Tooltip.Root>
    );
  }
  return <ThemedButton {...props}>{children}</ThemedButton>;
};

export default GhostButton;
