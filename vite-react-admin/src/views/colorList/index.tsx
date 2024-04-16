import { Col, Row, message } from "antd"
import colorOptions from "./colorOptions"
import styles from "./index.module.scss"
import { useRef } from "react"
const ColorList = () => {
  const textRef = useRef("")
  function colorClick(item: { label: string; color: string }) {
    textRef.current = item.color
    const text = textRef.current
    navigator.clipboard.writeText(text)
    message.success(`${item.label}的十六进制颜色${item.color}复制成功 🎉`)
  }
  return (
    <Row gutter={5}>
      {colorOptions.map((item, index) => {
        return (
          <Col key={index} span={4}>
            <div
              className={styles["color-item"]}
              onClick={() => colorClick(item)}
            >
              <span>{item.label}</span>
              <span
                className={styles["color"]}
                style={{ backgroundColor: item.color }}
              >
                {item.color}
              </span>
            </div>
          </Col>
        )
      })}
    </Row>
  )
}

export default ColorList
