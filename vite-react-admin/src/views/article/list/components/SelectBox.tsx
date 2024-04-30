import {
  useState,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction
} from "react"
import { Input, Row, Col, Cascader, DatePicker, Button, Select } from "antd"
import { getArticleCategoryByLazyApi } from "@/api/modules/article"
import { ResultCode } from "@shared/enum/result-enum"
import { ArticleCategoryByLazyDto } from "@shared/dto/article.dto"
import { ArticleListPageDto } from "@shared/dto/page.dto"
import dayjs from "dayjs"
import CustomMapToText from "@/utils/modules/CustomMapToText"

const { RangePicker } = DatePicker

interface IProps {
  params: ArticleListPageDto
  setParams: Dispatch<SetStateAction<ArticleListPageDto>>
  // 传递 参数
  selectBtnParams: () => void
  // 重置
  resetBtn: () => void
}

interface CascaderOption {
  value?: string | number | null
  label: React.ReactNode
  children?: CascaderOption[]
  isLeaf?: boolean
}
/** 筛选条件 */
const SelectBoxCom = (props: IProps) => {
  const { params, setParams, selectBtnParams, resetBtn } = props
  // 分类数据传递的参数
  let cascaderParams: ArticleCategoryByLazyDto = {
    parentId: null
  }
  // 获取分类数据
  const [articleCategroyList, setCategoryList] = useState<CascaderOption[]>(
    () => []
  )
  // 获取文章状态
  const [articleStatusList] = useState<any[]>(() => {
    const getStatus = new CustomMapToText().ArticleConst
    const arr: Array<{ value: number; label: string }> = []
    getStatus.forEach((item, key) => {
      arr.push({
        value: key,
        label: item
      })
    })
    return arr
  })

  const [cascaderCategory, setCategoryValue] = useState<(string | number)[]>([])

  useEffect(() => {
    loadArticleData()
  }, [])

  /** 动态获取文章分类的数据 */
  const loadArticleData = async (selectedOptions?: CascaderOption[]) => {
    if (selectedOptions) {
      cascaderParams = {
        parentId: selectedOptions[0].value as string
      }
    }

    const data = await getArticleCategoryByLazyApi(cascaderParams)
    if (data.code === ResultCode.SUCCESS) {
      if (!cascaderParams.parentId) {
        setCategoryList(() => {
          return data.data.map(item => {
            return {
              label: item.categoryName,
              value: item.id,
              isLeaf: false
            }
          })
        })
      } else {
        if (selectedOptions) {
          const targetOption = selectedOptions[selectedOptions.length - 1]
          console.log(targetOption)
          if (data.data.length) {
            targetOption.children = data.data.map(item => {
              return {
                label: item.categoryName,
                value: item.id,
                isLeaf: true
              }
            })
          } else {
            targetOption.isLeaf = true
            targetOption.children = []
          }
          setCategoryList([...articleCategroyList])
        }
      }
    }
  }

  /** 关键字查询 */
  const inputChange = useCallback(e => {
    setParams(prev => {
      return { ...prev, ...{ title: e.target.value } }
    })
  }, [])

  // 文章状态
  const statusChange = useCallback(value => {
    setParams(prev => {
      return { ...prev, ...{ status: value } }
    })
  }, [])

  /** 文章分类选择器 */
  const categoryChange = (value: (string | number)[]) => {
    setCategoryValue(value)
    setParams(prev => {
      return {
        ...prev,
        categoryId: value ? (value[value.length - 1] as string) : ""
      }
    })
  }

  /** 时间选择器改变事件 */
  const timeChange = value => {
    if (!value) return
    setParams(prev => {
      return {
        ...prev,
        ...{ time: value.map(item => dayjs(item).format("YYYY-MM-DD")) }
      }
    })
  }

  return (
    <Row gutter={12}>
      <Col xs={12} md={6} lg={6} xl={4}>
        <Input
          placeholder="请输入文章标题"
          value={params.title}
          onChange={inputChange}
        />
      </Col>
      {/* 文章状态 */}
      <Col xs={12} md={6} lg={6} xl={4}>
        <Select
          options={articleStatusList}
          value={params.status}
          placeholder="请选择文章状态"
          onChange={statusChange}
          style={{ width: "100%" }}
        ></Select>
      </Col>
      {/* 文章分类 */}
      <Col xs={12} md={6} lg={6} xl={4}>
        <Cascader
          options={articleCategroyList}
          value={cascaderCategory}
          placeholder="请选择文章分类"
          loadData={loadArticleData}
          onChange={categoryChange}
          changeOnSelect
          style={{ width: "100%" }}
        />
      </Col>
      {/* 时间选择器 */}
      <Col xs={12} md={6} lg={6} xl={6}>
        <RangePicker style={{ width: "100%" }} onChange={timeChange} />
      </Col>
      {/* 按钮 */}
      <Col xs={12} md={6} lg={6} xl={4}>
        <Button
          type="primary"
          style={{ marginRight: "10px" }}
          onClick={selectBtnParams}
        >
          查询
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setCategoryValue(() => [])
            resetBtn()
          }}
        >
          重置
        </Button>
      </Col>
    </Row>
  )
}

export default SelectBoxCom
