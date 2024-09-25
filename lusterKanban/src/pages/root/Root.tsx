import { useContext, useEffect, useState } from "react";
import Switch from "../../components/Switch/Switch";
import DesktopLayout from "../../layout/desktop/MainLayout";
import MobileLayout from "../../layout/mobile/MainLayout";
import { ThemeContext } from "../../store/context/theme";

const Root = () => {

  return (
    <div 
    >
      <DesktopLayout>        
        
        <div style={{}}> Hello world</div>
      </DesktopLayout>
      <MobileLayout>
        <div></div>
      </MobileLayout>
    </div>
  );
};

export default Root;
