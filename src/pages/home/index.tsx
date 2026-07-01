import Icon from "../../components/ui/icon";

function HomePage() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[90%] h-15 bg-indigo-400 flex items-center justify-between">
        <Icon name="logo" className="text-white" />
        <div className="w-28 h-9 border border-green-300  rounded-[40px] px-1 flex items-center justify-between">
            <img src="/assets/USA.png" className="w-6 h-6 rounded-full" alt="usa"/>
            <p className="text-[12px] font-medium">English</p>
          <Icon name="selectbox" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
