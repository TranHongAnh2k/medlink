import { Container, Item } from './ContentPopovers'
import {
    UserOutlined,
    UsergroupAddOutlined,
    ShopOutlined,
    SyncOutlined,
    SettingOutlined,
    LogoutOutlined
} from "@ant-design/icons";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers'
import { logout } from '../../redux/actions/auth.action';
import { useNavigate } from 'react-router-dom';

const ContentPopover = () => {


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector((state: RootState) => state.auth)

    const handleLogout = ()=> {
        dispatch(logout())
        navigate('/')
    }



    return (
        <Container>
            <Item>
                <UserOutlined />
                <h3>{user}</h3>
            </Item>
            <Item>
                <UsergroupAddOutlined />
                <h3>Quản lý người dùng</h3>
            </Item>
            <Item>
                <ShopOutlined />
                <h3>Thông tin cửa hàng</h3>
            </Item>
            <Item>
                <SyncOutlined />
                <h3>Tài khoản liên thông</h3>
            </Item>
            <Item>
                <SettingOutlined />
                <h3>Cài đặt hệ thống</h3>
            </Item>
            <Item onClick={handleLogout}>
                <LogoutOutlined  />
                <h3>Đăng xuất</h3>
            </Item>
        </Container>
    )
}

export default ContentPopover
