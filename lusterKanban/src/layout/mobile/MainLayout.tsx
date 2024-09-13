import React, { FC, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const MobileLayout: FC<Props> = ({ children }) => {
   
  return (
    <>
      <div className="mobile" style={{background:'#A9A9A9', height:'100vh'}}>
        {children}
      </div>

      <Outlet />
    </>
  );
};

export default MobileLayout;
