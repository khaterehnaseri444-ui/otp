import { useState } from "react";
import { PinInput } from "../../components/ui/input/pinInput";
import { getCookie, setCookie } from "../../core/lib/cookie";
import { useNavigate } from "react-router-dom";

function NewPin() {
  const navigate = useNavigate();
  const [newPin, setNewPin] = useState<string>("");
  const getNameFromCookie = getCookie("fullName");

  const pinHandler = (pin: string) => {
    setNewPin(pin);

    if (pin.length === 4) {
      const userInformation = {
        fullName: getNameFromCookie,
        newPin: pin,
      };
      setCookie("userInformation", JSON.stringify(userInformation), 1);
    console.log(document.cookie);
    console.log(getCookie("userInformation"));
      navigate("/notification");
    }
  };
  return (
    <div className="w-full h-screen flex justify-start items-center flex-col">
      <div className="w-[90%] h-30 flex flex-col">
        <p className="text-[34px] font-bold">Create 4 digit pin</p>
        <p className="text-[15px] dark:text-[#EAEAEA99]">
          We recommend you to set 4 digit pin for secure and safe mobile
          transaction
        </p>
      </div>
      <div className="w-[90%] h-30">
        <PinInput
          length={4}
          showtimer={false}
          value={newPin}
          onChange={pinHandler}
        />
      </div>
    </div>
  );
}

export default NewPin;
