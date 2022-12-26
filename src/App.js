import React from 'react';
import './App.css';
import { Button, Checkbox, Form, Input } from 'antd';
<h2>Ini Adalah Form Login Ya gess</h2>
const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };



  return (
    <Form
      name="basic"
      labelCol={{ span: 2 }}
      wrapperCol={{ span: 9 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >

<h2>Ini Adalah Form Login Ya gess</h2>

      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Masukkan username kamu!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Masukkan password kamu!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 2, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 2, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;