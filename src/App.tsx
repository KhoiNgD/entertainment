import { Header } from "components/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";

function App() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <GlobalStyles />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  padding-top: 32px;
  padding-left: 32px;
`;

const Main = styled.main`
  flex: 1;
  padding: 0 36px;
  overflow: hidden;
`;

export default App;
