import Helmet from "react-helmet";
import styled from "@emotion/styled";
import ColorModeToggle from "../context/ColorModeToggle";

const Container = styled.div`
  margin: 0 10px 10px 10px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 40rem;
  margin: auto;
`;

const Main = styled.main`
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
`;

const Auto = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const Layout = (props: any) => {
  return (
    <Container>
      <Flex>
        <Helmet defaultTitle="Radix Starter" />
        <Nav>
          <h1>Radix Starter</h1>
          <ColorModeToggle />
        </Nav>
        <Main>
          <Auto>{props.children}</Auto>
        </Main>
      </Flex>
    </Container>
  );
};

export default Layout;
