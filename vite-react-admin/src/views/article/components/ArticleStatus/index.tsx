import { useState, useEffect } from "react"
import { Tag } from "antd"
import {
  ClockCircleOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
  MinusCircleOutlined,
  InboxOutlined
} from "@ant-design/icons"

import CustomMapToText from "@/utils/modules/CustomMapToText"
import { ArticleStatusEnum } from "@shared/enum/article-enum"

interface IProps {
  status: ArticleStatusEnum
}

class IParams {
  tagColor = ""
  tagIcon: JSX.Element = (<ClockCircleOutlined />)
}

/** 文章状态 */
const ArticleStatusCom = (props: IProps) => {
  const customMapToText = new CustomMapToText()
  const { status } = props

  const [params, setParams] = useState<IParams>(() => new IParams())

  useEffect(() => {
    switch (status) {
      // 已删除
      case ArticleStatusEnum.deleted:
        setParams(() => {
          return {
            tagColor: "error",
            tagIcon: <CloseCircleOutlined />
          }
        })
        break
      // 待审核
      case ArticleStatusEnum.reviewed:
        setParams(() => {
          return {
            tagColor: "default",
            tagIcon: <ClockCircleOutlined />
          }
        })
        break
      // 草稿箱
      case ArticleStatusEnum.draft:
        setParams(() => {
          return {
            tagColor: "#4e72b8",
            tagIcon: <InboxOutlined />
          }
        })
        break
      // 被驳回
      case ArticleStatusEnum.reject:
        setParams(() => {
          return {
            tagColor: "#ed1941",
            tagIcon: <MinusCircleOutlined />
          }
        })
        break
      // 已发布
      case ArticleStatusEnum.published:
        setParams(() => {
          return {
            tagColor: "success",
            tagIcon: <CheckCircleOutlined />
          }
        })
        break
    }
  }, [status])
  return (
    <Tag color={params.tagColor} icon={params.tagIcon}>
      {customMapToText.ArticleConst.get(status)}
    </Tag>
  )
}

export default ArticleStatusCom
