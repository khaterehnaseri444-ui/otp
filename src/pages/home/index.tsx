import { useTheme } from "../../core/provider/darkMode";
import OtpPhoneNumber from "./landing/OtpPhoneNumber";

function HomePage() {
  const { darkMode, modeButton } = useTheme();
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <div>
        <button onClick={modeButton}>{darkMode ? "*" : ")"}</button>
      </div>
      <OtpPhoneNumber />
    </div>
  );
}

export default HomePage;
