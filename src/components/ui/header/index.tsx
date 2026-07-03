import { useLocation } from "react-router-dom";
import { useTheme } from "../../../core/provider/darkMode";
import Icon from "../icon";
import MainHeader from "./MainHeader";

function Header() {
  const location = useLocation();
  const digitHeader = location.pathname.startsWith("/digit/");
  const { darkMode, modeButton } = useTheme();
  return (
    <div className="w-full h-20 flex items-center justify-center">
      <div className="w-[90%] h-15 flex items-center justify-between">
        {digitHeader ? (
          <div className="w-full flex items-center justify-between">
            <button onClick={modeButton}>
              {darkMode ? <Icon name="theme" /> : <Icon name="logo" />}
            </button>
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
          // <div className="w-[90%] h-20  flex items-center justify-between">
          //   <div
          //     //   onClick={prevStep}
          //     className="w-12 h-8 flex items-center justify-center rounded-[999px] bg-[#0000000A] dark:bg-[#00000033]  "
          //   >
          //     <Icon name="back" />
          //   </div>
          //   <div className="w-28 h-9 border border-[#00000033]  dark:border-[#EAEAEA3D]  rounded-[40px] px-1 flex items-center justify-between">
          //     <img
          //       src="/assets/USA.png"
          //       className="w-6 h-6 rounded-full"
          //       alt="usa"
          //     />
          //     <p className="text-[12px] font-medium">English</p>
          //     <Icon name="selectbox" />
          //   </div>
          // </div>
          <MainHeader />
        )}
      </div>
    </div>
  );
}

export default Header;
