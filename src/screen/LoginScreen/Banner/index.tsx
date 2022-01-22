// import React from 'react'
import { Carousel } from 'antd'
import {
    Container,
    Item,
    Button,
    Content,
    Decription,
} from './Banners'


const Banner = () => {
    return (
        <Container>
            <Carousel swipeToSlide draggable>
                <Item>
                    <img src={require('../../../assets/images/banner1.png')} alt="" />
                    <Decription>
                        <Content>
                            <h2>MEDLINK - PHẦN MỀM QUẢN LÝ NHÀ THUỐC</h2>
                            <h3>Giải pháp gia tăng lợi nhuận, đột phá doanh thu
                                Chuẩn kết nối dược quốc gia GPP
                            </h3>
                        </Content>
                        <Button>Đăng kí ngay</Button>
                    </Decription>

                </Item>
                <Item>
                    <img src= {require('../../../assets/images/banner2.png')} alt="" />
                    <Decription>
                        <Content>
                            <h2>MEDLINK - PHẦN MỀM QUẢN LÝ NHÀ THUỐC</h2>
                            <h3>Giải pháp gia tăng lợi nhuận, đột phá doanh thu
                                Chuẩn kết nối dược quốc gia GPP
                            </h3>
                        </Content>
                        <Button>Đăng kí ngay</Button>
                    </Decription>
                </Item>
                <Item>
                    <img src={require('../../../assets/images/banner3.png')} alt="" />
                    <Decription>
                        <Content>
                            <h2>MEDLINK - PHẦN MỀM QUẢN LÝ NHÀ THUỐC</h2>
                            <h3>Giải pháp gia tăng lợi nhuận, đột phá doanh thu
                                Chuẩn kết nối dược quốc gia GPP
                            </h3>
                        </Content>
                        <Button>Đăng kí ngay</Button>
                    </Decription>
                </Item>
            </Carousel>
        </Container>
    )
}

export default Banner
