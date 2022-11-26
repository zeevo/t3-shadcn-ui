import type { LinkProps } from "next/link";
import Link from "next/link";
import type { PropsWithChildren } from "react";
import styled from "../../theme";

const StyledLink = styled("a", {
  textDecoration: "underline",
  textUnderlineOffset: "3px",
  textDecorationColor: "$subtle",
  "&:hover": {
    textDecorationColor: "$uiHover",
  },
  cursor: "pointer",
});

const GhostLink: React.FC<PropsWithChildren<LinkProps>> = ({
  children,
  href,
  ...props
}) => {
  return (
    <Link {...props} href={href} passHref>
      <a
        style={{
          textDecoration: "underline",
          textUnderlineOffset: "3px",
          textDecorationColor: "$subtle",
          cursor: "pointer",
        }}
      >
        {children}
      </a>
    </Link>
  );
};

export default GhostLink;
