import { useContext, useState } from "react";
import usePallete from "../../hooks/theme/usePallete";
import { ThemeContext } from "../../store/context/theme";

const ColorMode = () => {
    const context = useContext(ThemeContext);
    const { getVariant } = usePallete();
    const [icon, setIcon] = useState(localStorage.getItem("isDark") === "0" ? "light_mode" : "dark_mode")
    const handleMouseEnter = () => {
      document.getElementById("dark-mode-button")!.style.backgroundColor =  getVariant(context?.isDark ? "700" : "400")!
    }
    const handleMouseLeave = () => {
      document.getElementById("dark-mode-button")!.style.backgroundColor =  getVariant(context?.isDark ? "600" : "500")!
    }
    const [isOn, setIsOn] = useState(false);
    const handleToggle = () => {
      setIsOn(!isOn);
      setIcon(isOn ? "light_mode" : "dark_mode")
      context?.toggleDarkMode();      
    };
    
    return (      <button id="dark-mode-button" style={{ borderRadius: 100, background: "none",
            padding: "5px",
            height: "34px",
            width: "34px",
            border: "none"
            
           }} 
           onClick={handleToggle}
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}
           >
            <span  className="material-symbols-outlined" style={{fontSize: "21px", color:getVariant("100")}} >{icon}</span> 
          </button>)
  }
  export default ColorMode