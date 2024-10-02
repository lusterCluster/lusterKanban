import React from 'react'
import styles from './Divider.module.css'
type Props = {
    isActive: "active" | "inactive";
    fullWidht: boolean;
    vertical: boolean
  };
  
const Divider = (props: Props) => {
    
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
            ></div>
          </div>
            </>
        );
      }
  // };
  export default Divider;