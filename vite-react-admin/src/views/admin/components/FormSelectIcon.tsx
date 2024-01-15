import { useState } from "react"
import { Input } from "antd"
import IconList from "@/components/IconList"
import CustomIconCom from "@/components/CustomIcon"

interface Props {
  iconListClick(icon: any): void
}

const FormSelectIcon = (props: Props) => {
  const [iconPath, setIconPath] = useState("#icon-Menu")
  const [iconInputValue, setIconInputValue] = useState("")

  // 点击了icon列表图标
  function iconListClick(icon: any) {
    setIconPath(icon.icon)
    setIconInputValue(icon.name)
    props.iconListClick(icon)
  }

  return (
    <div className="form-select-icon-box">
      <Input
        className="form-select-icon-box-top-input"
        value={iconInputValue}
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
