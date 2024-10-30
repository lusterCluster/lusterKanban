import React, { useContext } from "react";
import styles from "./Home.module.css";
import { ThemeContext } from "../../store/context/theme";
import { getShade, isDarkMode, Shade } from "../../store/style";
import Divider from "../../components/Divider/Divider";
type Props = {};

const Home = (props: Props) => {
  const context = useContext(ThemeContext);
  return (
    <>
      <div
        className={styles.recent}
        style={{
          background: context?.theme.pallete(
            isDarkMode() ? Shade.SecondaryDark : Shade.Hover
          ),
        }}
      >
        <p className={styles.heading}>
          Recent
          <Divider fullWidht={true} isActive={"active"} vertical={false} />
        </p>
      </div>
      <div
        className={styles.pane}
        style={{
          background: context?.theme.pallete(
            isDarkMode() ? Shade.SecondaryDark : Shade.LightSurface
          ),
        }}
      >
        <section className={styles.h}>
          <p className={styles.heading}>
            Projects
            <Divider fullWidht={true} isActive={"active"} vertical={false} />
          </p>
        </section>
      </div>
    </>
  );
};

export default Home;
