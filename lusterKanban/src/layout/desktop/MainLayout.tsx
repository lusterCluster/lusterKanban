import React, { FC, useContext } from "react";
import { Outlet } from "react-router-dom";
import { EndlessSpring } from "../../store/style";
import AppBar from "../../components/Appbar/AppBar";
import { ThemeContext } from "../../store/context/theme";
import NavigationRail from "../../components/Navigation/NavRail/NavigationRail";
import { Destinations } from "../mobile/MainLayout";

type Props = {
  children: React.ReactNode;
};

const DesktopLayout: FC<Props> = ({ children }) => {  
  return (
    <>
      <div
        className="desktop"        
      >
        <NavigationRail navrail={{destinations: Destinations}} />
        <AppBar />
        {children}
      </div>
      <Outlet />
    </>
  );
};

export default DesktopLayout;
