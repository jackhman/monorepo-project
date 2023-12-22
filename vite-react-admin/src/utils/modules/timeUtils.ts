import dayJs from "dayjs"

/** 时间的格式 */
export const ITimeType = {
  /** 年月日 */
  NYR: "YYYY-MM-DD",
  /** 年月日 时分秒 */
  NYRSFM: "YYYY-MM-DD HH:mm:ss"
}

/** 返回 处理的时间格式 */
export const formateNormalTime = (
  timeValue: Date,
  timeType: string = ITimeType.NYR
) => {
  return dayJs(timeValue).format(timeType)
}
