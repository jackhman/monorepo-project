import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "./index.scss"
import png404 from "@/assets/images/404_images/404.png"
import cloud404 from "@/assets/images/404_images/404_cloud.png"
function Error404Page() {
  const navigate = useNavigate()
  const [message] = useState<string>("网站管理员说你不能进入这个页面…")
  const backBtn = () => {
    navigate(-1)
  }
  return (
    <div className="wscn-http404-container">
      <div className="wscn-http404">
        <div className="pic-404">
          <img className="pic-404__parent" src={png404} alt="404" />
          <img className="pic-404__child left" src={cloud404} alt="404" />
          <img className="pic-404__child mid" src={cloud404} alt="404" />
          <img className="pic-404__child right" src={cloud404} alt="404" />
        </div>
        <div className="bullshit">
          <div className="bullshit__oops">OOPS!</div>
          <div className="bullshit__headline">{message}</div>
          <div className="bullshit__info">
            请检查您输入的网址是否正确，或者点击下面的按钮返回。
          </div>
          <a className="bullshit__return-home" onClick={backBtn}>
            返回
          </a>
        </div>
      </div>
    </div>
  )
}
export default Error404Page
