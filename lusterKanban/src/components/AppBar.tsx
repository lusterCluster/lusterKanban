import { useContext, useState } from "react";
import { ThemeContext } from "../store/context/theme";
import Switch from "./Switch/Switch";
import usePallete from "../hooks/theme/usePallete";

type Props = {};

const AppBar = () => {
  const themeContext = useContext(ThemeContext);
  const [isOn, setIsOn] = useState(false);
  const { getColor } = usePallete();
  const handleToggle = () => {
    setIsOn(!isOn);
    themeContext?.toggleDarkMode();
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
        <button style={{ borderRadius: 100, background: getColor("primary", "600"),
          padding: "5px",
          height: "34px",
          width: "34px",
          border: "none"
          
         }} 
         onClick={handleToggle}
         >
          <span  className="material-symbols-outlined" style={{fontSize: "21px", color:getColor("primary", "100")}} >dark_mode</span> 
        </button>
      </section>
    </div>
  );
};

export default AppBar;
