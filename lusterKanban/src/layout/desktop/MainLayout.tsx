import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Theme } from "../../store/style";

type Props = {
  children: React.ReactNode;
};

const DesktopLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <div style={{ color: Theme.Nebula.dark.text.color, fontFamily: 'sans-serif'}} className="desktop">
        {children}
      </div>
      <Outlet />
    </>
  );
};

export default DesktopLayout;
