import React from 'react'
import { Row, Col } from 'antd';
import { Button, Form, Input } from 'antd';
const SignupForm = () => {
  const [form] = Form.useForm();

  return (
    <>
    <Row>
      <Col span={12}>
        <h2>Signup Form</h2>
      </Col>
    </Row>
    <Row>
      <Col lg={{span: 6}} md={{span: 12}} xs={{span: 24}} >
        <Form name="signup" form={form}
          autoComplete="off"
          
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          validateTrigger="onSubmit"
          onFinish = {() => {
            alert("Submitted form")
            form.resetFields();
            }
          }
        >
            <Form.Item
            label="Name"
            labelAlign="left"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please enter your name!',
              },
            ]}
          >
                <Input />
            </Form.Item>

            <Form.Item
            name="email"
            label="Email"
            labelAlign="left"
            rules={[
              { 
                type: "email",
                message: "This isn't a valid email"
              },
            ]}
          >
              <Input />
            </Form.Item>

            <Form.Item
            label="Password"
            labelAlign="left"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                min: 9,
                message: 'Password should be longer than 8 characters!',
              },
        ]}
      >
        <Input.Password />
      </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>

        
      </Col>
    </Row>
    </>
  )
}

export default SignupForm