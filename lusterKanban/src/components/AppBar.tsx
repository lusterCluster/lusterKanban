import { useContext, useState } from "react";
import { ThemeContext } from "../store/context/theme";
import Switch from "./Switch/Switch";

type Props = {};

const AppBar = () => {
  const themeContext = useContext(ThemeContext);
  const [isOn, setIsOn] = useState(false);
  const handleToggle = () => {
    setIsOn(!isOn);
    themeContext?.toggleDarkMode();
  };

  return (
    <div
      className="appbar"
      style={{
        background:
          themeContext?.theme.color[themeContext.colorMode!].palleteVariants
            .primary[themeContext.colorMode! === "dark" ? 600 : 500],
      }}
    >
      <section>
        <span className="material-symbols-outlined">menu</span>
      </section>
      <section style={{ gridColumnStart: 3 }}>
        <Switch isOn={isOn} handleToggle={() => handleToggle()} />
      </section>
    </div>
  );
};

export default AppBar;
