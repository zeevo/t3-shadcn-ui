import {
  GitHubLogoIcon,
  HomeIcon,
  MixIcon,
  PersonIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import * as Separator from "@radix-ui/react-separator";
import { NavbarConfig } from "../../lib/config";
import styled from "../theme";
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
  marginLeft: "-15px",
  marginRight: "-15px",
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
            spaced
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
