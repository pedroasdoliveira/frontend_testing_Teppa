import { BrowserRouter } from "react-router-dom";
import theme from "./assets/styles/theme";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Router from "./routes/routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
