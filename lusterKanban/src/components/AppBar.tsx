import { useContext, useState } from "react";
import { ThemeContext } from "../store/context/theme";
import { isDarkMode, Shade } from "../store/style";


type Props = {};

const ColorMode = () => {
  const context = useContext(ThemeContext);
 
  const [icon, setIcon] = useState(localStorage.getItem("isDark") === "0" ? "light_mode" : "dark_mode")
  const handleMouseEnter = () => {
    document.getElementById("dark-mode-button")!.style.backgroundColor = context!.theme.pallete(isDarkMode() ? Shade.Dark : Shade.Focus)
  }
  const handleMouseLeave = () => {
    document.getElementById("dark-mode-button")!.style.backgroundColor =  context!.theme.pallete(isDarkMode() ? Shade.SecondaryDark : Shade.Surface)
  }
  const [isOn, setIsOn] = useState(false);
  const handleToggle = () => {
    setIsOn(!isOn);
    setIcon(isOn ? "light_mode" : "dark_mode")
    context?.toggleDarkMode();
    // document.getElementById("dark-mode-button")!.style.backgroundColor =  getVariant( themeContext?.isDark ? "600" : "500")!
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
          <span  className="material-symbols-outlined" style={{fontSize: "21px", color:context?.theme.pallete(Shade.LightSurface)}} >{icon ?? "dark_mode"}</span> 
        </button>)
}

const AppBar = () => {
  const context = useContext(ThemeContext);


  return (
    <div
      className="appbar"
      style={{
        background: context?.theme.pallete(isDarkMode() ? Shade.SecondaryDark : Shade.Surface),
      }}
    >
      <section>
        <span
          className="material-symbols-outlined"
          style={{ color: context?.theme.pallete(Shade.LightSurface) }}
        >
          menu
        </span>
      </section>
      <section style={{ gridColumnStart: 3, display: "flex", justifyContent: "end", paddingRight:"21px" }}>
        <ColorMode/>
      </section>
    </div>
  );
};

export default AppBar;
