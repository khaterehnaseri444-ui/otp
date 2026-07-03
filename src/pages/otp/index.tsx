import { useState } from "react";
import { PinInput } from "../../components/ui/input/pinInput";

const otp_code = "2124";
function OTP({
//   phoneNumber,
}: {
//   phoneNumber: string;
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
      <div className="w-[90%] h-auto flex flex-col">
        <p className="text-[34px] font-bold">4 digit code</p>
        <p className="text-[15px]">
          Please enter 4digit OTP verification code sent to +1 
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
