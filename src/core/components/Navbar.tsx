import {
  GitHubLogoIcon,
  HomeIcon,
  MixIcon,
  PersonIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import * as Separator from "@radix-ui/react-separator";
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
  marginRight: "1rem",
  marginLeft: "1rem",
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

        return (
          <GhostButton
            key={id}
            href={item.href}
            tooltip={item.tooltip}
            as="a"
            active={page === item.href}
          >
            {Icon && <Icon />}
          </GhostButton>
        );
      })}
    </Flex>

    {config.colorModeToggle && (
      <ColorModeToggle tooltip={config.colorModeTooltip} />
    )}
  </Nav>
);

export default Navbar;
