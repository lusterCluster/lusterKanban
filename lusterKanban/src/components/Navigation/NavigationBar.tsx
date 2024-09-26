import React, { useContext, useState } from "react";
import { NavBar } from "./navbar";
import { ThemeContext } from "../../store/context/theme";
import { Link, NavLink } from "react-router-dom";
import usePallete from "../../hooks/theme/usePallete";

const Styles = {
  container: {
    height: NavBar.container.height,
    width: NavBar.container.width,
    borderRadius: NavBar.container.shape,
    bottom: "1px",
    paddingBottom: NavBar.bottomPadding,
    paddingTop: NavBar.topPadding,
    left: "0",
  },
};
const Navigation = [
  {
    icon: "home",
    path: "/",
    label: "Label",
  },
  {
    icon: "favorite",
    path: "/1",
    label: "Label",
  },
  {
    icon: "person",
    path: "/2",
    label: "Label",
  },
  {
    icon: "home",
    path: "/3",
    label: "Label",
  },
];

const NavigationBar = () => {
  const themeContext = useContext(ThemeContext);
  const {getColor} = usePallete()
  return (
    <div
      id="navbar-container"
      style={{
        ...Styles.container,
        background:
          
            getColor("primary", themeContext?.isDark ? "600" : "500"),
        position: "fixed",
        
      }}
    >
      <div
        style={{          
          display: "grid",
          placeItems: "center",
          gridTemplateColumns: `repeat(${Navigation.length}, 1fr)`,
          // gridTemplateRows: "repaeat(2, 1fr)",
          gap: NavBar.paddingBetween,
        }}
      >
        {Navigation.map((item, i) => (
          <>
          <div style={{display: "inline-block",
                      flexDirection: "column", justifyItems: "center", height: "80px"}} >

            <NavLink
              style={({ isActive }) => {
                return isActive
                  ? {
                      backgroundColor:getColor("primary", themeContext?.isDark ? "600" : "500"),
                      // height: "32px",
                      // width: "64px",
                      textAlign: "center",                      
                      borderRadius: "16px",                      
                    }
                  : {};
              }}
              key={"navbar-link-" + i}
              to={item.path}
            >
              <span
                key={"navbar-icon-" + i}
                className="material-symbols-outlined"
                style={{
                  textAlign: "center",
                  fontSize: NavBar.iconSize,                                                        
                  color: getColor("primary", "100"),
                }}
              >
                {item.icon}
              </span>
            </NavLink>
            <p
              key={"navbar-label-" + i}
              style={{                
                textAlign: "center",                
                color: getColor("primary", "100"),
                height: "21px",
                fontSize: "12px"
                
              }}
            >
              {item.label}
            </p>
          </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;
