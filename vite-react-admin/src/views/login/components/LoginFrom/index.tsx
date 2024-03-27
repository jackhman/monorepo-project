import { Form, Input, Button, Checkbox, type FormProps } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"

import "./index.scss"
import styles from "../../index.module.scss"
import { LoginUserDto } from "@shared/dto/user.dto"

interface IProps {
  login: (e: LoginUserDto) => void
}

const LoginFrom = (props: IProps) => {
  /** 登录请求 */
  const onFinish: FormProps<LoginUserDto>["onFinish"] = async values => {
    props.login(values)
  }
  /** 忘记密码 */
  function forgotPass() {
    console.log("forgotPass")
  }
  return (
    <div className="login-form">
      <div className={`"flip-vertical-right" : ""}`}>
        <Form
          labelAlign="left"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          name="normal_login"
          onFinish={onFinish}
        >
          <p className={`${styles.text} login-text`}>登录</p>
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
              className={styles["form-button"]}
            >
              登录
            </Button>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 24 }} className="password-opera">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住密码</Checkbox>
            </Form.Item>
            <span className="login-form-forgot" onClick={forgotPass}>
              忘记密码
            </span>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default LoginFrom
