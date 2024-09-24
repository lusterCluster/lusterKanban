import { useContext, useEffect, useState } from "react";
import Switch from "../../components/Switch/Switch";
import DesktopLayout from "../../layout/desktop/MainLayout";
import MobileLayout from "../../layout/mobile/MainLayout";
import { ThemeContext } from "../../store/context/theme";

const Root = () => {
  const themeContext = useContext(ThemeContext);
  const [isOn, setIsOn] = useState(false);
  const handleToggle = () => {
    setIsOn(!isOn);
    themeContext?.toggleDarkMode();
  };

  return (
    <div      
    >
      <DesktopLayout>        
        <Switch isOn={isOn} handleToggle={() => handleToggle()} />
        <div></div>
      </DesktopLayout>
      <MobileLayout>
        <div></div>
      </MobileLayout>
    </div>
  );
};

export default Root;
