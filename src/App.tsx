import { Header } from "components/Header";
import { DataProvider } from "context/data-context";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";

function App() {
  return (
    <Wrapper>
      <Header />
      <DataProvider>
        <Main>
          <Outlet />
        </Main>
      </DataProvider>
      <GlobalStyles />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  --padding-x: 36px;
  display: flex;
  padding-top: 32px;
  padding-left: 32px;
  padding-bottom: 52px;

  @media (max-width: 1100px) {
    --padding-x: 24px;
    flex-direction: column;
    padding: 24px;
    padding-right: 0;
  }
`;

const Main = styled.main`
  margin-top: 32px;
  flex: 1;
  padding: 0 var(--padding-x);
  overflow: hidden;

  @media (max-width: 1100px) {
    flex-direction: column;
    padding: 0;
    padding-right: var(--padding-x);
  }
`;

export default App;
