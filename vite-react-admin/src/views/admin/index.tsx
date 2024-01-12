import { useState, useRef } from "react"
import {
  Button,
  Form,
  Input,
  Modal,
  Radio,
  Select,
  Space,
  TreeSelect
} from "antd"
import { HomeFilled } from "@ant-design/icons"
import "./index.scss"
import IconList from "@/components/IconList"
import CustomIconCom from "@/components/CustomIcon"
import { MenuVisibleEnum, MenuStatusEnum } from "@shared/enum/menu-enum"

interface BaseSelectRef {
  focus: () => void
  blur: () => void
}

const AdminManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState("新增菜单")
  const [loading] = useState(false)
  const selectRef = useRef<BaseSelectRef>(null)
  const [iconPath, setIconPath] = useState("#icon-Menu")
  const [form] = Form.useForm()
  const [iconInputValue, setIconInputValue] = useState("")
  const initialValues = {
    visible: MenuVisibleEnum.show,
    status: MenuStatusEnum.normal
  }
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
    form.resetFields()
  }
  // 点击了icon列表图标
  function iconListClick(icon) {
    form.setFieldsValue({
      icon: icon.name
    })
    setIconPath(icon.icon)
    selectRef.current!.blur()
    setIconInputValue(form.getFieldValue("icon"))
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
        style={{ maxWidth: 1200 }}
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
          rootClassName="modal-form"
          onFinish={handleConfrim}
          initialValues={initialValues}
          wrapperCol={{ span: 22 }}
        >
          <Form.Item name="parentId" label="上级菜单">
            <TreeSelect
              treeData={[
                {
                  title: "主目录",
                  value: "",
                  children: [{ title: "Bamboo", value: "bamboo" }]
                }
              ]}
            />
          </Form.Item>
          <Form.Item name="icon" label="菜单图标">
            <div className="form-select-icon-box">
              <Input
                className="form-select-icon-box-input"
                placeholder="点击选择菜单图标"
                disabled
                value={iconInputValue}
                prefix={<CustomIconCom iconPath={iconPath}></CustomIconCom>}
              />
              <Select
                className="form-select-icon-box-select"
                defaultValue={<HomeFilled></HomeFilled>}
                allowClear
                /* @ts-ignore */
                ref={selectRef}
                dropdownRender={() => (
                  <IconList iconClick={iconListClick}></IconList>
                )}
              ></Select>
            </div>
          </Form.Item>
          <Form.Item
            name="menuName"
            label="菜单名称"
            rules={[{ required: true, message: "菜单名称必填" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="path"
            label="路由地址"
            rules={[{ required: true, message: "请填写路由地址" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="link" label="外链地址">
            <Input />
          </Form.Item>
          <Form.Item
            className="form-inline-item"
            name="visible"
            label="显示状态"
          >
            <Radio.Group>
              <Radio value={MenuVisibleEnum.show}>显示</Radio>
              <Radio value={MenuVisibleEnum.hidden}>隐藏</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            className="form-inline-item"
            name="status"
            label="菜单状态"
          >
            <Radio.Group>
              <Radio value={MenuStatusEnum.normal}>正常</Radio>
              <Radio value={MenuStatusEnum.stop}>停用</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item name="remark" label="菜单备注">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default AdminManagement
