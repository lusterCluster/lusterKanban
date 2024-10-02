import React, { FC, useContext, useState } from "react";
import { ThemeContext } from "../../../store/context/theme";
import { isDarkMode, Shade } from "../../../store/style";
import Menu from "../../Buttons/Menu";
import VerticalDivider from "../../Divider/VerticalDivider";
import styles from "./NavigationRail.module.css";
import { DestinationsType, NavigationType } from "../interfaces";
import { NavLink } from "react-router-dom";

type NavrailType = {
    destinations: DestinationsType
}

type Props = {
    navrail: NavrailType
};

type DestinationType = {
    item: NavigationType
}
const Destinations:FC<DestinationType> = ({item}) => {
    const [indicatorBackground, setIndicatorBackground] = useState<string | undefined>('none')
    
    const context = useContext(ThemeContext)
    const handleIndicatorOnMouseEnter = () => setIndicatorBackground (context?.theme.pallete(isDarkMode() ? Shade.SecondaryDark : Shade.Dark))
    const handleIndicatorOnMouseLeave = () => setIndicatorBackground("none")
    return(
        <>
            <div  className={styles.destination}>
            <NavLink
                style={({ isActive }) => {
                  return isActive
                    ? {
                        backgroundColor: context?.theme.pallete(isDarkMode() ? Shade.Surface : Shade.SecondaryDark),
                        height: "32px",
                        width: "64px",
                        textAlign: "center",
                        borderRadius: "16px",
                      }
                    : {};
                }}                
                to={item.path}
              >
                

                <span                  
                    onMouseEnter={handleIndicatorOnMouseEnter}
                    onMouseLeave={handleIndicatorOnMouseLeave}
                  className="material-symbols-outlined"
                  style={{
                    textAlign: "center",
                    background: indicatorBackground,
                    borderRadius: "16px",
                    width: "64px",
                    lineHeight: "1.3",
                    fontSize: "24px",
                    color: context?.theme.pallete(Shade.LightSurface),
                  }}
                >
                  {item.icon}
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
                {item.label}
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
            <Destinations item={d}/>
        </div >
      ))}
      </div>
        
    </>
  );
};

export default NavigationRail;
