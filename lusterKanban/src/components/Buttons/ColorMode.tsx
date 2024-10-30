import { useContext, useState } from "react";
import { ThemeContext } from "../../store/context/theme";
import { isDarkMode, Shade } from "../../store/style";

const ColorMode = () => {
    const context = useContext(ThemeContext);
    const [icon, setIcon] = useState(isDarkMode() ? "dark_mode" : "light_mode")
    const handleMouseEnter = () => {
      document.getElementById("dark-mode-button")!.style.backgroundColor = context!.theme.pallete(isDarkMode() ? Shade.Dark : Shade.Focus) 
    }
    const handleMouseLeave = () => {
      document.getElementById("dark-mode-button")!.style.backgroundColor =  context!.theme.pallete(isDarkMode() ? Shade.SecondaryDark : Shade.Surface)
    }
    // const [isOn, setIsOn] = useState(isDarkMode() ? true : false);
    const handleToggle = () => {
      // setIsOn(!isDarkMode());
      setIcon(isDarkMode() ? "light_mode" : "dark_mode")
      context?.toggleDarkMode();      
    };
    
    return (      <button id="dark-mode-button" style={{ borderRadius: 100, background: context?.theme.pallete(Shade.Surface),
            padding: "5px",
            height: "34px",
            width: "34px",
            border: "none"
            
           }} 
           onClick={handleToggle}
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}
           >
            <span  className="material-symbols-outlined" style={{fontSize: "21px", color:context!.theme.pallete(Shade.LightSurface),}} >{icon}</span> 
          </button>)
  }
  export default ColorMode