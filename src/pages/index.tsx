import { BellIcon } from "@radix-ui/react-icons";
import type { NextPage } from "next";
import Button from "../core/components/Button/Button";
// import SignIn from "../core/components/SignIn";
import getConfig from "../core/lib/config";
import Img from "next/image";

import image from "../core/resources/image.jpg";

const Home: NextPage = () => {
  return (
    <div className="mt-16">
      <h1>Next Starter</h1>
      <h2>Next Auth</h2>
      {/* <SignIn /> */}

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
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            marginRight: "5px",
          }}
        >
          <Button variant="text">
            <BellIcon />
          </Button>
        </div>
        <div style={{ flex: 1 }}>
          <Button variant="text" fillWidth>
            <BellIcon />
          </Button>
        </div>
      </div>
      <h3>Soft</h3>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            marginRight: "5px",
          }}
        >
          <Button variant="soft">
            <BellIcon />
          </Button>
        </div>
        <div style={{ flex: 1 }}>
          <Button variant="soft" fillWidth>
            <BellIcon />
          </Button>
        </div>
      </div>
      <h3>Outlined</h3>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            marginRight: "5px",
          }}
        >
          <Button variant="outlined">
            <BellIcon />
          </Button>
        </div>
        <div style={{ flex: 1 }}>
          <Button variant="outlined" fillWidth>
            <BellIcon />
          </Button>
        </div>
      </div>
      <h3>Contained</h3>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            marginRight: "5px",
          }}
        >
          <Button variant="contained">
            <BellIcon />
          </Button>
        </div>
        <div style={{ flex: 1 }}>
          <Button variant="contained" fillWidth>
            <BellIcon />
          </Button>
        </div>
      </div>
      <h2>Image</h2>
      <Img src={image} alt="vercel" />
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
