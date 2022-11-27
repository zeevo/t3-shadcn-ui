/**
 * WARNING: Usage of this can lead to unexpected results if generated classes are purged by Tailwind
 * Consider using it only to generate the correct light/dark classes, then hardcode them in.
 * Until Tailwind purge gets faster, this is a reasonable workaround.
 */
export const clr = (property: string, color: string, attrs: string[] = []) => {
  const name = `${property}-${color}`;
  if (attrs.length) {
    return attrs
      .map((attr) => [`${attr}:${name}-light`, `${attr}:dark:${name}-dark`])
      .flat()
      .join(" ");
  }

  return [`${name}-light`, `dark:${name}-dark`].join(" ");
};
