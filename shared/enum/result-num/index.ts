/**
 * 返回的状态码
 */
export enum ResultCode {
  /**
   * 成功 0
   */
  SUCCESS = 0,

  /*
  参数错误 101
   */
  PARAMS_ERROR = 101,

  /**
   * 失败 100
   */
  ERROR = 100,

  /**
   * 服务器的失败
   */
  SERVER_ERROR = 500,

  /**
   * token 的失败
   */
  TOKEN_ERROR = 50001
}

export enum ResultMsg {
  LOGIN_SUCCESS = "登录成功",

  LOGIN_FAIL = "登录失败, 用户名或者密码不正确",

  LOGOUT_SUCCESS = "退出登录成功",

  USERNAME_IS_NOT = "登录的用户名不存在",

  USERNAME_IS = "用户名已存在",

  USERNAME_IS_ID = "用户id不正确",

  REGISTER_SUCCESS = "注册成功",

  REGISTER_FAIL = "注册失败",

  ID_FAIL = "id不正确",

  REQUEST_SUCCESS = "请求成功",

  REQUEST_FAIL = "请求失败",

  PARAMS_VERIFY = "参数校验失败----",

  INSERT_SUCCESS = "新增成功",

  INSERT_FAIL = "新增失败",

  EDIT_SUCCESS = "编辑成功",

  EDIT_FAIL = "编辑失败",

  UPDATE_SUCCESS = "更新成功",

  UPDATE_FAIL = "更新失败",

  DELETE_FAIL = "删除失败",

  DELETE_SUCCESS = "删除成功",

  TOKEN_ERROR = "token不存在或者已经过期",

  PARENT_ID_EMPTY = "parentId 为必填项",

  SELECT_FAIL = "查询失败,检查参数是否正确----",

  REJECT_REASON = "文章拒绝原因必填",

  UPLOAD_SUCCESS = "上传成功",

  UPLOAD_IMG_FAIL = "图片上传失败"
}
