import { PinInput } from "../../components/ui/input/pinInput";

function NewPin() {
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
        <PinInput length={4} showtimer={false}/>
      </div>
    </div>
  );
}

export default NewPin;
