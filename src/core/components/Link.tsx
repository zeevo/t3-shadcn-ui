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
          "hover:text-base-content",
          "hover:opacity-100",
          "opacity-50",
        ]),
        cls({
          "text-base-content": active,
        })
      );
    }
    default: {
      return twMerge(
        cls([
          "decoration-accent",
          "hover:decoration-base-content",
          "underline underline-offset-4",
        ]),
        cls({
          "decoration-base-content": active,
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
