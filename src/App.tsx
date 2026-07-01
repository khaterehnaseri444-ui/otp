import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeaderActionsProvider } from "./core/provider/HeaderActionProvider/HeaderAction";
import HomePage from "./pages/home";
import { DarkModeProvider } from "./core/provider/darkMode";

function App() {
  return (
    <HeaderActionsProvider>
      <DarkModeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </DarkModeProvider>
    </HeaderActionsProvider>
  );
}

export default App;
