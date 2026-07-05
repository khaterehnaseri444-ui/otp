import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import Icon from "../../components/ui/icon";

function Notification() {
  return (
    <div className="w-full h-180 flex items-center justify-center flex-col gap-5">
      <Icon name="notif" size={250}/>
      <p className="text-[34px] font-bold">Don’t miss a beat</p>
      <p className="text-[15px] text-center w-[90%] dark:text-[#EAEAEA99]">Get notified about spending, security, wealth, market movements, discounts and deals</p>
      <Button className="w-49 h-12 rounded-[999px] dark:bg-white bg-black font-medium text-white dark:text-black">
        Enable Notification
      </Button>
      <Link to={"/"}>
        <p className="text-[15px] dark:text-[#EAEAEA99]">remind me later</p>
      </Link>
    </div>
  );
}

export default Notification;
