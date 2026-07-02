import { useState } from "react";
import Icon from "../../../components/ui/icon";
import { Input } from "../../../components/ui/input/Input";
import { CustomCheckbox } from "../../../components/ui/input/Checkbox";
import { Button } from "../../../components/ui/Button";
import OTP from "./OTP";
import { useTheme } from "../../../core/provider/darkMode";
import { cn } from "../../../core/lib/cn";
type stepType = "phoneNumber" | "otp";
function OtpPhoneNumber() {
  const { darkMode, modeButton } = useTheme();
  const [step, setStep] = useState<stepType>("phoneNumber");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [termsStatus, setTermsStatus] = useState<boolean>(false);
  const checkboxLabel: string =
    "By authorising CheQ, I can view all of my full loan details, bill and credit information";
  const sendOtpHandler = () => {
    if (!phoneNumber && phoneNumber.length < 10) {
      setError("please enter your phone number");
      return;
    }

    if (!termsStatus) {
      setError("please accept our terms");
      return;
    }
    setLoading(true);
    setError("");
    setStep("otp");
  };
  const prevStep = () => {
    setStep("phoneNumber");
  };
  return (
    <>
      {step === "phoneNumber" && (
        <div className="w-[90%] h-full flex flex-col">
          <div className="w-full h-15 flex items-center justify-between">
            <div>
              <button onClick={modeButton}>
                {darkMode ? <Icon name="theme" /> : <Icon name="logo" />}
              </button>
            </div>
            <div className="w-28 h-9 border border-green-300  dark:border-amber-400 rounded-[40px] px-1 flex items-center justify-between">
              <img
                src="/assets/USA.png"
                className="w-6 h-6 rounded-full"
                alt="usa"
              />
              <p className="text-[12px] font-medium">English</p>
              <Icon name="selectbox" />
            </div>
          </div>
          <div className="w-full h-auto flex flex-col">
            <p className="text-[34px] font-bold">Phone number</p>
            <p className="text-[15px]">
              Enter your mobile number and we’ll send you a verification code to
              confirm
            </p>
          </div>
          <div className="w-full h-20 flex items-center justify-between">
            <div className="w-23 h-15 bg-pink-700 rounded-2xl flex items-center justify-between px-3">
              <img
                src="/assets/USA.png"
                className="w-6 h-6 rounded-full"
                alt="usa"
              />
              <p className="font-medium">+1</p>
              <Icon name="selectbox" />
            </div>
            <div className="w-57 h-15">
              <Input
                type="tel"
                placeholder="000 000 0000"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                error={!!error}
                errorMessage={error}
                variant="outline"
                inputSize="xl"
              />
            </div>
          </div>
          <div className="w-full h-30 bg-green-400 flex">
            <CustomCheckbox
              checked={termsStatus}
              onChange={setTermsStatus}
              label={checkboxLabel}
              LableClassName="text-[13px]"
            />
          </div>
          <Button
            onClick={sendOtpHandler}
            disabled={!phoneNumber || !termsStatus}
            loading={loading}
            fullWidth
            className={cn('h-12 rounded-2xl', phoneNumber && termsStatus ?'bg-white':'bg-#EAEAEA14')}
          >
            Get OTP
          </Button>
        </div>
      )}
      {step === "otp" && <OTP prevStep={prevStep} phoneNumber={phoneNumber} />}
    </>
  );
}

export default OtpPhoneNumber;
