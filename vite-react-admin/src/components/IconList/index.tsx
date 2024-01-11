import { useState, useEffect } from "react"
import CustomIconCom from "../CustomIcon"
import "./index.scss"
type FileType = { icon: string; name: string }
const IconList = (props) => {
  const [fileList, setFileList] = useState<FileType[]>([])

  useEffect(() => {
    getFiles()
  }, [])
  async function getFiles() {
    const newFileList: FileType[] = []
    const files = Object.keys(import.meta.glob("/src/assets/images/svg/*.svg"))
    for (const path in files) {
      if (Object.prototype.hasOwnProperty.call(files, path)) {
        const file = await import(/* @vite-ignore */ files[path])
        newFileList.push({
          icon: file.default,
          name: file.default.split("-")[1]
        })
      }
    }
    setFileList(newFileList)
  }

  /** icon 的点击事件 */
  function iconClick(icon: FileType) {
    props.iconClick(icon)
  }

  return (
    <ul className="icon-list-box">
      {fileList.map(file => {
        return (
          <li key={file.icon} onClick={()=> iconClick(file)}>
            <CustomIconCom iconPath={file.icon}></CustomIconCom>
            <span className="icon-name">{file.name}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default IconList
