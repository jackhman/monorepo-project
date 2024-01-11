import { useState } from "react"
import { Button, Form, Input, Modal, Radio, Select, Space } from "antd"
import { HomeFilled } from "@ant-design/icons"
import "./index.scss"
const { Option } = Select
import IconList from "@/components/IconList"
import CustomIconCom from "@/components/CustomIcon"
const AdminManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState("新增菜单")
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()
  function addMenu() {
    setModalTitle("新增菜单")
    setIsModalOpen(true)
  }

  /** 弹出框确定按钮 */
  async function handleConfrim() {
    // setIsModalOpen(false)
    const values = await form.validateFields()
    console.log("Success:", values)
  }

  /** 弹出框取消按钮 */
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  function iconListClick(icon) {
    console.log(icon)
  }

  return (
    <div className="admin-management-box">
      <Space>
        <Button type="primary" onClick={addMenu}>
          新增菜单
        </Button>
      </Space>
      <Modal
        title={modalTitle}
        open={isModalOpen}
        onOk={handleConfrim}
        onCancel={handleCancel}
        maskClosable={false}
        width="50%"
        wrapClassName="admin-management-box-modal"
        footer={[
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleConfrim}
          >
            确定
          </Button>,
          <Button key="back" onClick={handleCancel}>
            取消
          </Button>
        ]}
      >
        <Form
          form={form}
          name="control-hooks"
          onFinish={handleConfrim}
          labelCol={{ span: 3 }}
          wrapperCol={{ span: 24 }}
        >
          <Form.Item
            name="note"
            label="上级菜单"
            rules={[{ required: true, message: "22332232" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="radio-group" label="菜单类型">
            <Radio.Group>
              <Radio value="a">目录</Radio>
              <Radio value="b">菜单</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="icon" label="菜单图标">
            <div className="form-select-icon-box">
              <Input
                className="form-select-icon-box-input"
                placeholder="点击选择菜单图标"
                disabled
                prefix={<CustomIconCom iconPath="icon-Github"></CustomIconCom>}
              />
              <Select
                className="form-select-icon-box-select"
                defaultValue={<HomeFilled></HomeFilled>}
                allowClear
                dropdownRender={() => (
                  <IconList iconClick={iconListClick}></IconList>
                )}
              ></Select>
            </div>
          </Form.Item>
          <Form.Item
            shouldUpdate={(prevValues, currentValues) =>
              prevValues.gender !== currentValues.gender
            }
          >
            {({ getFieldValue }) =>
              getFieldValue("gender") === "other" ? (
                <Form.Item
                  name="customizeGender"
                  label="Customize Gender"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              ) : null
            }
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default AdminManagement
