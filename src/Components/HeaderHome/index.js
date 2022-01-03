import React from 'react'
import { FaBars, FaBell } from 'react-icons/fa'
import { BsChevronDown } from 'react-icons/bs'
import {
    AiFillHome,
    AiOutlineBars,
    AiOutlineShoppingCart,
    AiOutlineUser
} from 'react-icons/ai'
import { RiQuestionLine } from 'react-icons/ri'

import {
    Brand,
    Buy,
    Container,
    CreateOrder,
    Help,
    Home,
    Item,
    Nav,
    Notify,
    Setting
} from './HeaderHomes'

const HeaderHome = () => {
    return (
        <Container>
            <Brand>
                <FaBars size={30} />
                <h3>Medlink</h3>
            </Brand>

            <Home>
                <AiFillHome size={30} />
                <h3>HONG ANH</h3>
            </Home>

            <Nav>
                <Item>
        
                    <RiQuestionLine size={25} />
                    <h3>Trợ giúp</h3>
                </Item>

                <Item>
                    <CreateOrder>
                        <AiOutlineBars  size ={20} style={{margin:'3px 0 0 0'}} />
                        <h3>Tạo đơn</h3>
                    </CreateOrder>

                </Item>

                <Item>
                    {/* <Buy> */}
                        <AiOutlineShoppingCart size ={30} />
                    {/* </Buy> */}

                </Item>

                <Item>
                    {/* <Notify> */}
                        <FaBell size ={30} />
                    {/* </Notify> */}
                </Item>
            </Nav>
            <Setting>
                <AiOutlineUser size ={30} />
                <h3>HONG ANH</h3>
                <BsChevronDown size ={20} style={{margin:'8px 0 0 0'}} />
            </Setting>

        </Container>
    )
}

export default HeaderHome
