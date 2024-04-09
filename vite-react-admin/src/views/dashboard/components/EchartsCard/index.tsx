import { Row, Col } from "antd"
import { EChartsOption, ECharts, graphic } from "echarts"
import EchartsCom from "@/components/EchartsCom"
import { useEffect, useState } from "react"
import dayjs from "dayjs"
// 获取从今天往前的七天日期
const xData: string[] = []
for (let i = 0; i < 7; i++) {
  xData.push(dayjs().subtract(i, "day").format("YYYY-MM-DD"))
}
const lineOptions: EChartsOption = {
  grid: {
    right: "8%",
    top: "8%",
    left: "8%",
    bottom: "8%"
  },
  xAxis: {
    data: xData,
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    z: 10
  },
  yAxis: {
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: "#999"
    }
  },
  dataZoom: [
    {
      type: "inside"
    }
  ],
  series: [
    {
      type: "bar",
      showBackground: true,
      itemStyle: {
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "#83bff6" },
          { offset: 0.5, color: "#188df0" },
          { offset: 1, color: "#188df0" }
        ])
      },
      emphasis: {
        itemStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#2378f7" },
            { offset: 0.7, color: "#2378f7" },
            { offset: 1, color: "#83bff6" }
          ])
        }
      },
      data: [220, 182, 191, 234, 290, 900, 400]
    }
  ]
}

let echartsInterval: any = null

/** 清除 echarts 的定时器 */
const clearEchartsInterval = () => {
  clearInterval(echartsInterval)
}
/** 自动播放的 echart 图表 */
const autoPlayBarEchartsUtils = (myEchart: ECharts): EChartsOption => {
  const xAxisData: string[] = []
  const barSeriesData: number[] = []
  const lineSeriseData: number[] = []
  const whileLength = 10
  ;(function () {
    let len = 0
    let now = new Date()
    while (len < whileLength) {
      xAxisData.unshift(now.toLocaleTimeString().replace(/^\D*/, ""))
      barSeriesData.push(Math.floor(Math.random() * 1000) + len)
      lineSeriseData.push(Math.floor(Math.random() * 1000) + len)
      now = new Date(+now - 2000)
      len++
    }
  })()
  echartsInterval = setInterval(() => {
    const now = new Date()
    xAxisData.shift()
    xAxisData.push(now.toLocaleTimeString().replace(/^\D*/, ""))
    barSeriesData.shift()
    lineSeriseData.shift()
    barSeriesData.push(Math.floor(Math.random() * 1000))
    lineSeriseData.push(Math.floor(Math.random() * 1000))
    myEchart.setOption({
      xAxis: [
        {
          type: "category",
          boundaryGap: true,
          data: xAxisData
        }
      ],
      series: [
        {
          data: barSeriesData
        },
        {
          data: lineSeriseData
        }
      ]
    })
    myEchart.dispatchAction({
      type: "showTip",
      seriesIndex: 0,
      dataIndex: 0
    })
  }, 2100)
  return {
    title: {
      text: "自动播放的 echart 图表"
    },
    grid: {
      right: "8%",
      left: "8%",
      bottom: "8%"
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "line",
        label: {
          backgroundColor: "#283b56"
        }
      }
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: true,
        data: xAxisData
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "Bar",
        type: "bar",
        data: barSeriesData
      },
      {
        name: "Line",
        type: "line",
        data: lineSeriseData
      }
    ]
  }
}
const EchartsCard = () => {
  const [autoPlayEchartOptions, setAutoPlayEchartOptions] =
    useState<EChartsOption>({})

  function tranEChart(echart: ECharts) {
    if (echart) {
      setAutoPlayEchartOptions(autoPlayBarEchartsUtils(echart))
    }
  }

  /** 用来清除自动播放的echart定时器 */
  useEffect(() => {
    return () => {
      clearEchartsInterval()
    }
  }, [])
  return (
    <div className="echart-component">
      <div className="echart-item-div">
        <EchartsCom
          options={autoPlayEchartOptions}
          tranEChart={tranEChart}
          height="450px"
        ></EchartsCom>
      </div>
      <Row className="echart-component-main" gutter={10}>
        <Col xs={{ span: 24 }} xl={{ span: 12 }} className="echart-item-col">
          <div className="echart-item-div">
            <EchartsCom options={lineOptions} height="450px"></EchartsCom>
          </div>
        </Col>

        <Col xs={{ span: 24 }} xl={{ span: 12 }} className="echart-item-col">
          <div className="echart-item-div">
            <EchartsCom options={lineOptions} height="450px"></EchartsCom>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default EchartsCard
