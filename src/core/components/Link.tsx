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
        cls(["no-underline", "hover:text-base-content", "text-base-content"]),
        cls({
          "text-base-content": active,
        })
      );
    }
    default: {
      return twMerge(
        cls([
          "decoration-secondary",
          "hover:decoration-primary",
          "underline underline-offset-4",
        ]),
        cls({
          "decoration-primary": active,
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
