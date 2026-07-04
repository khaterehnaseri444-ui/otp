import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import Icon from "../../components/ui/icon";

function Notification() {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-5">
      <Icon name="notif" />
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
