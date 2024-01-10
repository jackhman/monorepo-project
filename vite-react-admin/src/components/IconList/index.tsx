import { useState } from "react"
import CustomIconCom from "../CustomIcon"
import "./index.scss"
type FileType = { icon: string; name: string }
const IconList = () => {
  const [fileList, setFileList] = useState<FileType[]>([])
  async function getFiles() {
    const newFileList: FileType[] = []
    const files = Object.keys(import.meta.glob("/src/assets/images/svg/*.svg"))
    for (const path in files) {
      if (Object.prototype.hasOwnProperty.call(files, path)) {
        const file = await import(files[path])
        newFileList.push({
          icon: file.default,
          name: file.default.split("-")[1]
        })
      }
    }
    setFileList(newFileList)
  }
  getFiles()
  return (
    <ul className="icon-list-box">
      {fileList.map(file => {
        return (
          <li key={file.icon}>
            <CustomIconCom iconPath={file.icon}></CustomIconCom>
            <span className="icon-name">{file.name}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default IconList
