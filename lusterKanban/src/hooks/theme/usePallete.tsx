import { useContext } from "react";
import { ThemeContext } from "../../store/context/theme";
import { PalleteVariantTypes, ShadeTypes } from "../../store/style";

function usePallete() {
  const context = useContext(ThemeContext);
  const getVariant = (shade: keyof ShadeTypes) =>
    context?.theme.pallete[shade]
    return {getVariant}
}
export default usePallete
