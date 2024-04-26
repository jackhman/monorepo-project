/** 公用的hooks */
import {
  useState,
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
  useCallback
} from 'react'

import { ResultCode } from '@shared/enum/result-enum'
import { ResultModel } from "@shared/model"
import { BasePageDto, TableListResultDto } from '@shared/dto/page.dto'

/** 自定义设置 useState */
export const useStateHooks = <T>(initState) => {
  const [state, setState] = useState<T>(initState)
  const isUpdate = useRef<any>()
  const setUseState = (state, cb) => {
    setState(prev => {
      isUpdate.current = cb
      return typeof state === 'function' ? state(prev) : state
    })
  }
  useEffect(() => {
    if (isUpdate.current) {
      isUpdate.current()
    }
  })
  return [state, setUseState]
}

/** 返回的元组
 * 表格的列表
 * 分页器的实例
 * 表格的加载状态
 * 是否需要重新加载 setHooks
 */
type ToupleTable<T> = [
  Array<T>,
  BasePageDto,
  boolean,
  Dispatch<SetStateAction<boolean>>
]

/** 用来统一处理表格的 自定义 hooks */
export const useTableHooks = <T, E extends BasePageDto>(
  callback: (params: E) => Promise<ResultModel<TableListResultDto<T>>>,
  params: E
): ToupleTable<T> => {
  // 表格的数据
  const [tableList, setTableList] = useState<Array<T>>(() => [])
  // 分页器的实例
  const [pageParams, setPageParams] = useState<BasePageDto>(() => new BasePageDto())
  // 表格的加载状态
  const [loading, setLoading] = useState<boolean>(() => false)
  // 表格是否需要重新加载
  const [reloadFlag, setReloadFlag] = useState<boolean>(() => false)

  const getTableList = useCallback(async function () {
    setLoading(() => true)
    try {
      const data = await callback(params)
      if (data.code === ResultCode.SUCCESS) {
        setTableList(data.data.records)
        setPageParams(data.data)
      }
    } catch (error) {
      console.log(error, '')
    } finally {
      setLoading(() => false)
      setReloadFlag(() => false)
    }
    // 当 传递的参数变化的时候,需要更新 useCallback
  }, [params])

  // 用来监听页码和页数的改变,用来调取数据
  useEffect(() => {
    getTableList()
  }, [params.current, params.pageSize])

  // 用来监听是否需要重新获取数据---手动
  useEffect(() => {
    if (reloadFlag) {
      getTableList()
    }
  }, [reloadFlag])
  return [tableList, pageParams, loading, setReloadFlag]
}
