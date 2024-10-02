import React, { FC, useContext } from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../../components/Navigation/NavigationBar";
import { ThemeContext } from "../../store/context/theme";
import ColorMode from "../../components/Buttons/ColorMode";
import { DestinationsType } from "../../components/Navigation/interfaces";

type Props = {
  children: React.ReactNode;
};

export const Destinations:DestinationsType = [
  {
    icon: "home",
    path: "/",
    label: "Home",
  },
  {
    icon: "dashboard",
    path: "/1",
    label: "Boards",
  },
  {
    icon: "person",
    path: "/2",
    label: "Projects",
  },
  {
    icon: "task_alt",
    path: "/3",
    label: "Issues",
  },
];
const MobileLayout: FC<Props> = ({ children }) => {  
  return (
    <>
      <div className="mobile"        
      >
        <div style={{background: "#eee1", borderRadius:100, width:"30px", height:"30px"}} >

        <ColorMode/>
        <p style={{fontSize:32}} >Hola Mundo</p>
        </div>
        <NavigationBar navbar={{destinations: Destinations}} />
        {children}
      </div>

      <Outlet />
    </>
  );
};

export default MobileLayout;
