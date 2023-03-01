import type { PropsWithChildren } from "react";
import NextHead from "next/head";

interface HeadProps {
  title?: string;
  defaultTitle?: string;
  canonical?: string;
  description?: string;
  image?: string;
  site?: string;
}

const Head: React.FC<PropsWithChildren<HeadProps>> = ({
  canonical,
  defaultTitle,
  description,
  site,
  image,
  title,
  children,
}) => {
  const formattedTitle = defaultTitle
    ? `${title || ""} | ${defaultTitle}`
    : title;
  const formattedImage = !image?.startsWith("http")
    ? `${site || ""}${image || ""}`
    : image;
  return (
    <NextHead>
      <title>{formattedTitle}</title>
      <link rel="canonical" href={canonical} />
      <meta name="description" content={description} />
      <meta property="og:title" content={formattedTitle} key="og:title" />
      <meta property="og:url" content={canonical} key="og:url" />
      <meta property="og:image" content={formattedImage} key="og:image" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      {children}
    </NextHead>
  );
};

export default Head;
