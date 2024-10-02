import React, { FC, useContext, useState } from "react";
import { NavBar } from "./navbar";
import { ThemeContext } from "../../store/context/theme";
import { Link, NavigationType, NavLink } from "react-router-dom";
import { isDarkMode, Shade } from "../../store/style";
import { DestinationsType } from "./interfaces";

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


type NavBarType = {
  destinations: DestinationsType
}
type Props = {
  navbar: NavBarType
}
const NavigationBar:FC<Props> = ({navbar}) => {
  const context = useContext(ThemeContext);

  return (
    <div
      id="navbar-container"
      style={{
        ...Styles.container,
        background: context?.theme.pallete(
          isDarkMode() ? Shade.SecondaryDark : Shade.SecondarySurface
        ),

        // getVariant(context?.isDark ? "600" : "400"),
        position: "fixed",
      }}
    >
      <div
        style={{
          display: "grid",
          placeItems: "center",
          gridTemplateColumns: `repeat(${navbar.destinations.length}, 1fr)`,
          gap: NavBar.paddingBetween,
        }}
      >
        {navbar.destinations.map((item, i) => (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyItems: "center",
                textAlign: "center",
              }}
            >
              <NavLink
                style={({ isActive }) => {
                  return isActive
                    ? {
                        backgroundColor: context?.theme.pallete(Shade.Surface),
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
                    lineHeight: "1.3",
                    fontSize: NavBar.iconSize,
                    color: context?.theme.pallete(Shade.LightSurface),
                  }}
                >
                  {item.icon}
                </span>
              </NavLink>
              <p
                key={"navbar-label-" + i}
                style={{
                  textAlign: "center",
                  color: context?.theme.pallete(Shade.LightSurface),
                  height: "21px",
                  fontSize: "12px",
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
