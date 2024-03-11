import React from 'react';
import { Alert, Button, Card, Flex, Form, Input, Spin, Typography } from 'antd';
import { Link } from 'react-router-dom';
import registerImg from '../assets/register.png'
import useSignup from '../hooks/useSignup';

const Register = () => {
        const {loading, error, registerUser} = useSignup();
    const handleRegister = (values) => {
       registerUser(values);
    };

    return <Card className='form-container'>
        <Flex gap='large' align='center'>
            {/* form */}
            <Flex vertical flex={1}>
                <Typography.Title level={3} strong className='title'>
                    Create an Account
                </Typography.Title>
                <Typography.Text type='secondary' strong className='slogan'>
                    Join for exclusive eccess!
                </Typography.Text>
                <Form layout='vertical' onFinish={handleRegister} autoComplete='off'>
                    <Form.Item label='Full Name' name='name' rules={[
                        {
                            required: true,
                            message: 'please input your full name'
                        },
                    ]}>
                        <Input size='large' placeholder='Enter Your Full Name' />
                    </Form.Item>
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
                    <Form.Item label='Password' name='passwordConfirm' rules={[
                        {
                            required: true,
                            message: 'please re-input your Password!'
                        }
                    ]}>
                        <Input.Password size='large' placeholder='Re-enter Your Password' />
                    </Form.Item>
                    {
                        error && <Alert description={error} type='error' showIcon closable  className='alert'/>
                    }

                    <Form.Item>
                        <Button
                            type={`${loading ? '' : 'primary'}`}
                            htmlType='submit' size='large' className='btn'>

                            {loading ? <Spin /> : 'Create Account'}
                            
                        </Button>
                    </Form.Item>

                    <Form.Item>
                        <Link to='/login'>
                            <Button size='large' className='btn'>Sign In</Button>
                        </Link>
                    </Form.Item>
                </Form>
            </Flex>

            {/* image */}
            <Flex flex={1}>
                <img src={registerImg} className='auth-img' />
            </Flex>
        </Flex>
    </Card>
};

export default Register
