import  { useReducer, useImperativeHandle, forwardRef } from "react"
import { Modal, Input, message } from "antd"
import { ArticleStatusEnum } from "@shared/enum/article-enum"

interface IProps {
  // ref:any
  tranReason: (status: ArticleStatusEnum, reason: string) => void
}

interface IState {
  visible: boolean
  reason: string
}

const initState: IState = {
  /** 弹出框的显示隐藏 */
  visible: false,
  /** 拒绝理由 */
  reason: ""
}

const ACTIONS_TYPE = {
  /** 弹出框的显示隐藏 */
  VISIBLE: "visible",
  /** 拒绝理由 */
  REASON: "reason"
}

function reducer(state, action: { type: string; data: any }) {
  switch (action.type) {
    case ACTIONS_TYPE.VISIBLE:
      return {
        ...state,
        visible: action.data
      }
    case ACTIONS_TYPE.REASON:
      return {
        ...state,
        reason: action.data
      }
  }
}

// eslint-disable-next-line react-refresh/only-export-components
const RejectReasonCom = (props: IProps, ref) => {
  const { tranReason } = props
  const [state, dispatch] = useReducer(reducer, initState)

  useImperativeHandle(
    ref,
    () => ({
      openModal: () => {
        dispatch({ type: ACTIONS_TYPE.VISIBLE, data: true })
      }
    }),
    []
  )

  /** 关闭弹出框 */
  const modelCancel = () => {
    dispatch({ type: ACTIONS_TYPE.VISIBLE, data: false })
    dispatch({ type: ACTIONS_TYPE.REASON, data: "" })
  }
  /** 弹出框点击确定 */
  const modelOk = () => {
    if (!state.reason) {
      return message.warning("驳回理由必填")
    }
    modelCancel()
    tranReason(ArticleStatusEnum.reject, state.reason)
  }
  return (
    <Modal
      title="拒绝原因"
      visible={state.visible}
      onCancel={modelCancel}
      onOk={modelOk}
    >
      <div className="article-details-com-modal">
        <Input.TextArea
          value={state.reason}
          rows={4}
          onChange={e =>
            dispatch({ type: ACTIONS_TYPE.REASON, data: e.target.value })
          }
        />
      </div>
    </Modal>
  )
}

const r = forwardRef(RejectReasonCom)

export default r
