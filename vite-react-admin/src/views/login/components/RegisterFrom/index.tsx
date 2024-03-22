import { useState } from "react"
import { Form, Input, Button, } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import { RegisterUserDto } from "@shared/dto/user.dto"
const RegisterFrom = () => {
  interface IForm {
    userName: string
    password: string
  }
  /** 注册请求 */
  const onFinish = async (values: IForm) => {
    console.log(values)
  }
  return (
    <Form
      labelAlign="left"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      onFinish={onFinish}
    >
      <p className="login-text">注册用户</p>
      <Form.Item
        label="用户名"
        name="userName"
        rules={[{ required: false, message: "请输入用户名!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="用户名"
        />
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: false, message: "请输入密码" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="密码"
        />
      </Form.Item>
      <Form.Item
        label="确认密码"
        name="password"
        rules={[{ required: false, message: "请输入密码" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="密码"
        />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 24 }}>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          loading={loading}
        >
          注册
        </Button>
      </Form.Item>
    </Form>
  )
}

export default RegisterFrom
