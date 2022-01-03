import { Carousel } from 'antd'
import React from 'react'
import {
    Container,
    Item,
    Button,
    Content,
    Decription,
} from './Banners'

import Bannerimg1 from '../../assets/images/banner1.png'
import Bannerimg2 from '../../assets/images/banner2.png'
import Bannerimg3 from '../../assets/images/banner3.png'

const Banner = () => {
    return (
        <Container>
            <Carousel swipeToSlide draggable>
                <Item>
                    <img src={Bannerimg1} alt="" />
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
                    <img src={Bannerimg2} alt="" />
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
                    <img src={Bannerimg3} alt="" />
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
