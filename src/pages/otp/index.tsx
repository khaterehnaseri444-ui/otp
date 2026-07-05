import { useEffect, useState } from "react";
import { PinInput } from "../../components/ui/input/pinInput";
import { useNavigate } from "react-router-dom";

const otp_code = "2124";
function OTP() {
  const navigate = useNavigate();
  const [otpError, setOtpError] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>("");
  const [trueCode, setTrueCode] = useState<boolean>(false);

  const validationOtp = (code: string) => {
    if (code.length < 4) {
      setOtpError(true);
      return false;
    }
    if (code === otp_code) {
      return true;
    } else {
      setOtpError(true);
      return false;
    }
  };

  useEffect(() => {
    if (otp.length === 4 && !trueCode) {
      setTrueCode(true);
      const validOtp = validationOtp(otp);
      if (validOtp) {
        navigate("/digit/signup");
      } else {
        setTrueCode(false);
      }
    }
  }, [otp, trueCode, navigate]);
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
          showtimer={true}
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
