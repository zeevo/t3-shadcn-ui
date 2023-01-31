import { Bell } from "lucide-react";
import type { NextPage } from "next";
import type { ReactNode } from "react";
import { useState } from "react";
import AuthShowcase from "../core/components/AuthShowcase";
import Button from "../core/components/Button";
import Code from "../core/components/Code";
import ComponentPreview from "../core/components/ComponentPreview";
import Head from "../core/components/Head";
import Layout from "../core/components/Layout";
import Link from "../core/components/Link";
import StyledSeparator from "../core/components/Separator";
import type { Config } from "../core/lib/config";
import getConfig from "../core/lib/config";
import { trpc } from "../core/utils/trpc";

const H2: React.FC<{ children: ReactNode }> = ({ children }) => (
  <h2 className="mt-4 mb-4">{children}</h2>
);

const Home: NextPage<{ config: Config }> = ({ config }) => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  const [active, setActive] = useState<boolean>(false);

  const [linkActive, setLinkActive] = useState<boolean>(false);

  return (
    <Layout config={config}>
      <div className="prose mt-8">
        <Head
          title={config.site.title}
          defaultTitle={config.site.defaultTitle}
          description={config.site.description}
          canonical={config.site.url}
          image={config.site.image}
          site={config.site.url}
        />
        <h1>Next Starter</h1>
        <div>
          <H2>tRPC</H2>
          {hello.data ? (
            <Code>{JSON.stringify(hello.data, null, 2)}</Code>
          ) : (
            "Loading tRPC query..."
          )}
        </div>
        <div className="mt-4">
          <StyledSeparator orientation="horizontal" />
        </div>
        <div>
          <H2>Next Auth</H2>
          <AuthShowcase />
        </div>
        <div className="mt-4">
          <StyledSeparator orientation="horizontal" />
        </div>
        <div>
          <H2>Typography</H2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="mt-4">
          <StyledSeparator orientation="horizontal" />
        </div>
        <div className="flex items-center gap-2">
          <H2>Link</H2>
          <div>
            <Button
              variant="outlined"
              className="btn-xs"
              onClick={() => setLinkActive(!linkActive)}
              active={linkActive}
            >
              <span className="p-2">active</span>
            </Button>
          </div>
        </div>
        <h3>Normal</h3>
        <Link active={linkActive} href="#">
          This is a link
        </Link>
        <h3>Soft</h3>
        <Link active={linkActive} variant="soft" href="#">
          This is a link
        </Link>
        <div className="mt-4">
          <StyledSeparator orientation="horizontal" />
        </div>
        <div className="flex items-center gap-2">
          <H2>Button</H2>
          <div>
            <Button
              variant="outlined"
              className="btn-xs"
              onClick={() => setActive(!active)}
              active={active}
            >
              <span className="p-2">active</span>
            </Button>
          </div>
        </div>
        <h3>Text</h3>
        <div className="flex">
          <div className="mr-2">
            <Button variant="text" active={active}>
              <Bell size={20} />
            </Button>
          </div>
          <div className="flex">
            <Button variant="text" active={active} fillWidth>
              Button
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
            <Button variant="soft" active={active}>
              <Bell size={20} />
            </Button>
          </div>
          <div style={{ flex: 1 }}>
            <Button variant="soft" active={active} fillWidth>
              Button
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
            <Button variant="outlined" active={active}>
              <Bell size={20} />
            </Button>
          </div>
          <div className="flex-1">
            <Button variant="outlined" active={active} fillWidth>
              Button
            </Button>
          </div>
        </div>
        <h3>Inverted Outlined</h3>
        <div className="flex">
          <div className="mr-2">
            <Button variant="outlined-inverted" active={active}>
              <Bell size={20} />
            </Button>
          </div>
          <div style={{ flex: 1 }}>
            <Button variant="outlined-inverted" active={active} fillWidth>
              Button
            </Button>
          </div>
        </div>
        <h3>Contained</h3>
        <div className="flex">
          <div className="mr-2">
            <Button variant="contained" active={active}>
              <Bell size={20} />
            </Button>
          </div>
          <div style={{ flex: 1 }}>
            <Button variant="contained" active={active} fillWidth>
              Button
            </Button>
          </div>
        </div>
        <h3>Unstyled</h3>
        <div className="flex">
          <div className="mr-2">
            <Button variant="unstyled" active={active}>
              <Bell size={20} />
            </Button>
          </div>
          <div style={{ flex: 1 }}>
            <Button variant="unstyled" active={active} fillWidth>
              Button
            </Button>
          </div>
        </div>
        <div className="mt-4">
          <StyledSeparator orientation="horizontal" />
        </div>
        <H2>DaisyUI</H2>
        <ComponentPreview />
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
