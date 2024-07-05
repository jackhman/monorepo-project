import { useState, useEffect, useCallback, useReducer } from "react"
import { useParams } from "react-router-dom"
import { Input, Button, message } from "antd"
import { Editor, Toolbar } from "@wangeditor/editor-for-react"
import { IDomEditor, IEditorConfig, IToolbarConfig } from "@wangeditor/editor"
import "@wangeditor/editor/dist/css/style.css" // 引入 css

import "./index.scss"
import PreviewModalCom from "./components/PreviewModal"

import {
  articleSaveOrUpdateApi,
  getArticleCategoryApi,
  getArticleDetailsByIdApi
} from "@/api/modules/article"
import { ResultCode } from "@shared/enum/result-enum"
import {
  ArticleSaveOrEditDto,
  ArticleCategoryDto
} from "@shared/dto/article.dto"
import {
  ArticleCategoryLevelEnum,
  ArticleSaveTypeEnum
} from "@shared/enum/article-enum"
import { getUserIdStorage } from "@/utils/modules/commonSave"

const ACTIONS_TYPE = {
  /** 编辑器 */
  EDITOR: "editor",
  /** 用来设置 modal 的显示隐藏 */
  PREVIEWMODEL: "previewModal",
  /** 监听预览按钮的状态 */
  REVIEWDISABLED: "reviewDisabled",
  /** 弹出框页面加载状态 */
  MODAL_LOADING: "modalLoading"
}

class InitialState {
  /** 编辑器 */
  editor = null
  /** 用来设置 modal 的显示隐藏 */
  isPreviewModal = false
  /** 监听预览按钮的状态 */
  reviewBtnDisabled = false
  /** 弹出框页面加载状态 */
  modalLoading = false
}

function reducers(
  state: InitialState,
  action: { type: string; data: any }
): any {
  switch (action.type) {
    case ACTIONS_TYPE.EDITOR:
      return {
        ...state,
        editor: action.data
      }
    case ACTIONS_TYPE.PREVIEWMODEL:
      return {
        ...state,
        isPreviewModal: action.data
      }
    case ACTIONS_TYPE.REVIEWDISABLED:
      return {
        ...state,
        reviewBtnDisabled: action.data
      }
    case ACTIONS_TYPE.MODAL_LOADING:
      return {
        ...state,
        modalLoading: action.data
      }
  }
}

const ArticleCreate = () => {
  // 初始化 用来获取 url 地址栏的数据
  const { id: getId } = useParams()
  const [state, dispatch] = useReducer(reducers, new InitialState())

  const [editor, setEditor] = useState<IDomEditor | null>(null)
  // 编辑器内容
  const [html, setHtml] = useState("<p>hello</p>")
  // 获取 文章分类的数据
  const [articleCate, setArticleCate] = useState<ArticleCategoryDto[]>([])

  /** 新增 和编辑 数据 实例化 */
  const [articleParams, setArticleParams] = useState<ArticleSaveOrEditDto>(
    () => new ArticleSaveOrEditDto()
  )

  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {} // TS 语法
  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {
    placeholder: "请输入内容..."
  }
  // 初始化 编辑器、获取文章分类数据
  useEffect(() => {
    (async function () {
      const data = await getArticleCategoryApi({
        level: ArticleCategoryLevelEnum.second
      })
      if (data.code === ResultCode.SUCCESS) {
        setArticleCate(data.data)
      } else setArticleCate([])
    })()

    // 说明 是编辑
    if (getId) {
      (async function () {
        const data = await getArticleDetailsByIdApi(getId as string)
        if (data.code === ResultCode.SUCCESS) {
          const getData = data.data
          for (const key in articleParams) {
            if (Object.prototype.hasOwnProperty.call(articleParams, key)) {
              const element = getData[key]
              setArticleParams(prev => {
                return {
                  ...prev,
                  [key]: element
                }
              })
            }
          }
          setHtml(data.data.content)
        }
      })()
    }
    return () => {
      if (editor == null) return
      editor.destroy()
      setEditor(null)
    }
  }, [])

  /** 预览按钮 */
  const previewBtn = useCallback(() => {
    if(!editor) return
    if (!editor.getText()) {
      return message.warning("请输入正确的内容", 1)
    }
    setArticleParams(prev => {
      return {
        ...prev,
        userId: getUserIdStorage(),
        content: editor.getHtml()
      }
    })
    dispatch({ type: ACTIONS_TYPE.PREVIEWMODEL, data: true })
  }, [editor])

  // 预览按钮 是否可以点击
  useEffect(() => {
    if (articleParams.title) {
      dispatch({ type: ACTIONS_TYPE.REVIEWDISABLED, data: false })
    } else dispatch({ type: ACTIONS_TYPE.REVIEWDISABLED, data: true })
  }, [articleParams.title])

  /** 保存为草稿 或者 提交 */
  const handleConfirm = useCallback(
    async (type: ArticleSaveTypeEnum) => {
      const resultObj = articleParams
      // 未提交封面
      if (articleParams.coverImages.size === 0) {
        resultObj.coverImages.images = []
      }
      // 提交单封面
      else if (articleParams.coverImages.size === 1) {
        if (!articleParams.coverImages.images[0])
          return message.warning("必须上传一张封面")
        resultObj.coverImages.images = [articleParams.coverImages.images[0]]
      }
      // 提交三封面
      else if (articleParams.coverImages.size === 3) {
        if (articleParams.coverImages.images.length !== 3)
          return message.warning("必须上传三张封面")
      }

      resultObj.status = type
      console.log(resultObj, "resultObj")
      // return
      setArticleParams(() => resultObj)
      dispatch({ type: ACTIONS_TYPE.MODAL_LOADING, data: true })
      try {
        const data = await articleSaveOrUpdateApi(articleParams)
        if (data.code === ResultCode.SUCCESS) {
          message.success(data.msg)
          setArticleParams(prev => {
            return {
              ...prev,
              id: data.data.id,
              status: data.data.status
            }
          })
        }
        dispatch({ type: ACTIONS_TYPE.PREVIEWMODEL, data: false })
      } finally {
        dispatch({ type: ACTIONS_TYPE.MODAL_LOADING, data: false })
      }
    },
    [articleParams]
  )

  return (
    <div className="article-create-box">
      <div className="header-box">
        <Input
          placeholder="请输入文章标题"
          onChange={e =>
            setArticleParams(prev => {
              return {
                ...prev,
                title: e.target.value
              }
            })
          }
          className="title-input"
          value={articleParams.title}
        />
        <div className="btn-box">
          <Button
            type="primary"
            onClick={previewBtn}
            disabled={state.reviewBtnDisabled}
          >
            预览
          </Button>
        </div>
      </div>
      {/* 内容区域 */}
      <div>
        <Toolbar
          editor={editor}
          defaultConfig={toolbarConfig}
          mode="default"
          style={{ borderBottom: "1px solid #ccc" }}
        />
        <Editor
          defaultConfig={editorConfig}
          value={html}
          onCreated={setEditor}
          onChange={editor => setHtml(editor.getHtml())}
          mode="default"
          style={{ height: "500px", overflowY: "hidden" }}
        />
      </div>
      {/* 预览 */}
      <PreviewModalCom
        isModalVisible={state.isPreviewModal}
        articleParams={articleParams}
        articleCateList={articleCate}
        modalLoading={state.modalLoading}
        closeModal={() =>
          dispatch({ type: ACTIONS_TYPE.PREVIEWMODEL, data: false })
        }
        handleConfirm={handleConfirm}
        setArticleCateValue={type => {
          setArticleParams(prev => {
            return {
              ...prev,
              categoryId: type
            }
          })
        }}
        setArticleCoverImage={coverImages => {
          setArticleParams(prev => {
            return {
              ...prev,
              coverImages
            }
          })
        }}
      ></PreviewModalCom>
    </div>
  )
}
export default ArticleCreate
