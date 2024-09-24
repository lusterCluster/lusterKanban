import React, { useContext, useState } from "react";
import { NavBar } from "./navbar";
import { ThemeContext } from "../../store/context/theme";
import { Link, NavLink } from "react-router-dom";

const Styles = {
  container: {
    height: NavBar.container.height,
    width: NavBar.container.width,
    borderRadius: NavBar.container.shape,
    bottom: "0",
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
  return (
    <div
      id="navbar-container"
      style={{
        ...Styles.container,
        background:
          themeContext?.theme.color[themeContext.colorMode!].palleteVariants
            .primary[themeContext.colorMode! === "dark" ? 600 : 500],
        position: "fixed",
        color: themeContext?.theme.color[themeContext.colorMode!].text,
      }}
    >
      <div
        style={{
          paddingTop: NavBar.topPadding,
          paddingBottom: NavBar.bottomPadding,
          display: "grid",
          placeItems: "center",
          gridTemplateColumns: `repeat(${Navigation.length}, 1fr)`,
          gridTemplateRows: "repaeat(2, 1fr)",
          gap: NavBar.paddingBetween,
        }}
      >
        {Navigation.map((item, i) => (
          <>
            <NavLink
              style={({ isActive }) => {
                return isActive
                  ? {
                      backgroundColor:
                        themeContext?.theme.color[themeContext.colorMode!]
                          .palleteVariants.primary[
                          themeContext.colorMode! === "dark" ? 500 : 600
                        ],
                      height: "32px",
                      width: "64px",
                      textAlign: "center",
                      paddingTop: "5px",
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
                  color:
                    themeContext?.theme.color[themeContext.colorMode!].text,
                }}
              >
                {item.icon}
              </span>
            </NavLink>
            <p
              key={"navbar-label-" + i}
              style={{
                gridRowStart: 2,
                textAlign: "center",
                color: themeContext?.theme.color[themeContext.colorMode!].text,
                
              }}
            >
              {item.label}
            </p>
          </>
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;
