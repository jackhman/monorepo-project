import React, { useState, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { Table, Space, Button, Popconfirm, message, Pagination } from "antd"
import { CloseOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons"
import "./index.scss"
import { ROUTE_PATH } from "@/router/RouteConst"

import { articleListApi, articleDeleteApi } from "@/api/modules/article"

import { ITimeType, formateNormalTime } from "@/utils/modules/time-utils"
import { ResultCode } from "@shared/enum/result-enum"

import SelectBoxCom from "./components/SelectBox"
import { useTableHooks } from "@/utils/hooks"
import ArticleStatusCom from "../components/ArticleStatus"
import Permission from "@/components/Permission"
import { ColumnType } from "antd/lib/table/interface"
import { getUserIdStorage } from "@/utils/modules/commonSave"
import { ArticleListParamsModel } from "@/typescript/shared/model/article"
import { ArticleDto } from "@shared/dto/article.dto"
import { ArticleStatusEnum } from "@shared/enum/article-enum"

const articleOperation = {
  /** 预览 */
  preview: ROUTE_PATH.ARTICLE_DETAILS,
  /** 编辑 */
  edit: ROUTE_PATH.ARTICLE_EDIT
}

const ArticleList: React.FC<any> = () => {
  const history = useNavigate()

  const [params, setParams] = useState<ArticleListParamsModel>(
    () => new ArticleListParamsModel()
  )

  // 表格的数据
  const [tableData, pageParams, tableLoading, setReloadFlag] = useTableHooks<
  ArticleDto,
    ArticleListParamsModel
  >(articleListApi, params)

  /** 文章删除 */
  const deteleClick = useCallback(
    async (record: ArticleDto) => {
      const { id } = record
      const data = await articleDeleteApi(id)
      if (data.code === ResultCode.SUCCESS) {
        message.success("删除成功")
        setReloadFlag(true)
      }
    },
    [setReloadFlag]
  )

  /** 按钮点击 跳转页面 */
  const clickLink = useCallback((record: ArticleDto, pathname: string) => {
    const { id } = record
    history(pathname, {
      state: id
    })
  }, [])

  const columns: ColumnType<ArticleDto>[] = [
    {
      title: "序号",
      dataIndex: "index",
      render: (index) => {
        return (pageParams.current - 1) * pageParams.size + index + 1
      }
    },
    {
      title: "文章标题",
      dataIndex: "title",
      width: 200
    },
    {
      title: "一级分类",
      dataIndex: "categoryParentName"
    },
    {
      title: "二级分类",
      dataIndex: "categoryName"
    },
    {
      title: "创建人",
      dataIndex: "nickName"
    },
    {
      title: "创建时间",
      dataIndex: "createTime",
      render: text => <span>{formateNormalTime(text, ITimeType.NYRSFM)}</span>
    },
    {
      title: "更新时间",
      dataIndex: "updateTime",
      render: text => <span>{formateNormalTime(text, ITimeType.NYRSFM)}</span>
    },
    {
      title: "文章状态",
      dataIndex: "status",
      width: 100,
      render: (text: ArticleStatusEnum) => <ArticleStatusCom status={text} />
    },
    {
      title: "操作",
      key: "action",
      width: 100,
      render: (record: ArticleDto) => (
        <Space size="small">
          <Button
            title="预览"
            shape="circle"
            size="small"
            type="primary"
            icon={<EyeOutlined />}
            onClick={() => clickLink(record, articleOperation.preview)}
          ></Button>
          <Permission permissionFlag={record.userId === getUserIdStorage()}>
            <Button
              title="编辑"
              shape="circle"
              size="small"
              type="primary"
              icon={<EditOutlined />}
              onClick={() => clickLink(record, articleOperation.edit)}
            ></Button>
          </Permission>
          <Popconfirm
            title="确定删除该文章吗？"
            onConfirm={() => deteleClick(record)}
            okText="确定"
            cancelText="取消"
          >
            <Button
              title="删除"
              shape="circle"
              danger
              size="small"
              icon={<CloseOutlined />}
            ></Button>
          </Popconfirm>
        </Space>
      )
    }
  ]

  /** 页码或 pageSize 改变的回调*/
  const onPageChange = useCallback((page: number, pageSize?: number) => {
    setParams(prev => {
      return { ...prev, ...{ pageNum: page, pageSize: pageSize as number } }
    })
  }, [])

  /** 查询按钮 */
  const selectBtnParams = (): void => {
    console.log(params, "params")
    setReloadFlag(() => true)
  }

  /** 重置按钮 */
  const resetBtn = useCallback(() => {
    setParams(() => new ArticleListParamsModel())
    setReloadFlag(true)
  }, [])

  return (
    <div className="article-list-box">
      {/* 筛选按钮 */}
      <div className="select-box">
        <SelectBoxCom
          params={params}
          setParams={setParams}
          selectBtnParams={selectBtnParams}
          resetBtn={resetBtn}
        />
      </div>
      {/* 表格 */}
      <Table
        rowKey="id"
        bordered
        loading={tableLoading}
        columns={columns}
        dataSource={tableData}
        pagination={false}
        scroll={{ x: true }}
      />
      {/* 分页 */}
      <div className="page-box">
        <Pagination
          total={pageParams.total}
          pageSize={pageParams.size}
          current={pageParams.current}
          onChange={onPageChange}
          showSizeChanger
          showQuickJumper
          showTotal={total => `总数据 ${total}`}
        />
      </div>
    </div>
  )
}

export default ArticleList
