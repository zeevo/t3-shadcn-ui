import type { PropsWithChildren, ReactNode } from "react";
import React, { useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import Link from "next/link";
import classNames from "classnames";

export type ThemeButtonVariantText = "text" | "contained" | "soft" | "outlined";

// const gradient =
//   "linear-gradient(30deg, $lowContrastText 20%, $uiHover 69%, $subtleBg 100%)";

const baseStyles =
  "active:scale-95 flex min-h-[45px] min-w-[45px] items-center justify-center rounded-lg hover:bg-uiHovered-light hover:dark:bg-uiHovered-dark";

interface OtherProps {
  fillWidth?: boolean;
  href?: string;
}

const getButtonStyles = (variant = "text", { fillWidth }: OtherProps = {}) => {
  switch (variant) {
    case "text": {
      return classNames(baseStyles, { "w-full": fillWidth });
    }
    case "soft": {
      return classNames(baseStyles, "bg-subtleBg-light dark:bg-subtleBg-dark", {
        "w-full": fillWidth,
      });
    }
    default: {
      return classNames(
        baseStyles,
        "border border-solid border-text-light dark:border-text-dark",
        { "w-full": fillWidth }
      );
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
  ...rest
}): React.ReactElement => {
  const [open, setOpen] = useState<boolean>();

  const styles = getButtonStyles(variant, { fillWidth });

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
            <Tooltip.Content className="mt-2 rounded-lg border border-solid border-text-light pt-1 pb-1 pr-2 pl-2 text-sm dark:border-text-dark">
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
