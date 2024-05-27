import request from ".."

/** 获取所有分类数据 */
export const articleCategoryApi = params => request.get("article/category/all", params)

