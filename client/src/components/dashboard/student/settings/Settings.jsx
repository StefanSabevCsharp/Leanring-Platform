import { useState } from "react";
import Password from "./password/Password";
import ProfileSettings from "./profileSettings/ProfileSettings";
import SocialIcon from "./socialIcon/SocialIcon";

export default function Settings({ user }) {
  const [activeTab,setActiveTab] = useState(0);
  const tabs = ["Profile","Password","Social Icon"];
  const tabContents = [<ProfileSettings />, <Password />, <SocialIcon />];
  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const baseStyle = "is-checked relative py-10px px-5 md:py-15px lg:px-10 font-bold uppercase text-sm lg:text-base text-blackColor bg-whiteColor shadow-overview-button dark:bg-whiteColor-dark dark:text-blackColor-dark before:w-0 before:h-0.5 before:absolute before:-bottom-0.5 lg:before:bottom-0 before:left-0 before:bg-primaryColor hover:before:w-full before:transition-all before:duration-300 whitespace-nowrap";
  
  const activeStyle = baseStyle + " active";

  return (
    <div className="lg:col-start-4 lg:col-span-9">
  {/* setting area */}
  <div className="p-10px md:px-10 md:py-50px mb-30px bg-whiteColor dark:bg-whiteColor-dark shadow-accordion dark:shadow-accordion-dark rounded-5">
    {/* heading */}
    <div className="mb-6 pb-5 border-b-2 border-borderColor dark:border-borderColor-dark">
      <h2 className="text-2xl font-bold text-blackColor dark:text-blackColor-dark">
        My Profile
      </h2>
    </div>
    <div className="tab">
      <div className="tab-links flex flex-wrap mb-10px lg:mb-50px rounded gap-10px">
        <button onClick={() => handleTabChange(0)} className={activeTab== 0 ? activeStyle : baseStyle}>
          PROFILE
        </button>
        <button onClick={() => handleTabChange(1)} className={activeTab== 1 ? activeStyle : baseStyle}>
          PASSWORD
        </button>
        {/* <button  onClick={() => handleTabChange(2)} className={activeTab== 2 ? activeStyle : baseStyle}>
          SOCIAL ICON
        </button> */}
      </div>
      <div className="tab-contents">
        {tabContents[activeTab]}
      </div>
    </div>
  </div>
</div>

  );
}