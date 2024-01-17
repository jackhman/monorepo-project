import { FC } from "react"
import "./index.scss"
interface ICustom {
  iconPath: string
}

/** 自定义的菜单 icon  */
const CustomIconCom: FC<ICustom> = ({ iconPath }) => {
  return (
    <svg className="icon custom-svg" aria-hidden="true">
      <use xlinkHref={`#icon-${iconPath}`} />
    </svg>
  )
}

export default CustomIconCom
