import Icon from "../../components/ui/icon";

function HomePage() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[90%] h-auto flex items-center justify-center flex-col">
        <div className="w-full h-30 flex flex-col">
          <div className="flex justify-between">
            <p className="font-bold text-[34px] dark:text-[#EAEAEA4D]">$0.00</p>
            <div className="flex items-center gap-1">
              <Icon name="null" />
              <p className="text-[12px] dark:text-[#EAEAEA4D]">No due found</p>
            </div>
          </div>
          <p className="text-[15px] dark:text-[#EAEAEA4D]">Add new card to see all your pending and upcoming due and amazing rewards</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
