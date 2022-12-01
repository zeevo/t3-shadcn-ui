import { BellIcon } from "@radix-ui/react-icons";
import type { NextPage } from "next";
import Img from "next/image";

import AuthShowcase from "../core/components/AuthShowcase";
import Button from "../core/components/Button";
import Head from "../core/components/Head";
import Layout from "../core/components/Layout";
import Link from "../core/components/Link";
import StyledSeparator from "../core/components/Separator";
import type { Config } from "../core/lib/config";
import getConfig from "../core/lib/config";
import image from "../core/resources/image.jpg";

import { trpc } from "../core/utils/trpc";

const Home: NextPage<{ config: Config }> = ({ config }) => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <Layout config={config}>
      <div className="mt-16">
        <Head
          title={config.site.title}
          defaultTitle={config.site.defaultTitle}
          description={config.site.description}
          canonical={config.site.url}
          image={config.site.image}
          site={config.site.url}
        />
        <h1>Next Starter</h1>
        <h2>tRPC</h2>
        {hello.data ? (
          <pre>
            <code>{JSON.stringify(hello.data, null, 2)}</code>
          </pre>
        ) : (
          "Loading tRPC query..."
        )}
        <div className="mt-4">
          <StyledSeparator orientation="horizontal" />
        </div>

        <h2>Next Auth</h2>
        <AuthShowcase />
        <div className="mt-4">
          <StyledSeparator orientation="horizontal" />
        </div>
        <h2>Text</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="mt-4">
          <StyledSeparator orientation="horizontal" />
        </div>
        <h2>Link</h2>
        <Link href="#">This is a link</Link>
        <div className="mt-4">
          <StyledSeparator orientation="horizontal" />
        </div>
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
        <div className="mt-4">
          <StyledSeparator orientation="horizontal" />
        </div>
        <h2>Image</h2>
        <Img src={image} alt="vercel" />
      </div>
    </Layout>
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
