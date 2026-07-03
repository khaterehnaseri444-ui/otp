import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeaderActionsProvider } from "./core/provider/HeaderActionProvider/HeaderAction";
import HomePage from "./pages/home";
import { DarkModeProvider } from "./core/provider/darkMode";
import MainLayout from "./components/partial/MainLayout";
import OTP from "./pages/otp";

function App() {
  return (
    <HeaderActionsProvider>
      <DarkModeProvider>
          <BrowserRouter>
        <MainLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/otp" element={<OTP />} />
            </Routes>
        </MainLayout>
          </BrowserRouter>
      </DarkModeProvider>
    </HeaderActionsProvider>
  );
}

export default App;
