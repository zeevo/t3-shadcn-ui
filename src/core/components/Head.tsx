import NextHead from "next/head";
import type { PropsWithChildren } from "react";

interface HeadProps {
  title: string;
  subtitle?: string;
  canonical: string;
  description: string;
  image?: string;
  site?: string;
}

const getTitle = (title: string, subtitle?: string) => {
  if (subtitle) {
    return subtitle ? `${title || ""} | ${subtitle}` : title;
  }
  return title;
};

const Head: React.FC<PropsWithChildren<HeadProps>> = ({
  canonical,
  subtitle,
  description,
  site,
  image,
  title,
  children,
}) => {
  const formattedTitle = getTitle(title, subtitle);

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
