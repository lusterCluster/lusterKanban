import React, { FC, useContext, useState } from "react";
import { ThemeContext } from "../../../store/context/theme";
import { isDarkMode, Shade } from "../../../store/style";
import Menu from "../../Buttons/Menu";
import VerticalDivider from "../../Divider/VerticalDivider";
import styles from "./NavigationRail.module.css";

import { NavLink, useLocation } from "react-router-dom";
import { DestinationsType, DestinationType } from "../../../pages/navigation/interfaces";


type NavrailType = {
    destinations: DestinationsType
}

type Props = {
    navrail: NavrailType
};

type DestinationProps = {
    destination: DestinationType
}
const Destinations:FC<DestinationProps> = ({destination}) => {
    const location = useLocation()    
    console.log(location.pathname)
    const isActive = () => destination.path === location.pathname
    const [indicatorBackground, setIndicatorBackground] = useState<string | undefined>('none')    
    const context = useContext(ThemeContext)
    const activeColor = context?.theme.pallete(isDarkMode() ? Shade.Surface : Shade.SecondaryDark)
    const hoverColor =  context?.theme.pallete(isDarkMode() ? Shade.Hover : Shade.Dark)
    const inactiveColor = context?.theme.pallete(isDarkMode() ? Shade.SecondaryDark : Shade.Surface)
    const handleIndicatorOnMouseEnter = () => setIndicatorBackground (hoverColor)
    const handleIndicatorOnMouseLeave = () => setIndicatorBackground(isActive() ? activeColor : inactiveColor)
    return(
        <>
            <div  className={styles.destination}>
            <NavLink
                style={({ isActive }) => {

                  return isActive
                    ? {
                        backgroundColor: activeColor,
                        
                        height: "32px",
                        width: "64px",
                        textAlign: "center",
                        borderRadius: "16px",
                      }
                    : { };
                }}                
                to={destination.path}
              >
                

                <span                  
                    onMouseEnter={handleIndicatorOnMouseEnter}
                    onMouseLeave={handleIndicatorOnMouseLeave}
                  className="material-symbols-outlined"
                  style={{
                    textAlign: "center",
                      // background: indicatorBackground,
                    borderRadius: "16px",
                    width: "64px",
                    height: "32px",
                    lineHeight: "1.3",
                    fontSize: "24px",
                    color: context?.theme.pallete(Shade.LightSurface),
                  }}
                >
                  {destination.icon}
                </span>                
              </NavLink>
              <p                
                style={{
                  textAlign: "center",
                  color: context?.theme.pallete(Shade.LightSurface),
                  height: "21px",
                  fontSize: "12px",
                  lineHeight: "0"
                }}
              >
                {destination.label}
              </p>
            </div>
        </>
    )
}

const NavigationRail: FC<Props> = ({navrail}) => {
  const context = useContext(ThemeContext);
  return (
    <>
      <div
        className={styles.container}
        style={{
          background: context?.theme.pallete(
            isDarkMode() ? Shade.SecondaryDark : Shade.Surface
          ),
        }}
      ><section className={styles.menu}>
        <Menu />
      </section>
      {navrail.destinations.map((d,i) => (
        <div key={"navrail-item-"+i} >
            <Destinations destination={d}/>
        </div >
      ))}
      </div>
        
    </>
  );
};

export default NavigationRail;
