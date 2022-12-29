import type { PropsWithChildren } from "react";
import React, { useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import Link from "next/link";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export type ThemeButtonVariantText = "text" | "contained" | "soft" | "outlined";

// const gradient =
//   "linear-gradient(30deg, $lowContrastText 20%, $uiHover 69%, $subtleBg 100%)";

const baseStyles = [
  "active:scale-95",
  "flex",
  "duration-150",
  "min-h-[45px]",
  "min-w-[45px]",
  "items-center",
  "justify-center",
  "rounded-lg",
  "font-semibold",
  "dark:dark-shadow-none",
];

interface OtherProps {
  fillWidth?: boolean;
  active?: boolean;
  href?: string;
}

const getButtonStyles = (
  variant = "text",
  { fillWidth, active }: OtherProps = {},
  className = ""
) => {
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
    case "soft": {
      variantStyles = [
        "bg-subtleBg-light",
        "dark:bg-subtleBg-dark",
        "hover:bg-uiHovered-light",
        "hover:dark:bg-uiHovered-dark",
        "shadow",
      ];
      break;
    }
    case "outlined": {
      variantStyles = [
        "border-solid",
        "border",

        "border-text-light",
        "dark:border-text-dark",

        "shadow",

        // hover
        "hover:text-color-light",
        "hover:border-lowContrastText-light",
        "hover:bg-lowContrastText-light",
        "[&>*]:hover:text-bg-light",
        "[&>*]:hover:dark:text-bg-dark",

        "dark:hover:text-color-dark",
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
    case "contained": {
      variantStyles = [
        "shadow",

        "bg-uiBorder-light",
        "dark:bg-uiBorder-dark",

        "hover:bg-uiHover-light",
        "dark:hover:bg-uiHover-dark",
      ];
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
            <Tooltip.Content className="tooltip mt-2 rounded-lg bg-uiHovered-light pt-2 pb-2 pr-4 pl-4 text-sm font-semibold dark:bg-uiHovered-dark">
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
