import { useContext, useState } from "react";
import { ThemeContext } from "../../store/context/theme";
import { isDarkMode, Shade } from "../../store/style";
import style from './Appbar.module.css'
import ColorMode from "../Buttons/ColorMode";

type Props = {};


const AppBar = () => {
  const context = useContext(ThemeContext);


  return (
    <div
      className={style.appbar}
      style={{
        background: context?.theme.pallete(isDarkMode() ? Shade.Dark : Shade.LightSurface),
      }}
    >

      <section style={{ gridColumnStart: 3, display: "flex", justifyContent: "end", paddingRight:"21px" }}>
        <ColorMode/>
      </section>
    </div>
  );
};

export default AppBar;
