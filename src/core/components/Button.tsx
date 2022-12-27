import type { PropsWithChildren } from "react";
import React, { useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import Link from "next/link";
import classNames from "classnames";

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
  const allStyles = classNames(
    baseStyles,
    {
      "w-full": fillWidth,
      "bg-uiHovered-light": active,
      "dark:bg-uiHovered-dark": active,
    },
    className
  );

  switch (variant) {
    case "text": {
      return classNames(allStyles, [
        "hover:bg-uiHovered-light",
        "hover:dark:bg-uiHovered-dark",
      ]);
    }
    case "soft": {
      return classNames(allStyles, [
        "bg-subtleBg-light",
        "dark:bg-subtleBg-dark",
        "hover:bg-uiHovered-light",
        "hover:dark:bg-uiHovered-dark",
        "shadow",
      ]);
    }
    case "outlined": {
      return classNames(allStyles, [
        "border-solid",
        "border",

        "border-text-light",
        "dark:border-text-dark",

        "shadow",

        // hover
        "hover:text-color-light",
        "hover:border-bg-light",
        "hover:bg-lowContrastText-light",
        "[&>*]:hover:text-bg-light",
        "[&>*]:hover:dark:text-bg-dark",

        "hover:dark:border-bg-dark",
        "hover:dark:text-color-dark",
        "hover:dark:bg-lowContrastText-dark",
      ]);
    }
    case "contained": {
      return classNames(allStyles, [
        "shadow",

        "bg-uiBorder-light",
        "dark:bg-uiBorder-dark",

        "hover:bg-uiHover-light",
        "dark:hover:bg-uiHover-dark",
      ]);
    }
    default: {
      return classNames(allStyles);
    }
  }
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
