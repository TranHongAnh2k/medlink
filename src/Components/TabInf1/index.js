import React, { useState } from 'react'
import { Col, Row, Input, Select } from 'antd'
import { Item } from './TabInf1'


const TabInf1 = () => {
    const { Option } = Select;

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    }


    


    return (
        <Row>
            <Col sm={12}>
                <Item>
                    <label>Mã thuốc:</label>
                    <Input placeholder="Mã thuốc(Nhà thuốc tự định nghĩa)" />
                </Item>
            </Col>
            <Col sm={12}>
                <Item>
                    <label>Nghành hàng</label>
                    <Select style={{ width: '100%' }} onChange={handleChange}>
                        <Option value="Dược mĩ phẩm">Dược mĩ phẩm</Option>
                        <Option value="Làm đẹp">Làm đẹp</Option>
                        <Option value="Khác">Khác</Option>
                    </Select>
                </Item>
            </Col>
            <Col sm={12}>
                <Item>
                    <label><span style={{ color: 'red', fontSize: '1.5rem' }}>*</span>Tên thuốc:</label>
                    <Input placeholder="Nhập tên thuốc" />
                </Item>
            </Col>
            <Col sm={12}>
                <Item>
                    <label>Phân nhóm:</label>
                    <Select style={{ width: '100%' }} onChange={handleChange}>
                        <Option value="Thuốc lợi tiểu">Thuốc lợi tiểu</Option>
                        <Option value="Thuốc tim mạch">Thuốc tim mạch</Option>
                        <Option value="Khác">Khác</Option>
                    </Select>
                </Item>
            </Col>
            <Col sm={12}>
                <Item>
                    <label>Hàm lượng:</label>
                    <Input placeholder="Nhập hàm lượng thuốc" />
                </Item>
            </Col>
            <Col sm={12}>
                <Item>
                    <label>Bào chế:</label>
                    <Select style={{ width: '100%' }} onChange={handleChange}>
                        <Option value="Bình">Bình</Option>
                        <Option value="Bông">Bông</Option>
                        <Option value="Hộp">Hộp</Option>
                    </Select>
                </Item>
            </Col>
            <Col sm={12}>
                <Item>
                    <label>Hoạt chất:</label>
                    <Input placeholder="Nhập hoạt chất thuốc" />
                </Item>
            </Col>
            <Col sm={12}>
                <Item>
                    <label>Mã vạch:</label>
                    <Input placeholder="Nhập mã vạch" />
                </Item>
            </Col>
            <Col sm={12}>
                <Item>
                    <label>Quy cách đóng gói:</label>
                    <Input placeholder="Nhập quy cách đóng gói" />
                </Item>
            </Col>
            <Col sm={12}>
                <Item>
                    <label>Mã dược quốc gia:</label>
                    <Input placeholder="Nhập mã dược quốc gia" />
                </Item>
            </Col>
            <Col sm={12}>
                <Item>
                    <label>Số đăng kí:</label>
                    <Input placeholder="Nhập số đăng kí" />
                </Item>
            </Col>
            <Col sm={12}>
                <Item>
                    <label>Hãng sản suất:</label>
                    <Input placeholder="Nhập hãng sản xuất" />
                </Item>
            </Col>
            <Col sm={12}>
                <Item>
                    <label>Tiền tố:</label>
                    <Select
                        mode="multiple"
                        defaultValue='S'
                        onChange={handleChange}
                        style={{ width: '100%' }}
                    >
                        <Option value="S">S( Mã có hóa đơn 0% 5% 10% 14%)</Option>
                        <Option value="E">E( Mã không có hóa đơn(không có mã số thuế))</Option>
                    </Select>
                </Item>
            </Col>
            <Col sm={12}>
                <Item>
                    <label>Thuế VAT %:</label>
                    
                    <Select defaultValue='0' style={{ width: '100%' }} onChange={handleChange} >
                        <Option value="0">0%</Option>
                        <Option value="10">10%</Option>
                        <Option value="15">15%</Option>
                       
                    </Select>
                </Item>
            </Col>
        </Row>
        
    )
}

export default TabInf1
