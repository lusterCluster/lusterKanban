import { useContext, useState } from "react";
import { ThemeContext } from "../store/context/theme";
import Switch from "./Switch/Switch";
import usePallete from "../hooks/theme/usePallete";

type Props = {};

const AppBar = () => {
  const themeContext = useContext(ThemeContext);
  const [isOn, setIsOn] = useState(false);
  const { getColor } = usePallete();
  const [icon, setIcon] = useState(localStorage.getItem("isDark") === "0" ? "light_mode" : "dark_mode")
  const handleMouseEnter = () => {
    document.getElementById("dark-mode-button")!.style.backgroundColor =  getColor("primary", themeContext?.isDark ? "700" : "400")!
  }
  const handleMouseLeave = () => {
    document.getElementById("dark-mode-button")!.style.backgroundColor =  getColor("primary", themeContext?.isDark ? "600" : "500")!
  }
  const handleToggle = () => {
    setIsOn(!isOn);
    setIcon(isOn ? "light_mode" : "dark_mode")
    themeContext?.toggleDarkMode();
    // document.getElementById("dark-mode-button")!.style.backgroundColor =  getColor("primary", themeContext?.isDark ? "600" : "500")!
  };

  return (
    <div
      className="appbar"
      style={{
        background: getColor("primary", themeContext!.isDark ? "600" : "500"),
      }}
    >
      <section>
        <span
          className="material-symbols-outlined"
          style={{ color: getColor("primary", "100") }}
        >
          menu
        </span>
      </section>
      <section style={{ gridColumnStart: 3, display: "flex", justifyContent: "end", paddingRight:"21px" }}>
        {/* <Switch isOn={isOn} handleToggle={() => handleToggle()} /> */}
        <button id="dark-mode-button" style={{ borderRadius: 100, background: "none",
          padding: "5px",
          height: "34px",
          width: "34px",
          border: "none"
          
         }} 
         onClick={handleToggle}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         >
          <span  className="material-symbols-outlined" style={{fontSize: "21px", color:getColor("primary", "100")}} >{icon ?? "dark_mode"}</span> 
        </button>
      </section>
    </div>
  );
};

export default AppBar;
