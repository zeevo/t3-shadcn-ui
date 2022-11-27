const clr = (property, color, attrs = []) => {
  const name = `${property}-${color}`;
  if (attrs.length) {
    return attrs
      .map((attr) => [`${attr}:${name}-light`, `${attr}:dark:${name}-dark`])
      .flat()
      .join(" ");
  }

  return [`${name}-light`, `dark:${name}-dark`].join(" ");
};

const args = [process.argv[2], process.argv[3]];

if (process.argv[4]) {
  const rest = process.argv.slice(4).map((ele) => ele);
  args.push(rest);
}

console.log(clr(args[0], args[1], args[2]));
