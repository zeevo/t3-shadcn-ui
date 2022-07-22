import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";
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
      <StyledLink>{children}</StyledLink>
    </Link>
  );
};

export default GhostLink;
