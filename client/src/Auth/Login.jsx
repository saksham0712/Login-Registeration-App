import React from 'react'
import { Alert, Button, Card, Flex, Form, Input, Spin, Typography } from 'antd';
import { Link } from 'react-router-dom';
import loginrImg from '../assets/login.png'
import useLogin from '../hooks/userlogin';

const Login = () => {
    
    const {error, loading, loginUser} = useLogin();
    const handleLogin =  async(values) => {
      await loginUser(values);
    }
  return <Card className='form-container'>
  <Flex gap='large' align='center'>
     {/* image */}
     <Flex flex={1}>
          <img src={loginrImg} className='auth-img' />
      </Flex>
      {/* form */}
      <Flex vertical flex={1}>
          <Typography.Title level={3} strong className='title'>
             Sign In
          </Typography.Title>
          <Typography.Text type='secondary' strong className='slogan'>
              Unclock Your World.
          </Typography.Text>
          <Form layout='vertical' onFinish={handleLogin} autoComplete='off'>
             
              <Form.Item label='Email' name='email' rules={[
                  {
                      required: true,
                      message: 'please input your Email'
                  },
                  {
                      type: 'email',
                      message: 'please enter an valid email'
                  }
              ]}>
                  <Input size='large' placeholder='Enter Your Email' />
              </Form.Item>
              <Form.Item label='Password' name='password' rules={[
                  {
                      required: true,
                      message: 'please input your Password!'
                  }
              ]}>
                  <Input.Password size='large' placeholder='Enter Your Password' />
              </Form.Item>
             
              {
                  error && <Alert description={error} type='error' showIcon closable  className='alert'/>
              }

              <Form.Item>
                  <Button
                      type={`${loading ? '' : 'primary'}`}
                      htmlType='submit' size='large' className='btn'>

                     { loading ? <Spin /> : 'Sign In'}
                    
                  </Button>
              </Form.Item>

              <Form.Item>
                  <Link to='/'>
                      <Button size='large' className='btn'>
                        Create Account
                      </Button>
                  </Link>
              </Form.Item>
          </Form>
      </Flex>

     
  </Flex>
</Card>
}

export default Login
