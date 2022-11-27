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
