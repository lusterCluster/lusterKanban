import React, { useContext } from 'react'
import { ThemeContext } from '../../store/context/theme';
import { Shade } from '../../store/style';

type Props = {}

const Menu = (props: Props) => {
    const context = useContext(ThemeContext);
  return (
    <span
    className="material-symbols-outlined"
    style={{ color: context?.theme.pallete(Shade.LightSurface) }}
  >
    menu
  </span>
  )
}

export default Menu