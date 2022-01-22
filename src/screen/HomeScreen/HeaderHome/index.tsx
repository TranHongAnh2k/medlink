// import React from 'react'
import { FaBars, FaBell } from 'react-icons/fa'
import { BsChevronDown } from 'react-icons/bs'
import {
    AiFillHome,
    AiOutlineBars,
    AiOutlineShoppingCart,
    AiOutlineUser
} from 'react-icons/ai'
import { RiQuestionLine } from 'react-icons/ri'
import { Popover } from 'antd';

import {
    Brand,
    Container,
    CreateOrder,
    Home,
    Item,
    Nav,
    Setting
} from './HeaderHomes'
import ContentPopover from '../../../components/ContentPopover';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';

interface typeProp {
    handleToggle: () => void,
    toggle: boolean
}

const HeaderHome: React.FC<typeProp> = ({ handleToggle, toggle }) => {

    const { user } = useSelector((state: RootState) => state.auth)

    return (
        <Container>
            <Brand>
                <FaBars size={25} onClick={handleToggle} />
                {!toggle && <h3>Medlink</h3>}
            </Brand>

            <Home>
                <AiFillHome size={25} />
                <h3>{user}</h3>
            </Home>

            <Nav>
                <Item>

                    <RiQuestionLine size={25} />
                    <h3>Trợ giúp</h3>
                </Item>

                <Item>
                    <CreateOrder>
                        <AiOutlineBars size={20} style={{ margin: '3px 0 0 0' }} />
                        <h3>Tạo đơn</h3>
                    </CreateOrder>

                </Item>

                <Item>
                    <AiOutlineShoppingCart size={30} />
                </Item>

                <Item>
                    <FaBell size={30} />
                </Item>
            </Nav>
            <Popover content={<ContentPopover />}>
                <Setting>
                    <AiOutlineUser size={30} />
                    <h3>{user}</h3>
                    <BsChevronDown size={20} style={{ margin: '8px 0 0 0' }} />
                </Setting>
            </Popover>

        </Container>
    )
}

export default HeaderHome
