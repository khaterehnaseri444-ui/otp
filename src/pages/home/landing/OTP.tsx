import { useState } from "react";
import Icon from "../../../components/ui/icon";
import { PinInput } from "../../../components/ui/input/pinInput";

const otp_code = "2124";
function OTP({
  prevStep,
  phoneNumber,
}: {
  prevStep: () => void;
  phoneNumber: string;
}) {
  const [otpError, setOtpError] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const resendOtpHandler = () => {};
  const validationOtp = (code: string) => {
    if (code.length < 4) {
      setOtpError(true);
      return;
    }
    if (code === otp_code) {
      setIsLogin(true);
    } else {
      setOtpError(true);
    }
  };

  return (
    <div className="w-full h-screen  flex items-center flex-col">
      <div className="w-[90%] h-20  flex items-center justify-between">
        <div
          onClick={prevStep}
          className="w-12 h-8 flex items-center justify-center rounded-[999px] bg-[#0000000A] dark:bg-[#00000033]  "
        >
          <Icon name="back"/>
        </div>
        <div className="w-28 h-9 border border-[#00000033]  dark:border-[#EAEAEA3D]  rounded-[40px] px-1 flex items-center justify-between">
          <img
            src="/assets/USA.png"
            className="w-6 h-6 rounded-full"
            alt="usa"
          />
          <p className="text-[12px] font-medium">English</p>
          <Icon name="selectbox" />
        </div>
      </div>
      <div className="w-[90%] h-auto flex flex-col">
        <p className="text-[34px] font-bold">4 digit code</p>
        <p className="text-[15px]">
          Please enter 4digit OTP verification code sent to +1 {phoneNumber}
        </p>
      </div>
      <div className="w-[90%] h-40 flex items-center">
        <PinInput
          length={4}
          reSendCodeHandler={resendOtpHandler}
        //   contactInformation={phoneNumber}
          onChange={(code) => {
            setOtp(code);
            setOtpError(false);
            if (code.length === 4) {
              validationOtp(code);
            }
          }}
          error={otpError}
          value={otp}
        />
      </div>
    </div>
  );
}

export default OTP;
