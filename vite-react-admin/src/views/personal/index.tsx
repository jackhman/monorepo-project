import "./index.scss"
import InfoCom from "./components/InfoCom"
import PersonalHeader from "./components/HeaderCom"
import { userStore } from "@/store/user"
import { observer } from "mobx-react-lite"
/** 个人中心页面 */
const PersonalPage = observer(() => {
  const userInfo = userStore.userInfo
  return (
    <div className="personal-page-box">
      <PersonalHeader userInfo={userInfo} />
      <InfoCom userInfo={userInfo} />
    </div>
  )
})
export default PersonalPage
