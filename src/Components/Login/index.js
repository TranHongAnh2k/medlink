import React from 'react'
import {  Input } from 'antd';
import {
    UserOutlined,
    EyeInvisibleOutlined,
    EyeTwoTone,
    LockOutlined
} from '@ant-design/icons';
import Checkbox from 'antd/lib/checkbox/Checkbox';


import {
    Container,
    LoginForm,
    Icons,
    Icon,
    Logo,
    Check,
    Logup,
    Pass,
    Button
} from './Logins'

import LogoImage from '../../assets/images/logo.png'
import LogoAndroid from '../../assets/images/logoAndroid.png'
import LogoIos from '../../assets/images/logoios.png'


const Login = () => {
    return (
        <Container>
            <LoginForm>
                <Logo>
                    <img src={LogoImage} alt="" />
                </Logo>


                <Input
                    size="large"
                    placeholder="Nhập email hoặc số điện thoại"
                    prefix={<UserOutlined />}
                    style={{ margin: '20px 0' }}
                />

                <Input.Password
                    size="large"
                    prefix={<LockOutlined />}
                    placeholder="Nhập mật khẩu"
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    style={{ margin: '20px 0' }}
                />


                <Check>
                    <Checkbox><p>Lưu mật khẩu</p></Checkbox>

                    <Pass>
                    <p>Quên mật khẩu</p>
                    </Pass>
                    
                </Check>

                <Button >Đăng nhập</Button>

                <Logup>
                    <p>Đăng kí?</p>
                    <span>nếu bạn chưa có tài khoản</span>
                </Logup>
            </LoginForm>

            <Icons>
                <Icon>
                    <img src={LogoAndroid} alt="" />
                </Icon>
                <Icon>
                    <img src={LogoIos} alt="" />
                </Icon>
            </Icons>
        </Container>
    )
}

export default Login
