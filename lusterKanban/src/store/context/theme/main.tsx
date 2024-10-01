import React, { createContext, FC, useLayoutEffect, useState } from "react";
import { EndlessSpring, ITheme } from "../../style";

type ProviderProps = {
    children: React.ReactNode
}
type IThemeContext = {
  theme: ITheme
  isDark: boolean
  toggleDarkMode: () => void
}
export type ColorThmeType = "dark" | "light" | null
export const ThemeContext = createContext<IThemeContext | undefined>(undefined)
const ProvideThemeContext:FC<ProviderProps> = ({children}) => {
    const [isDark, setIsDark] = useState(localStorage.getItem("isDark") === "0" ? true : false)
    const [theme, setTheme] = useState(EndlessSpring)
    const toggleDarkMode = () => {
      localStorage.setItem("isDark", isDark ? "0": "1")
      setIsDark(!isDark)
    }

  const themeContext: IThemeContext = {
    theme: theme,
    isDark: isDark,
    toggleDarkMode: toggleDarkMode
  }
    useLayoutEffect(() => {
        // Seleccionar el elemento :root y aplicar el background-color
        document.documentElement.style.backgroundColor = theme.colorMode.getColor!(isDark).background;
        document.documentElement.style.color = theme.colorMode.getColor!(isDark).text;
        document.documentElement.style.fontFamily = theme.typography.fontFamily;
        document.documentElement.style.fontSize = theme.typography.fontSize[16];
        console.log(isDark)
        localStorage.setItem("isDark", isDark ? "0": "1")
    
        // Limpiar el efecto al desmontar el componente si es necesario
        return () => {
          document.documentElement.style.backgroundColor = "";
        };
      }, [toggleDarkMode]);

      return <ThemeContext.Provider value={themeContext}>{children}</ThemeContext.Provider>
}
export default ProvideThemeContext;