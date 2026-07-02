import Icon from "../../../components/ui/icon";

function OtpPhoneNumber() {
  return (
    <div className="w-[90%] h-full flex flex-col bg-pink-400">
      <div className="w-full h-15 bg-indigo-400 flex items-center justify-between">
        <Icon name="logo" className="text-white dark:text-green-400" />
        <div className="w-28 h-9 border border-green-300  rounded-[40px] px-1 flex items-center justify-between">
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
          <p className="text-[15px]">Enter your mobile number and we’ll send you a verification code to confirm</p>
        </div>
    </div>
  );
}

export default OtpPhoneNumber;
