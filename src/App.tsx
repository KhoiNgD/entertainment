import TextField from "components/TextField/TextField";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";

function App() {
  return (
    <>
      <TextField placeholder="Enter name" error="Can't be empty" />
      <GlobalStyles />
    </>
  );
}

export default App;
