import { globalCss } from "../../theme";

const GlobalStyles = globalCss({
  body: {
    background: "$bg",
    color: "$text",
    fontFamily: "$body",
  },
  button: {
    fontFamily: "$body",
    fontWeight: "body",
  },
  html: {
    fontFamily: "$body",
  },
});

const Globals: React.FC = () => {
  GlobalStyles();

  return <></>;
};

export default Globals;
