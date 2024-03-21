import { useState, useEffect } from "react"
import {
  Button,
  Form,
  Input,
  Modal,
  Radio,
  Space,
  TreeSelect
} from "antd"
import "./index.scss"
import { MenuVisibleEnum, MenuStatusEnum } from "@shared/enum/menu-enum"
import { menuAddApi, menuListApi } from "@/api/modules/menu"
import { MenuAddDto, MenuDto } from "@shared/dto/menu.dto"
import { MenuPageDto } from "@shared/dto/page.dto"
import FormSelectIcon from "./components/FormSelectIcon"
import MenuList from "./components/MenuList"
import { ResultCode } from "@shared/enum/result-enum"
const AdminManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState("新增菜单")
  const [menuList, setMenuList] = useState<MenuDto[]>([])
  const [loading] = useState(false)
  const [form] = Form.useForm<MenuAddDto>()
  useEffect(()=> {
    fetchFunc()
  }, [])

  async function fetchFunc() {
    const params:MenuPageDto = {
      pageSize: 10,
      current: 1
    }
    const data = await menuListApi(params)
    if(data.code === ResultCode.SUCCESS) {
      setMenuList(data.data)
    }
  }


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
    const params: MenuAddDto = JSON.parse(JSON.stringify(values))
    console.log(params)
    await menuAddApi(params)
  }

  /** 弹出框取消按钮 */
  const handleCancel = () => {
    setIsModalOpen(false)
    form.resetFields()
  }
  // 点击了icon列表图标
  function iconListClick(iconName: string) {
    form.setFieldsValue({
      icon: iconName
    })
  }

  return (
    <div className="admin-management-box">
      <Space>
        <Button type="primary" onClick={addMenu}>
          新增菜单
        </Button>
      </Space>

      <MenuList list={menuList}></MenuList>

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
            <FormSelectIcon iconListClick={iconListClick} />
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
          <Form.Item
            name="component"
            label="组件地址"
            rules={[{ required: true, message: "请填写组件地址" }]}
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
