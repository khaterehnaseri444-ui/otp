import { useLocation } from "react-router-dom";
import { useTheme } from "../../../core/provider/darkMode";
import Icon from "../icon";
import MainHeader from "./MainHeader";
const noLogoPages = ["/digit/signup", "/digit/otp"];
function Header() {
  const location = useLocation();
  const digitHeader = location.pathname.startsWith("/digit/");
  const noLogoHeader = noLogoPages.includes(location.pathname);
  const { darkMode, modeButton } = useTheme();
  const prevStep=()=>{
    window.history.back()
  }
  return (
    <div className="w-full h-20 flex items-center justify-center">
      <div className="w-[90%] h-15 flex items-center justify-between">
        {digitHeader ? (
          <div className="w-full flex items-center justify-between">
            {noLogoHeader ? (
              <div
                  onClick={prevStep}
                className="w-12 h-8 flex items-center justify-center rounded-[999px] bg-[#0000000A] dark:bg-[#00000033]  "
              >
                <Icon name="back" />
              </div>
            ) : (
              <button onClick={modeButton}>
                {darkMode ? <Icon name="theme" /> : <Icon name="logo" />}
              </button>
            )}
            <div className="w-28 h-9 border border-[#00000033]  dark:border-[#EAEAEA3D] rounded-[40px] px-1 flex items-center justify-between">
              <img
                src="/assets/USA.png"
                className="w-6 h-6 rounded-full"
                alt="usa"
              />
              <p className="text-[12px] font-medium">English</p>
              <Icon name="selectbox" />
            </div>
          </div>
        ) : (
          <MainHeader />
        )}
      </div>
    </div>
  );
}

export default Header;
