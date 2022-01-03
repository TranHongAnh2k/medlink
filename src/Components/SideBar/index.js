import React, { useState } from 'react'
import { Menu, Button } from 'antd';
import {
    AppstoreOutlined,
    PieChartOutlined,
    DesktopOutlined,
    MailOutlined,
} from '@ant-design/icons';


import { Container, Icons } from './SideBars'

const SideBar = () => {
    const { SubMenu } = Menu;

    const [collapsed, setCollapsed] = useState(false)
    return (
        <Container>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                inlineCollapsed={collapsed}
                
            >
                <Menu.Item key="1"  icon={<PieChartOutlined size={20} style={Icons} />}>
                    Tổng quan
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined size={20} />}>
                    Hóa Đơn
                </Menu.Item>
                <SubMenu key="sub1" icon={<MailOutlined size={20} />} title="Sản Phẩm">
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8" >Option 8</Menu.Item>
                </SubMenu>

                <SubMenu key="sub3" icon={<AppstoreOutlined size={20} />} title="Quản lí kho">
                    <Menu.Item key="13">Option 9</Menu.Item>
                    <Menu.Item key="14">Option 10</Menu.Item>

                </SubMenu>
                <SubMenu key="sub5" icon={<AppstoreOutlined size={20} />} title="Đối tác">
                    <Menu.Item key="17">Option 9</Menu.Item>
                    <Menu.Item key="18">Option 10</Menu.Item>
                </SubMenu>
                <SubMenu key="sub6" icon={<AppstoreOutlined size={20} />} title="Marketing">
                    <Menu.Item key="21">Option 9</Menu.Item>
                    <Menu.Item key="22">Option 10</Menu.Item>

                </SubMenu>
                <SubMenu key="sub8" icon={<AppstoreOutlined size={20} />} title="Báo cáo">
                    <Menu.Item key="25">Option 9</Menu.Item>
                    <Menu.Item key="26">Option 10</Menu.Item>

                </SubMenu>
                <SubMenu key="sub8" icon={<AppstoreOutlined size={20} />} title="Liên thông">
                    <Menu.Item key="25">Option 9</Menu.Item>
                    <Menu.Item key="26">Option 10</Menu.Item>

                </SubMenu>
                <Menu.Item key="27" icon={<DesktopOutlined size={20} />}>
                    Sổ quỹ
                </Menu.Item>
                <Menu.Item key="28" icon={<DesktopOutlined size={20} />}>
                    Kế toán
                </Menu.Item>
                <Menu.Item key="29" icon={<DesktopOutlined size={20} />}>
                    Trợ giúp
                </Menu.Item>
            </Menu>
        </Container>
    )
}

export default SideBar


