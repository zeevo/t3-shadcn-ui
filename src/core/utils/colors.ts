export const clr = (color: string, attrs: string[]) => {
  if (attrs.length) {
    return attrs
      .map((attr) => [`${attr}:${color}-light`, `${attr}:${color}-dark`])
      .flat();
  }

  return [`${color}-light`, `${color}-dark`];
};
