import React, { FC, useContext } from "react";
import { Outlet } from "react-router-dom";
import { EndlessSpring } from "../../store/style";
import AppBar from "../../components/Appbar/AppBar";
import { ThemeContext } from "../../store/context/theme";
import NavigationRail from "../../components/Navigation/NavRail/NavigationRail";
import { Destinations } from "../../pages/navigation/navigation";


type Props = {
  children: React.ReactNode;
};

const DesktopLayout = ({  }) => {  
  return (
    <>
      <div        
      >
        <NavigationRail navrail={{destinations: Destinations}} />
        <AppBar />        
      </div>      
    </>
  );
};

export default DesktopLayout;
