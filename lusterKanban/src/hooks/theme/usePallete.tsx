import { useContext } from "react";
import { ThemeContext } from "../../store/context/theme";
import { PalleteVariantTypes, ShadeTypes } from "../../store/style";

function usePallete() {
  const themeContext = useContext(ThemeContext);
  const getColor = (variant: keyof PalleteVariantTypes, shade: keyof ShadeTypes) =>
    themeContext?.theme.color[themeContext.isDark ? "dark":"light"].palleteVariants[
      variant
    ]?.[shade];
    return {getColor}
}
export default usePallete
