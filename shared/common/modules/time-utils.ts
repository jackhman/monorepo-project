import dayjs from "dayjs"

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
  return dayjs(timeValue).format(timeType)
}
