import Head from "../core/components/Head";
import { Config, getConfig } from "../core/lib/config";

const Custom404: React.FC<{ config: Config }> = ({ config }) => (
  <div>
    <Head
      title={"404 Not Found"}
      defaultTitle={config.site.defaultTitle}
      description={config.site.description}
      canonical={config.site.url}
      image={config.site.image}
      site={config.site.url}
    />
    <h1>404 - Not Found</h1>
  </div>
);

export const getStaticProps = () => ({ props: { config: getConfig() } });

export default Custom404;
