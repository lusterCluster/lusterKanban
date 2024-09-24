import { useContext } from "react";
import { ThemeContext } from "../store/context/theme";

type Props = {};

const AppBar = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <div
      className="appbar"
      style={{
        background:
          themeContext?.theme.color[themeContext.colorMode!].palleteVariants
            .primary[themeContext.colorMode! === "dark" ? 600 : 500],
            width:"100%"
      }}
    >
      appbar
    </div>
  );
};

export default AppBar;
