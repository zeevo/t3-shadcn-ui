import { PropsWithChildren } from "react";
import styled from "../../theme";
import { Config } from "../lib/config";
import Navbar from "./Navbar";

const Container = styled("div", {
  margin: "10px 10px 10px 10px",
});

const Flex = styled("div", {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  "@small": {
    maxWidth: "40rem",
    margin: "auto",
  },
  width: "100%",
});

const Main = styled("main", {
  width: "100%",
  margin: "0 auto",
});

const Auto = styled("div", {
  marginLeft: "auto",
  marginRight: "auto",
});

const Layout: React.FC<PropsWithChildren<{ config: Config; page: string }>> = ({
  config,
  page,
  children,
}) => {
  return (
    <Container>
      <Flex>
        <Navbar config={config.navbar} page={page} />
        <Main>
          <Auto>{children}</Auto>
        </Main>
      </Flex>
    </Container>
  );
};

export default Layout;
