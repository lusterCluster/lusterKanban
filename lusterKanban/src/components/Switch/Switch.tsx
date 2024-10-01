import React, { FC, useContext, useEffect, useState } from "react";
import { ColorThmeType, ThemeContext } from "../../store/context/theme";
import { isDarkMode, Shade } from "../../store/style";

type Props = {
  handleToggle: () => void;
  isOn: boolean;
};
const Switch: FC<Props> = ({ handleToggle, isOn }) => {
  const context = useContext(ThemeContext);

  return (
    <div
      onClick={handleToggle}
      style={{
        width: "55px",
        height: "34px",
        backgroundColor: context?.theme.pallete(
          isDarkMode() ? Shade.Surface : Shade.Focus
        ),
        borderRadius: "100px",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <div
        className={`switch${isOn ? "-on" : "-off"}`}
        style={{
          width: "21px",
          height: "21px",
          backgroundColor: context?.theme.pallete(Shade.LightSurface),
          borderRadius: "24px",
          marginRight: "5px",
          marginTop: "5px",
          transition: "translate",
        }}
      ></div>
    </div>
  );
};

export default Switch;
