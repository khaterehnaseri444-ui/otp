import { useState } from "react";
import Icon from "../../components/ui/icon";
import { Input } from "../../components/ui/input/Input";
import { CustomCheckbox } from "../../components/ui/input/Checkbox";
import { Button } from "../../components/ui/Button";
import OTP from "./OTP";
import { cn } from "../../core/lib/cn";
import { useNavigate } from "react-router-dom";
type stepType = "phoneNumber" | "otp";
function OtpPhoneNumber() {
  const navigate=useNavigate()
  const [step, setStep] = useState<stepType>("phoneNumber");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [termsStatus, setTermsStatus] = useState<boolean>(false);
  const checkboxLabel: string =
    "By authorising CheQ, I can view all of my full loan details, bill and credit information";
  const sendOtpHandler = () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      setError("please enter your phone number");
      return;
    }

    if (!termsStatus) {
      setError("please accept our terms");
      return;
    }
    setLoading(true);
    setError("");
    navigate('/otp')
    // setStep("otp");
  };
  // const prevStep = () => {
  //   setStep("phoneNumber");
  // };
  return (
    <>
      {step === "phoneNumber" && (
        <div className="w-[90%] h-full flex flex-col">
          <div className="w-full h-auto flex flex-col">
            <p className="text-[34px] font-bold">Phone number</p>
            <p className="text-[15px]">
              Enter your mobile number and we’ll send you a verification code to
              confirm
            </p>
          </div>
          <div className="w-full h-20 flex items-center justify-between">
            <div className="w-23 h-15 dark:bg-[#ffffff2e] bg-[#0000000A] rounded-2xl flex items-center justify-between px-3">
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
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  setError("");
                }}
                error={!!error}
                errorMessage={error}
                variant="outline"
                inputSize="xl"
                className="dark:bg-[#ffffff2e] bg-[#0000000A] border-0 rounded-2xl"
              />
            </div>
          </div>
          <div className="w-full h-30 flex">
            <CustomCheckbox
              checked={termsStatus}
              onChange={setTermsStatus}
              label={checkboxLabel}
              LableClassName="text-[13px] dark:text-[#EAEAEA99]"
            />
          </div>
          <Button
            onClick={sendOtpHandler}
            disabled={!phoneNumber || !termsStatus}
            loading={loading}
            fullWidth
            className={cn(
              "h-12 rounded-2xl",
              phoneNumber && termsStatus
                ? "dark:bg-white dark:text-black bg-black text-white"
                : "text-white dark:bg-white dark:text-black bg-black",
            )}
          >
            Get OTP
          </Button>
          {error && !loading && <p className="text-red-50">{error}</p>}
        </div>
      )}
      {/* {step === "otp" && <OTP prevStep={prevStep} phoneNumber={phoneNumber} />} */}
    </>
  );
}

export default OtpPhoneNumber;
