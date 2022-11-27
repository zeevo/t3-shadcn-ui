import type { LinkProps } from "next/link";
import NextLink from "next/link";
import type { PropsWithChildren } from "react";
import cls from "classnames";

const Link: React.FC<PropsWithChildren<LinkProps>> = ({
  children,
  href,
  ...props
}) => {
  return (
    <NextLink
      {...props}
      href={href}
      className={cls([
        "decoration-subtle-light",
        "dark:decoration-subtle-dark",
        "hover:decoration-uiHover-light",
        "hover:dark:decoration-uiHover-dark",
        "underline underline-offset-4",
      ])}
    >
      {children}
    </NextLink>
  );
};

export default Link;
