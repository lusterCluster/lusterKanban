import { useContext } from 'react';
import styles from './Divider.module.css'
import { ThemeContext } from '../../store/context/theme';
import { Shade } from '../../store/style';

type Props = {};

const VerticalDivider = (props: Props) => {
    const context = useContext(ThemeContext)
  return (
    <>
      <div className={styles.verticalHeightAttributes}>
        <div
          className={
            styles.verticalDividerAttributes                        
          }
          style={{background: context?.theme.pallete(Shade.LightSurface)}}
        ></div>
      </div>
    </>
  );
};

export default VerticalDivider;
