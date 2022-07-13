import styled from "@emotion/styled";
import ColorModeToggle from "../context/ColorModeToggle";
import { HomeIcon } from "@radix-ui/react-icons";
import GhostButton from "./Button";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: -15px;
  margin-right: -15px;
`;

const Navbar = () => {
  return (
    <Nav>
      <GhostButton href="/" as="a">
        <HomeIcon />
      </GhostButton>

      <ColorModeToggle />
    </Nav>
  );
};

export default Navbar;
