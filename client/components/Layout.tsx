import Helmet from "react-helmet";
import styled from "@emotion/styled";
import Navbar from "./Navbar";

const Container = styled.div`
  margin: 10px 10px 10px 10px;
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
        <Helmet defaultTitle="Next Starter" />
        <Navbar />
        <Main>
          <Auto>{props.children}</Auto>
        </Main>
      </Flex>
    </Container>
  );
};

export default Layout;
