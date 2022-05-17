import styled from "@emotion/styled";
import { BellIcon } from "@radix-ui/react-icons";
import type { NextPage } from "next";
import Button from "../components/Button";

const Flex = styled.div`
  display: flex;
`;

const Home: NextPage = () => {
  return (
    <div>
      <h2>Text</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <h2>Button</h2>
      <h3>Text</h3>
      <Button variant="text">
        <BellIcon />
      </Button>
      <h3>Contained</h3>
      <Button variant="contained">
        <BellIcon />
      </Button>
      <h3>Outlined</h3>
      <Button variant="outlined">
        <BellIcon />
      </Button>
    </div>
  );
};

export default Home;
