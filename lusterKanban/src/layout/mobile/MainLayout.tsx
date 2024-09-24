import React, { FC, useContext } from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../../components/Navigation/NavigationBar";
import { ThemeContext } from "../../store/context/theme";

type Props = {
  children: React.ReactNode;
};

const MobileLayout: FC<Props> = ({ children }) => {  
  return (
    <>
      <div className="mobile"        
      >
        <NavigationBar/>
        {children}
      </div>

      <Outlet />
    </>
  );
};

export default MobileLayout;
