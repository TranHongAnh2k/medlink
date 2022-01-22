import { Container } from './SideBars'

import { Layout, Menu} from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

interface typeProp{
    handleToggle:() => void,
    toggle:boolean
}


const SideBar:React.FC<typeProp> = ({handleToggle,toggle}) => {
    const { SubMenu } = Menu;
    const { Sider } = Layout;

    return (
        <Container >

                <Sider style={{ minHeight: '100vh', backgroundColor:'white' }} collapsible collapsed={toggle} onCollapse={handleToggle}  >                  
                  <Menu  mode="inline"  >
                        <Menu.Item key="1" icon={<PieChartOutlined  />}>
                            Option 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            Option 2
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub5" icon={<UserOutlined />} title="User">
                            <Menu.Item key="23">Tom</Menu.Item>
                            <Menu.Item key="24">Bill</Menu.Item>
                            <Menu.Item key="25">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9" icon={<FileOutlined />}>
                            Files
                        </Menu.Item>
                        <Menu.Item key="10" icon={<FileOutlined />}>
                            Files
                        </Menu.Item>
                        <Menu.Item key="11" icon={<FileOutlined />}>
                            Files
                        </Menu.Item>
                        <Menu.Item key="12" icon={<FileOutlined />}>
                            Files
                        </Menu.Item>
                        <Menu.Item key="13" icon={<FileOutlined />}>
                            Files
                        </Menu.Item>
                        <Menu.Item key="14" icon={<FileOutlined />}>
                            Files
                        </Menu.Item>
                    </Menu>
                </Sider>
                
        </Container>
    )
}

export default SideBar


