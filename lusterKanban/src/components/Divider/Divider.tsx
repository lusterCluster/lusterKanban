import React, { useContext } from 'react'
import styles from './Divider.module.css'
import { ThemeContext } from '../../store/context/theme';
import { isDarkMode, Shade } from '../../store/style';
type Props = {
    isActive: "active" | "inactive";
    fullWidht: boolean;
    vertical: boolean
  };
  
const Divider = (props: Props) => {
    const context = useContext(ThemeContext)
    // const containerClass = props.fullWidht
    //   ? convertToTailwindClass (divider.divderWidhtAttributes.fullWidth)
    //   : convertToTailwindClass(divider.divderWidhtAttributes.inset);
      
      // if(props.vertical) {
      //   return (
      //     <div className={convertToTailwindClass(divider.verticalHeightAttributes)}>
      //       <div      
      //         className={
      //           convertToTailwindClass(divider.verticalDividerAttributes) +
      //           " " +
      //           'bg-primary'
      //         }
      //       ></div>
      //     </div>
      //   );
  
      // } else {
  
        return (
            <>
          <div className={styles.fullWidthDividerAttributes}>
            <div      
              className={
                styles.dividerAttributes                
              }
              style={{background: context?.theme.pallete(isDarkMode() ? Shade.LightSurface : Shade.Surface)}}
            ></div>
          </div>
            </>
        );
      }
  // };
  export default Divider;