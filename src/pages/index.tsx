import { BellIcon } from "@radix-ui/react-icons";
import type { NextPage } from "next";
import Button from "../core/components/Button";
import Image from "../core/components/Image";
import SignIn from "../core/components/SignIn";
import getConfig from "../core/lib/config";

import image from "../core/resources/image.jpg";
import styled from "../theme";

const Flex = styled("div", {
  display: "flex",
});

const Flex1 = styled("div", {
  flex: "1",
});

const MarginRight = styled("div", {
  marginRight: "5px",
});

const Home: NextPage = () => {
  return (
    <div>
      <h2>Next Auth</h2>
      <SignIn />

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
        <Flex1>
          <Button variant="text" fillWidth>
            <BellIcon />
          </Button>
        </Flex1>
      </Flex>
      <h3>Soft</h3>
      <Flex>
        <MarginRight>
          <Button variant="soft">
            <BellIcon />
          </Button>
        </MarginRight>
        <Flex1>
          <Button variant="soft" fillWidth>
            <BellIcon />
          </Button>
        </Flex1>
      </Flex>
      <h3>Outlined</h3>
      <Flex>
        <MarginRight>
          <Button variant="outlined">
            <BellIcon />
          </Button>
        </MarginRight>
        <Flex1>
          <Button variant="outlined" fillWidth>
            <BellIcon />
          </Button>
        </Flex1>
      </Flex>
      <h3>Contained</h3>
      <Flex>
        <MarginRight>
          <Button variant="contained">
            <BellIcon />
          </Button>
        </MarginRight>
        <Flex1>
          <Button variant="contained" fillWidth>
            <BellIcon />
          </Button>
        </Flex1>
      </Flex>
      <h2>Image</h2>
      <Image variant="next" src={image} alt="vercel" layout="fill" />
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
