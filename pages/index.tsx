import styled from "@emotion/styled";
import { BellIcon } from "@radix-ui/react-icons";
import type { NextPage } from "next";
import Button from "../core/components/Button";
import getConfig from "../core/lib/config";

const Flex = styled.div`
  display: flex;
`;

const MarginRight = styled.div`
  margin-right: 5px;
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
      <Flex>
        <MarginRight>
          <Button variant="text">
            <BellIcon />
          </Button>
        </MarginRight>
        <Button variant="text" fillWidth>
          <BellIcon />
        </Button>
      </Flex>
      <h3>Soft</h3>
      <Flex>
        <MarginRight>
          <Button variant="soft">
            <BellIcon />
          </Button>
        </MarginRight>
        <Button variant="soft" fillWidth>
          <BellIcon />
        </Button>
      </Flex>
      <h3>Outlined</h3>
      <Flex>
        <MarginRight>
          <Button variant="outlined">
            <BellIcon />
          </Button>
        </MarginRight>
        <Button variant="outlined" fillWidth>
          <BellIcon />
        </Button>
      </Flex>
      <h3>Contained</h3>
      <Flex>
        <MarginRight>
          <Button variant="contained">
            <BellIcon />
          </Button>
        </MarginRight>
        <Button variant="contained" fillWidth>
          <BellIcon />
        </Button>
      </Flex>
    </div>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      config: getConfig(),
    },
  };
};

export default Home;
