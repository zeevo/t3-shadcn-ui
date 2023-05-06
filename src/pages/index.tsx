import type { NextPage } from "next";
import type { PropsWithChildren } from "react";
import { useConfig } from "~/core/context/config";
import { api } from "~/core/utils/api";
import AuthShowcase from "../components/AuthShowcase";
import Layout from "../components/Layout";
import Code from "../core/components/Code";
import ComponentPreview from "../core/components/ComponentPreview";
import Head from "../core/components/Head";

const NextAuthShowCase = () => {
  return <AuthShowcase />;
};

const TypographyShowcase = () => {
  return (
    <div className="prose w-full max-w-4xl flex-grow">
      <div className="my-20 max-w-3xl">
        <h1 id="heading-1">
          <a aria-hidden="true" tabIndex={-1} href="#heading-1">
            <span className="relative mr-1 -mt-1 inline-block align-middle text-base font-bold opacity-20 hover:opacity-60">
              #
            </span>
          </a>
          Heading 1
        </h1>
        <h2 id="heading-2">
          <a aria-hidden="true" tabIndex={-1} href="#heading-2">
            <span className="relative mr-1 -mt-1 inline-block align-middle text-base font-bold opacity-20 hover:opacity-60">
              #
            </span>
          </a>
          Heading 2
        </h2>
        <h3 id="heading-3">
          <a aria-hidden="true" tabIndex={-1} href="#heading-3">
            <span className="relative mr-1 -mt-1 inline-block align-middle text-base font-bold opacity-20 hover:opacity-60">
              #
            </span>
          </a>
          Heading 3
        </h3>
        <h4 id="heading-4">
          <a aria-hidden="true" tabIndex={-1} href="#heading-4">
            <span className="relative mr-1 -mt-1 inline-block align-middle text-base font-bold opacity-20 hover:opacity-60">
              #
            </span>
          </a>
          Heading 4
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <blockquote>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitati
          </p>
        </blockquote>
        <pre className="language-html">
          <code className="language-html">
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>article{" "}
              </span>
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">{'"'}</span>prose
                <span className="token punctuation">{'"'}</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>h1
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            Garlic bread with cheese: What the science tells us
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>h1
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>p
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            For years parents have espoused the health benefits of eating garlic
            bread with cheese to their children, with the food earning such an
            iconic status in our culture that kids will often dress up as warm,
            cheesy loaf for Halloween.
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>p
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>p
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            But a recent study shows that the celebrated appetizer may be linked
            to a series of rabies cases springing up around the country.
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>p
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"  "}
            <span className="token comment">&lt;!-- ... --&gt;</span>
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>article
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>
        </pre>
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

const Divider: React.FC<PropsWithChildren<{ id: string }>> = ({
  id,
  children,
}) => (
  <div className="divider divider-vertical mt-10" id={id}>
    <span className="text-2xl">{children}</span>
  </div>
);

const Home: NextPage = () => {
  const config = useConfig();

  return (
    <Layout>
      <Head
        title={config.site.title}
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

export default Home;
