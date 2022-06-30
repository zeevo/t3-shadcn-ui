import { css, Global, useTheme } from "@emotion/react";

const Globals: React.FC = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        body {
          color: ${theme.colors.text};
          background: ${theme.colors.bg};
        }
        svg {
          display: block;
        }
      `}
    />
  );
};

export default Globals;
