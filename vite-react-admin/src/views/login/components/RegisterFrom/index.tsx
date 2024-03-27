import { Form, Input, Button, type FormProps } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import styles from "../../index.module.scss"
import { RegisterUserDto } from "@shared/dto/user.dto"

interface IProps {
  register: (e: RegisterUserDto) => void
}

const RegisterFrom = (props: IProps) => {
  /** 注册请求 */
  const onFinish: FormProps<RegisterUserDto>["onFinish"] = values => {
    console.log(values)
    props.register(values)
  }
  const onFinishFailed: FormProps<RegisterUserDto>["onFinishFailed"] =
    errorInfo => {
      console.log("Failed:", errorInfo)
    }
  return (
    <Form
      labelAlign="left"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <p className={styles.text}>注册用户</p>
      <Form.Item
        label="用户名"
        name="userName"
        rules={[{ required: true, message: "请输入用户名!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="用户名"
        />
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="密码"
        />
      </Form.Item>
      <Form.Item
        label="确认密码"
        name="confirmPass"
        rules={[
          {
            required: true
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve()
              }
              return Promise.reject(
                new Error("两次密码不一致，请检查后再次重试！！！")
              )
            }
          })
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="密码"
        />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 24 }}>
        <Button
          type="primary"
          htmlType="submit"
          className={styles["form-button"]}
        >
          注册
        </Button>
      </Form.Item>
    </Form>
  )
}

export default RegisterFrom
