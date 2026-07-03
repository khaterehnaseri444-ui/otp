import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeaderActionsProvider } from "./core/provider/HeaderActionProvider/HeaderAction";
import { DarkModeProvider } from "./core/provider/darkMode";
import MainLayout from "./components/partial/MainLayout";
import OTP from "./pages/otp";
import Signup from "./pages/signup";
import NewPin from "./pages/newPin";
import Notification from "./pages/notification";
import PhonePage from "./pages/phone";
import HomePage from "./pages/home";

function App() {
  return (
    <HeaderActionsProvider>
      <DarkModeProvider>
        <BrowserRouter>
          <MainLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/digit/phone" element={<PhonePage />} />
              <Route path="/digit/otp" element={<OTP />} />
              <Route path="/digit/signup" element={<Signup />} />
              <Route path="/digit/newPin" element={<NewPin />} />
              <Route path="/notification" element={<Notification />} />
            </Routes>
          </MainLayout>
        </BrowserRouter>
      </DarkModeProvider>
    </HeaderActionsProvider>
  );
}

export default App;
