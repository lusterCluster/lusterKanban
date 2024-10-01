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
    label: "Home",
  },
  {
    icon: "dashboard",
    path: "/1",
    label: "Boards",
  },
  {
    icon: "person",
    path: "/2",
    label: "Projects",
  },
  {
    icon: "task_alt",
    path: "/3",
    label: "Issues",
  },
];

const NavigationBar = () => {
  const context = useContext(ThemeContext);
  const {getVariant} = usePallete()
  return (
    <div
      id="navbar-container"
      style={{
        ...Styles.container,
        background:
          
            getVariant(context?.isDark ? "600" : "400"),
        position: "fixed",
        
      }}
    >
      <div
        style={{          
          display: "grid",
          placeItems: "center",
          gridTemplateColumns: `repeat(${Navigation.length}, 1fr)`,          
          gap: NavBar.paddingBetween,
        }}
      >
        {Navigation.map((item, i) => (
          <>
          <div style={{display: "flex",
                      flexDirection: "column", justifyItems: "center", textAlign: "center"}} >

            <NavLink
              style={({ isActive }) => {
                return isActive
                  ? {
                      backgroundColor:getVariant("500" ),
                      height: "32px",
                      width: "64px",
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
                  color: getVariant("100"),
                }}
              >
                {item.icon}
              </span>
            </NavLink>
            <p
              key={"navbar-label-" + i}
              style={{                
                textAlign: "center",                
                color: getVariant("100"),
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
