import { useState } from "react"
import { Input } from "antd"
import IconList from "@/components/IconList"
import CustomIconCom from "@/components/CustomIcon"

interface Props {
  iconListClick(icon: string): void
}

const FormSelectIcon = (props: Props) => {
  const [iconPath, setIconPath] = useState("Menu")

  // 点击了icon列表图标
  function iconListClick(iconName: string) {
    setIconPath(iconName)
    props.iconListClick(iconName)
  }

  return (
    <div className="form-select-icon-box">
      <Input
        className="form-select-icon-box-top-input"
        value={iconPath}
        disabled
        prefix={<CustomIconCom iconPath={iconPath}></CustomIconCom>}
      />
      <div className="form-select-icon-box-select">
        <IconList iconClick={iconListClick}></IconList>
      </div>
    </div>
  )
}

export default FormSelectIcon
