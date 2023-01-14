import type { PropsWithChildren } from "react";
import React, { useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import Link from "next/link";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export type ThemeButtonVariantText =
  | "text"
  | "contained"
  | "soft"
  | "outlined"
  | "outlined-inverted";

interface OtherProps {
  fillWidth?: boolean;
  active?: boolean;
  href?: string;
}

const getButtonStyles = (
  variant = "text",
  { fillWidth, active = false }: OtherProps = {},
  className = ""
) => {
  let baseStyles = [
    "active:scale-95",
    "flex",
    "duration-150",
    "min-h-[45px]",
    "min-w-[45px]",
    "items-center",
    "justify-center",
    "rounded-2xl",
  ];

  const allStyles = classNames(baseStyles, { "w-full": fillWidth });

  let activeStyles = classNames({
    "bg-uiHovered-light": active,
    "dark:bg-uiHovered-dark": active,
  });

  let variantStyles;

  switch (variant) {
    case "text": {
      variantStyles = [
        "hover:bg-uiHovered-light",
        "hover:dark:bg-uiHovered-dark",
      ];
      break;
    }
    case "unstyled": {
      variantStyles = [];
      baseStyles = [];
      activeStyles = "";
      break;
    }
    case "soft": {
      variantStyles = [
        "hover:border-text-light",
        "hover:dark:border-text-dark",
        "border-solid",
        "border",
      ];

      activeStyles = classNames({
        "bg-uiHovered-light": active,
        "dark:bg-uiHovered-dark": active,
      });

      break;
    }
    case "outlined": {
      variantStyles = [
        "border-solid",
        "border",

        // Border color
        "border-text-light",
        "dark:border-text-dark",

        // Hover color
        "hover:text-bg-light",
        "dark:hover:text-bg-dark",

        // Hover border color
        "hover:border-lowContrastText-light",
        "hover:bg-lowContrastText-light",
        "dark:hover:border-lowContrastText-dark",
        "dark:hover:bg-lowContrastText-dark",
      ];
      activeStyles = classNames({
        "bg-lowContrastText-light": active,
        "text-bg-light": active,
        "dark:bg-lowContrastText-dark": active,
        "dark:text-bg-dark": active,
        "border-lowContrastText-light": active,
        "dark:border-lowContrastText-dark": active,
      });
      break;
    }
    case "outlined-inverted": {
      variantStyles = [
        "border-solid",
        "border",

        // Background
        "bg-lowContrastText-light",
        "text-bg-light",
        "dark:bg-lowContrastText-dark",
        "dark:text-bg-dark",

        // Border color
        "border-lowContrastText-light",
        "dark:border-lowContrastText-dark",

        // Hover color
        "hover:text-text-light",
        "dark:hover:text-text-dark",

        // Hover border color
        "hover:border-text-light",
        "hover:bg-bg-light",
        "dark:hover:border-text-dark",
        "dark:hover:bg-bg-dark",
      ];
      activeStyles = classNames(
        [
          "text-color-light",
          "dark:text-color-dark",
          "border-text-light",
          "bg-bg-light",
          "dark:border-text-dark",
          "dark:bg-bg-dark",
        ].reduce<{ [key: string]: boolean }>((prev, curr) => {
          prev[curr] = active;
          return prev;
        }, {})
      );
      break;
    }
    case "contained": {
      variantStyles = [
        "bg-uiBorder-light",
        "dark:bg-uiBorder-dark",
        "hover:bg-uiHover-light",
        "dark:hover:bg-uiHover-dark",
      ];

      activeStyles = classNames(
        ["bg-uiHover-light", "dark:bg-uiHover-dark"].reduce<{
          [key: string]: boolean;
        }>((prev, curr) => {
          prev[curr] = active;
          return prev;
        }, {})
      );
      break;
    }
    default: {
      variantStyles = "";
    }
  }
  return twMerge(allStyles, variantStyles, activeStyles, className);
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  tooltip?: string;
  active?: boolean;
  variant?: string;
}

export const Button: React.FC<PropsWithChildren<ButtonProps & OtherProps>> = ({
  children,
  variant,
  tooltip,
  href,
  fillWidth,
  active,
  className,
  ...rest
}): React.ReactElement => {
  const [open, setOpen] = useState<boolean>();

  const styles = getButtonStyles(variant, { fillWidth, active }, className);

  let content;
  if (href) {
    content = (
      <Link href={href} passHref>
        <button className={styles} {...rest}>
          {children}
        </button>
      </Link>
    );
  } else {
    content = (
      <button className={styles} {...rest}>
        {children}
      </button>
    );
  }

  if (tooltip) {
    return (
      <Tooltip.Provider>
        <Tooltip.Root open={open}>
          <Tooltip.Trigger
            asChild
            onMouseLeave={() => {
              setOpen(false);
            }}
            onMouseEnter={() => setOpen(true)}
          >
            <div>{content}</div>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="tooltip mt-2 rounded-2xl bg-uiHovered-light pt-2 pb-2 pr-4 pl-4 text-sm font-semibold dark:bg-uiHovered-dark">
              {tooltip}
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    );
  }

  return content;
};

export default Button;
