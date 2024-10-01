import React, { FC, useContext, useEffect, useState } from "react";
import { ColorThmeType, ThemeContext } from "../../store/context/theme";
import usePallete from "../../hooks/theme/usePallete";

type Props = {
  handleToggle: () => void;
  isOn: boolean;
};
const Switch: FC<Props> = ({ handleToggle, isOn }) => {
  const context = useContext(ThemeContext);
  const { getVariant } = usePallete();
  return (
    <div
      onClick={handleToggle}
      style={{
        width: "55px",
        height: "34px",
        backgroundColor: getVariant(context?.isDark ? "500" : "300"),
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
          backgroundColor: getVariant("100"),
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
