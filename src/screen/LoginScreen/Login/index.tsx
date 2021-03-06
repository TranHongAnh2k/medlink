import { Input, Form, Spin } from 'antd';
import {
    UserOutlined,
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

import { login } from '../../../redux/actions/auth.action';
import { useDispatch, useSelector } from 'react-redux';

import {RootState} from '../../../redux/reducers'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useForm } from 'antd/lib/form/Form';

interface typeValue{
    login_id:string,
    password:string
}


const Login:React.FC = () => {


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [check,setCheck] = useState<boolean>(false)

    const [ischeck,setIscheck] =useState<boolean>(true)

    const {loading,accessToken} = useSelector((state:RootState)=>state.auth)

    const [form] = useForm();

    useEffect(() => {
        if (accessToken){
            navigate('/nhathuoc')
            setCheck(false)
        }
    }, [navigate,accessToken])

    const onFinish = async(values:typeValue) => {
         await dispatch(login(values))
        setCheck(true)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    const onValuesChange = async() => {
        const values = form.getFieldValue(['login_id'])
        values&&setIscheck(/([0-9])\b/.test(values))   
    }
    return (
        <Container>
            <LoginForm>
                <Logo>
                    <img src={require('../../../assets/images/logo.png')} alt="" />
                </Logo>


                <Form
                    name="basic"
                    form={form}
                    wrapperCol={{ span: 24 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    onValuesChange={onValuesChange}
                >
                    <Form.Item
                        name="login_id"
                        rules={[{ required: true, message: 'Vui l??ng nh???p s??? ??i???n tho???i' }]}                       
                    >
                        <Input
                            size='large'
                            placeholder='Nh???p s??? ??i???n tho???i'
                            prefix={<UserOutlined />}
                            style={{ fontSize: '1rem' }}
                        />
                    </Form.Item>
                    {!ischeck&&<p style={{color:'red'}}>Nh???p sai ?????nh d???ng</p>}

                    <Form.Item                        
                        name="password"
                        rules={[{ required: true, message: 'Vui l??ng nh???p m???t kh???u !' }]}
                    >
                        <Input.Password
                            size='large'
                            placeholder='Nh???p m???t kh???u'
                            prefix={<LockOutlined />}
                        />
                    </Form.Item>

                    <Check>
                        <Checkbox><p>L??u m???t kh???u</p></Checkbox>

                        <Pass>
                            <p>Qu??n m???t kh???u</p>
                        </Pass>

                    </Check>
                    {check&&<p style={{color:'red',fontSize:'1.5rem'}}>Sai m???t kh???u ho???c t??n ????ng nh???p</p>}
                    
                    <Logup>
                        <p>????ng k???</p>
                        <span>n???u b???n ch??a c?? t??i kho???n</span>
                    </Logup>
                    <Button style = {{marginBottom:'5rem'}} htmlType="submit">{loading?<Spin />:'????ng nh???p'}</Button>
                         
                </Form>

            </LoginForm>

            <Icons>
                <Icon>
                    <img src={require('../../../assets/images/logoAndroid.png')} alt="" />
                </Icon>
                <Icon>
                    <img src={require('../../../assets/images/logoios.png')} alt="" />
                </Icon>
            </Icons>
        </Container>
    )
}

export default Login
