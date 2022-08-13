import {
  GitHubLogoIcon,
  HomeIcon,
  MixIcon,
  PersonIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import * as Separator from "@radix-ui/react-separator";
import Link from "next/link";
import React from "react";
import styled from "../../theme";
import { NavbarConfig } from "../lib/config";
import GhostButton from "./Button";
import ColorModeToggle from "./ColorModeToggle";

const icons = {
  HomeIcon: HomeIcon,
  MixIcon: MixIcon,
  GithubIcon: GitHubLogoIcon,
  PersonIcon: PersonIcon,
  TwitterIcon: TwitterLogoIcon,
};

const Nav = styled("nav", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  variants: {
    spaced: {
      true: {
        marginBottom: "3rem",
      },
    },
  },
});

const Flex = styled("div", {
  display: "flex",
  alignItems: "center",
});

const StyledSeparator = styled(Separator.Root, {
  backgroundColor: "$uiHovered",
  height: "15px",
  width: "1px",
  marginRight: "15px",
});

const Navbar: React.FC<{ config: NavbarConfig; page?: string }> = ({
  config,
  page,
}) => (
  <Nav spaced={config.spacing}>
    <Flex>
      {config.items.map((item) => {
        const id = item.href || item.type;
        let Icon;
        if (item.type === "separator") {
          return <StyledSeparator key={id} orientation="vertical" />;
        }
        if (item.icon) {
          Icon = icons[item.icon];
        }

        const Button = (
          <GhostButton
            tooltip={item.tooltip}
            active={page === item.href}
            variant="text"
            spaced
          >
            {Icon && <Icon />}
          </GhostButton>
        );

        if (item.href) {
          return (
            <Link key={id} href={item.href} passHref>
              {Button}
            </Link>
          );
        }

        return <React.Fragment key={id}>{Button}</React.Fragment>;
      })}
    </Flex>

    {config.colorModeToggle && (
      <ColorModeToggle tooltip={config.colorModeTooltip} variant="text" />
    )}
  </Nav>
);

export default Navbar;
