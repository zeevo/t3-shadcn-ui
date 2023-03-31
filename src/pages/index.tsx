import { Bell } from "lucide-react";
import type { NextPage } from "next";
import type { PropsWithChildren, ReactNode } from "react";
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
import getConfig from "~/core/lib/config";
import { api } from "~/core/utils/api";

const H2: React.FC<{ children: ReactNode }> = ({ children }) => (
  <h2 className="mt-4 mb-4">{children}</h2>
);

const NextAuthShowCase = () => {
  return (
    <div>
      <H2>Next Auth</H2>
      <AuthShowcase />
    </div>
  );
};

interface ActiveProps {
  setActive: (active: boolean) => void;
  active: boolean;
}

const TypographyShowcase = () => {
  return (
    <div id="typography">
      <H2>Typography</H2>
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
      <H2>Link</H2>
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
  <div id="colors">
    <h3 className="text-2xl">Colors</h3>
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
  </div>
);

const LinksShowcase = ({ setActive, active }: ActiveProps) => (
  <div id="links">
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
    <div id="#trpc">
      <H2>tRPC</H2>
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

const Home: NextPage<{ config: Config }> = ({ config }) => {
  const [linkActive, setLinkActive] = useState<boolean>(false);

  return (
    <Layout
      config={config}
      sideNav={
        <>
          <div className="sticky top-0 z-20 hidden items-center gap-2  px-4 py-2 text-4xl font-bold backdrop-blur lg:flex">
            {config.site.title}
          </div>
          <ul className="menu menu-compact flex flex-col p-0 px-4">
            <li>
              <SideBarLink href="#trpc">TRPC</SideBarLink>
            </li>
            <li>
              <SideBarLink href="#auth">Next-Auth</SideBarLink>
            </li>
            <li>
              <SideBarLink href="#colors">Colors</SideBarLink>
            </li>
            <li>
              <SideBarLink href="#typography">Typography</SideBarLink>
            </li>
            <li>
              <SideBarLink href="#links">Links</SideBarLink>
            </li>
            <li>
              <SideBarLink href="#daisyui">DaisyUI</SideBarLink>
            </li>
          </ul>
        </>
      }
    >
      <Head
        title={config.site.title}
        defaultTitle={config.site.defaultTitle}
        description={config.site.description}
        canonical={config.site.url}
        image={config.site.image}
        site={config.site.url}
      />
      <TRPCShowcase />
      <NextAuthShowCase />
      <ColorsShowcase />
      <TypographyShowcase />
      <LinksShowcase active={linkActive} setActive={setLinkActive} />
      <H2>DaisyUI</H2>
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
