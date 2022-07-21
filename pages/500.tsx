import Head from "../client/components/Head";
import { Config, getConfig } from "../lib/config";

const Custom404: React.FC<{ config: Config }> = ({ config }) => (
  <div>
    <Head
      title={"500 Internal Server Error"}
      defaultTitle={config.site.defaultTitle}
      description={config.site.description}
      canonical={config.site.url}
      image={config.site.image}
      site={config.site.url}
    />
    <h1>500 - Internal Server Error</h1>
  </div>
);

export const getStaticProps = () => ({ props: { config: getConfig() } });

export default Custom404;
