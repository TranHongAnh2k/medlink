import React from 'react'
import { Tabs } from 'antd';

import UploadImg from '../UploadImg'
import {Container} from './AddModals'
import TabProduct from '../TabProduct';

const AddModal = () => {

    return (
        <Container>
            <UploadImg/>

            <TabProduct/>
        </Container>
    )
}

export default AddModal
