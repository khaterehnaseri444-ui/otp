import Icon from "../icon";

function MainHeader() {
  return (
    <div className="w-full h-20 flex items-center justify-center">
      <div className="w-[90%] h-20 flex items-center justify-between">
        <div className="w-9 h-9 bg-[#6F7987] rounded-full flex items-center justify-center">
          <p className="text-[13px] font-semibold">CQ</p>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-9 h-9 bg-[#6F7987] rounded-full flex items-center justify-center">
            <Icon name="cardIcon" />
          </div>
          <div className="w-9 h-9 bg-[#6F7987] rounded-full flex items-center justify-center">
            <Icon name="notification" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
