import { Row, Col } from "antd"
import type { EChartsOption, ECharts } from "echarts"
import EchartsCom from "@/components/EchartsCom"
import { useEffect, useRef } from "react"
const lineOptions: EChartsOption = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: "line",
      smooth: true
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
  const autoPlayEchartRef = useRef(null)

  useEffect(() => {
    console.log(autoPlayEchartRef.current)
  }, [])
  return (
    <div className="echart-component">
      <Row className="echart-component-main" gutter={10}>
        <Col xs={{ span: 24 }} xl={{ span: 8 }} className="echart-item-col">
          <div className="echart-item-div">
            <EchartsCom options={lineOptions}></EchartsCom>
          </div>
        </Col>
        <Col xs={{ span: 24 }} xl={{ span: 8 }} className="echart-item-col">
          <div className="echart-item-div">
            <EchartsCom
              ref={autoPlayEchartRef}
              options={lineOptions}
            ></EchartsCom>
          </div>
        </Col>
        <Col xs={{ span: 24 }} xl={{ span: 8 }} className="echart-item-col">
          <div className="echart-item-div">
            <EchartsCom options={lineOptions}></EchartsCom>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default EchartsCard
