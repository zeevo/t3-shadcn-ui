import type { NextPage } from "next";
import type { PropsWithChildren, ReactNode } from "react";
import getConfig from "~/core/lib/config";
import { api } from "~/core/utils/api";
import Layout from "../components/Layout";
import AuthShowcase from "../core/components/AuthShowcase";
import Button from "../core/components/Button";
import Code from "../core/components/Code";
import ComponentPreview from "../core/components/ComponentPreview";
import Head from "../core/components/Head";
import Link from "../core/components/Link";
import type { Config } from "../core/lib/config";

const NextAuthShowCase = () => {
  return <AuthShowcase />;
};

interface ActiveProps {
  setActive: (active: boolean) => void;
  active: boolean;
}

const TypographyShowcase = () => {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
};

const Links = ({ setActive, active }: ActiveProps) => {
  return (
    <div className="flex items-center gap-2">
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
  );
};

const ColorsShowcase = () => (
  <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
    <div className="rounded bg-neutral text-center font-bold">Default</div>
    <div className="bg-primary text-center font-bold">Primary</div>
    <div className="bg-secondary text-center font-bold">Secondary</div>
    <div className="bg-accent text-center font-bold">Accent</div>
    <div className="bg-info text-center font-bold">Info</div>
    <div className="bg-success text-center font-bold ">Success</div>
    <div className="bg-warning text-center font-bold">Warning</div>
    <div className="bg-error text-center font-bold">Error</div>
  </div>
);

const LinksShowcase = ({ setActive, active }: ActiveProps) => (
  <div>
    <Links setActive={setActive} active={active} />
    <h3>Normal</h3>
    <Link active={active} href="#">
      This is a link
    </Link>
    <h3>Soft</h3>
    <Link active={active} variant="soft" href="#">
      This is a link
    </Link>
  </div>
);

function TRPCShowcase() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <div>
      {hello.data ? (
        <Code>{JSON.stringify(hello.data, null, 2)}</Code>
      ) : (
        "Loading tRPC query..."
      )}
    </div>
  );
}

const SideBarLink: React.FC<PropsWithChildren<{ href: string }>> = ({
  children,
  href,
}) => (
  <a className="flex gap-4" href={href}>
    {children}
  </a>
);

const Divider: React.FC<PropsWithChildren<{ id: string }>> = ({
  id,
  children,
}) => (
  <div className="divider divider-vertical mt-10" id={id}>
    <span className="text-2xl">{children}</span>
  </div>
);

const Home: NextPage<{ config: Config }> = ({ config }) => {
  return (
    <Layout config={config}>
      <Head
        title={config.site.title}
        defaultTitle={config.site.defaultTitle}
        description={config.site.description}
        canonical={config.site.url}
        image={config.site.image}
        site={config.site.url}
      />
      <Divider id="trpc">TRPC</Divider>
      <TRPCShowcase />
      <Divider id="auth">Next Auth</Divider>
      <NextAuthShowCase />
      <Divider id="colors">Colors</Divider>
      <ColorsShowcase />
      <Divider id="typography">Typography</Divider>
      <TypographyShowcase />
      <Divider id="daisyui">DaisyUI</Divider>
      <ComponentPreview />
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
