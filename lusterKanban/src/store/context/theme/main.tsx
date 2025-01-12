import React, { createContext, FC, useLayoutEffect, useState } from "react";
import { EndlessSpring, Icecream, isDarkMode, ITheme, Shade } from "../../style";

type ProviderProps = {
    children: React.ReactNode
}
type IThemeContext = {
  theme: ITheme
  isDark: boolean | undefined
  toggleDarkMode: () => void
}
export type ColorThmeType = "dark" | "light" | null
export const ThemeContext = createContext<IThemeContext | undefined>(undefined)
const ProvideThemeContext:FC<ProviderProps> = ({children}) => {
    const [isDark, setIsDark] = useState(localStorage.getItem("isDark") === "0" ? true : localStorage.getItem("isDark") === "1" ? false: undefined)
    const [theme, setTheme] = useState(Icecream)
    const toggleDarkMode = () => {
      localStorage.setItem("isDark", isDarkMode() ? "1": "0")
      setIsDark(!isDark)
    }

  const themeContext: IThemeContext = {
    theme: theme,
    isDark: isDark,
    toggleDarkMode: toggleDarkMode
  }
    useLayoutEffect(() => {
        // Seleccionar el elemento :root y aplicar el background-color
        const setThemeBackground = document.documentElement.style.backgroundColor = theme.pallete(isDarkMode() ? Shade.Dark : Shade.LightSurface)
        document.documentElement.style.color = theme.pallete(isDarkMode() ? Shade.LightSurface : Shade.Dark)
        document.documentElement.style.fontFamily = theme.typography.fontFamily;
        document.documentElement.style.fontSize = theme.typography.fontSize[16];
        console.log(localStorage.getItem("isDark"))        
    
        // Limpiar el efecto al desmontar el componente si es necesario
        return () => {
          document.documentElement.style.backgroundColor = "";
        };
      }, [toggleDarkMode]);

      return <ThemeContext.Provider value={themeContext}>{children}</ThemeContext.Provider>
}
export default ProvideThemeContext;