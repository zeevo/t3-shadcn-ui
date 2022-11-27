import type { LinkProps } from "next/link";
import NextLink from "next/link";
import type { PropsWithChildren } from "react";
import { clr } from "../utils/colors";

const Link: React.FC<PropsWithChildren<LinkProps>> = ({
  children,
  href,
  ...props
}) => {
  console.log();
  return (
    <NextLink
      {...props}
      href={href}
      className={`${clr("decoration", "subtle")} ${clr(
        "decoration",
        "uiHover",
        ["hover"]
      )} underline underline-offset-4`}
    >
      {children}
    </NextLink>
  );
};

export default Link;
