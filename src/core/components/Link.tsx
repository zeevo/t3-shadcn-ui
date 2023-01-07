import type { LinkProps } from "next/link";
import NextLink from "next/link";
import type { PropsWithChildren } from "react";
import cls from "classnames";
import { twMerge } from "tailwind-merge";

export type LinkVariant = "soft";

const getVariantStyles = (variant?: string, active?: boolean) => {
  switch (variant) {
    case "soft": {
      return twMerge(
        cls([
          "no-underline",
          "hover:text-text-light",
          "dark:hover:text-text-dark",
          "text-subtext-light",
          "dark:text-subtext-dark",
        ]),
        cls({
          "text-text-light": active,
          "dark:text-text-dark": active,
        })
      );
    }
    default: {
      return twMerge(
        cls([
          "decoration-subtle-light",
          "dark:decoration-subtle-dark",
          "hover:decoration-uiHover-light",
          "hover:dark:decoration-uiHover-dark",
          "underline underline-offset-4",
        ]),
        cls({
          "decoration-uiHover-light": active,
          "dark:decoration-uiHover-dark": active,
        })
      );
    }
  }
};

const Link: React.FC<
  PropsWithChildren<
    LinkProps & { variant?: LinkVariant; active?: boolean; className?: string }
  >
> = ({ variant, active, children, className, href, ...props }) => {
  return (
    <NextLink
      {...props}
      href={href}
      className={twMerge(getVariantStyles(variant, active), className)}
    >
      {children}
    </NextLink>
  );
};

export default Link;
