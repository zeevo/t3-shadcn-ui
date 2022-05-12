import { css, Global, useTheme } from "@emotion/react";

const Globals: React.FC = () => {
  const theme = useTheme();

  console.log(theme);
  return (
    <Global
      styles={css`
        body {
          color: ${theme.colors.text};
          background: ${theme.colors.background};
        }
        svg {
          display: block;
        }
      `}
    />
  );
};

export default Globals;
