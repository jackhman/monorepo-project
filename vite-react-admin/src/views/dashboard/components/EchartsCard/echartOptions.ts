import type { EChartsOption } from "echarts"
import { RadarSeriesDataItemOption } from "echarts/types/src/chart/radar/RadarSeries.js"
/** 自动播放的柱形图 */
export const autoPlayBarEchartOption = () => {}

/** 雷达图 */
export const radarEchartOption = (): EChartsOption => {
  const indicator = [
    {
      name: "A",
      max: 100
    },
    {
      name: "B",
      max: 100
    },
    {
      name: "C",
      max: 100
    },
    {
      name: "D",
      max: 100
    },
    {
      name: "E",
      max: 100
    }
  ]
  const dataArr: RadarSeriesDataItemOption[] = [
    {
      value: [88, 85, 88, 65, 90],
      itemStyle: {
        color: "#33a3dc",
        shadowColor: "#33a3dc",
        shadowBlur: 10
      },
      areaStyle: {
        // 单项区域填充样式
        color: "#33a3dc",
        opacity: 0.5 // 区域透明度
      },
      
    },
    {
      value: [83, 87, 86, 60, 88],
      itemStyle: {
        color: "#7bbfea",
        shadowColor: "#7bbfea",
        shadowBlur: 10
      },
      areaStyle: {
        // 单项区域填充样式
        color: "#7bbfea",
        opacity: 0.7 // 区域透明度
      }
    }
  ]
  return {
    tooltip:{
      show: true,
      trigger:"item",
    },
    radar: {
      indicator,
      splitArea: {
        // 坐标轴在 grid 区域中的分隔区域，默认不显示。
        show: true,
        areaStyle: {
          // 分隔区域的样式设置。
          color: ["rgba(255,255,255,0)", "rgba(255,255,255,0)"] // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
        }
      },
      axisLine: {
        //指向外圈文本的分隔线样式
        lineStyle: {
          color: "rgba(127, 149, 157, 0.19)"
        }
      },
      splitLine: {
        lineStyle: {
          color: "rgba(127, 149, 157, 0.19)" // 分隔线颜色
        }
      },
      axisName: {
        color: "rgba(74, 186, 230, 1)",
        fontWeight: "bolder"
      }
    },
    series: [
      {
        type: "radar",
        symbolSize: 8,
        data: dataArr
      }
    ]
  }
}
