import React, { FC, useContext } from "react";
import { Outlet } from "react-router-dom";
import { EndlessSpring } from "../../store/style";
import AppBar from "../../components/AppBar";
import { ThemeContext } from "../../store/context/theme";

type Props = {
  children: React.ReactNode;
};

const DesktopLayout: FC<Props> = ({ children }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <>
      <div
        className="desktop"        
      >
        <AppBar />
        {children}
      </div>
      <Outlet />
    </>
  );
};

export default DesktopLayout;
