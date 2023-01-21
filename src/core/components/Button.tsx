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
    "btn",
    "bg-base-100",
    "hover:bg-base-100",
    "border-base-100",
    "border-0",
    "flex",
    "uppercase",
    "font-semibold",
    "duration-200",
    "min-h-[45px]",
    "min-w-[45px]",
    "items-center",
    "justify-center",
  ];

  const allStyles = classNames(baseStyles, { "w-full": fillWidth });

  let activeStyles = classNames({
    "bg-accent": active,
  });

  let variantStyles;

  switch (variant) {
    case "text": {
      variantStyles = ["hover:bg-accent", "hover:bg-accent", "bg-transparent"];
      break;
    }
    case "unstyled": {
      variantStyles = [];
      baseStyles = [];
      activeStyles = "";
      break;
    }
    case "soft": {
      variantStyles = ["hover:border-base-content", "border-neutral", "border"];

      activeStyles = classNames({
        "border-base-content": active,
      });

      break;
    }
    case "outlined": {
      variantStyles = [
        "border",

        "text-base-content",

        // Border color
        "border-base-content",

        // Hover color
        "hover:text-base-100",

        // Hover border color
        "hover:border-primary",
        "hover:bg-primary",
      ];
      activeStyles = classNames({
        "bg-primary": active,
        "text-base-100": active,
        "border-primary": active,
      });
      break;
    }
    case "outlined-inverted": {
      variantStyles = [
        "border-solid",
        "border",

        // Background
        "bg-primary",
        "text-base-100",

        // Border color
        "border-primary",

        // Hover color
        "hover:text-base-content",

        // Hover border color
        "hover:border-base-content",
        "hover:bg-base-100",
      ];
      activeStyles = classNames(
        ["text-color", "border-base-content", "bg-base-100"].reduce<{
          [key: string]: boolean;
        }>((prev, curr) => {
          prev[curr] = active;
          return prev;
        }, {})
      );
      break;
    }
    case "contained": {
      variantStyles = ["bg-secondary", "hover:bg-secondary-focus"];

      activeStyles = classNames(
        ["bg-secondary-focus"].reduce<{
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
            <Tooltip.Content className="mtooltip mt-2 rounded-2xl bg-accent pt-2 pb-2 pr-4 pl-4 text-sm font-semibold">
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
