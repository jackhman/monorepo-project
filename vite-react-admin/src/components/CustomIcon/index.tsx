import { FC } from 'react'
import style from "./index.module.scss"
interface ICustom {
  iconPath: string
}

/** 自定义的菜单 icon  */
const CustomIconCom: FC<ICustom> = ({ iconPath }) => {
  return (
    <svg className={`icon ${style['custom-svg']}`} aria-hidden="true">
      <use xlinkHref={`#${iconPath}`}></use>
    </svg>
  )
}

export default CustomIconCom
