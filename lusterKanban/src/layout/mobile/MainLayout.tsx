import React, { FC, useContext } from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../../components/Navigation/NavigationBar";
import { ThemeContext } from "../../store/context/theme";
import ColorMode from "../../components/Buttons/ColorMode";
import usePallete from "../../hooks/theme/usePallete";

type Props = {
  children: React.ReactNode;
};

const MobileLayout: FC<Props> = ({ children }) => {  
  const {getVariant} = usePallete()
  return (
    <>
      <div className="mobile"        
      >
        <div style={{background:getVariant("400"), borderRadius:100, width:"30px", height:"30px"}} >

        <ColorMode/>
        <p style={{fontSize:32}} >Hola Mundo</p>
        </div>
        <NavigationBar/>
        {children}
      </div>

      <Outlet />
    </>
  );
};

export default MobileLayout;
