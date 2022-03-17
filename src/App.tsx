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
  padding-bottom: 52px;
`;

const Main = styled.main`
  --padding-x: 36px;
  flex: 1;
  padding: 0 var(--padding-x);
  overflow: hidden;
`;

export default App;
