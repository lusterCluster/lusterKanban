import React, { createContext, FC, useLayoutEffect, useState } from "react";
import { EndlessSpring, ITheme } from "../../style";

type ProviderProps = {
    children: React.ReactNode
}
type IThemeContext = {
  theme: ITheme
  colorMode: ColorThmeType
  toggleDarkMode: () => void
}
export type ColorThmeType = "dark" | "light" | null
export const ThemeContext = createContext<IThemeContext | undefined>(undefined)
const ProvideThemeContext:FC<ProviderProps> = ({children}) => {
    const [colorMode, setColorMode] = useState<ColorThmeType>(localStorage.getItem("color") as ColorThmeType)
    const [theme, setTheme] = useState(EndlessSpring)
    const toggleDarkMode = () => {
      localStorage.setItem("color", colorMode === 'dark'?"light": colorMode==="light"? "dark":"")
      setColorMode(colorMode === 'dark' ? 'light' : "dark")
    }

  const themeContext: IThemeContext = {
    theme: theme,
    colorMode: colorMode,
    toggleDarkMode: toggleDarkMode
  }
    useLayoutEffect(() => {
        // Seleccionar el elemento :root y aplicar el background-color
        document.documentElement.style.backgroundColor = theme.color[colorMode!].background;
        document.documentElement.style.color = theme.color[colorMode!].text;
        document.documentElement.style.fontFamily = theme.typography.fontFamily;
        document.documentElement.style.fontSize = theme.typography.fontSize[16];
        console.log(colorMode)
        localStorage.setItem("color", colorMode!)
    
        // Limpiar el efecto al desmontar el componente si es necesario
        return () => {
          document.documentElement.style.backgroundColor = "";
        };
      }, [toggleDarkMode]);

      return <ThemeContext.Provider value={themeContext}>{children}</ThemeContext.Provider>
}
export default ProvideThemeContext;