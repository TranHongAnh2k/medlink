import  { useState } from 'react'
import { GoThreeBars } from 'react-icons/go'
import { TiDelete } from 'react-icons/ti'
import { Bar, Brand, Container, Item, Items, Menu, Nav } from './Headers'

const Header = () => {

    const [toggle, setToggle] = useState<boolean>(false)

    return (
        <Container>
            <Brand>
                <img src={require('../../../assets/images/logo.png')} alt="" />
            </Brand>
            <Nav toggle={toggle} >

                <Items>
                    <Menu>
                        <Item>Menu</Item>
                        <span>
                            <TiDelete size={30} onClick={()=>{setToggle(!toggle)}}/>
                        </span>

                    </Menu>
                    <Item>Tính Năng</Item>
                    <Item>Khóa Học</Item>
                    <Item>Dịch Vụ</Item>
                    <Item>Đăng Nhập</Item>
                    <Item>Đăng kí</Item>
                </Items>
            </Nav>


            <Bar >
                <GoThreeBars size={40} onClick={()=>setToggle(!toggle)} />
            </Bar>




        </Container>
    )
}

export default Header


