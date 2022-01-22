// import React from "react";
import {
  Container,
  InputProduct,
  styleButton,
  List,
  Add,
  Search,
  Item,
  Access,
} from "./ListProduct";
import { Button, Select, Input, Col, Row, DatePicker, Checkbox } from "antd";
import {
  PlusCircleOutlined,
  SearchOutlined,
  CaretDownOutlined,
  DownloadOutlined
} from "@ant-design/icons";

import Tablel from '../../../components/Tablel'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import productApi from "../../../api/productApi";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers";



const ListProduct = () => {
  const { Option } = Select;
  const navigate = useNavigate()
  const { accessToken } = useSelector((state: RootState) => state.auth)
  const [data, setData] = useState([])

  useEffect(() => {

    (async () => {
      try {
        const { data: { data } } = await productApi.get(1, accessToken)
        setData(data)
      } catch (error) {
        console.log(error.message)
      }

    })()

  }, [])
  return (
    <Container>
      <List>
        <Add>
          <h3> Danh mục sản phẩm </h3>
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            style={styleButton}
            onClick={() => navigate('taophieunhapkho')}
          >
            Thêm thuốc kinh doanh
          </Button>
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            style={styleButton}
          >
            Cập nhật
          </Button>
        </Add>
        <Search>
          Tìm kiếm
          <CaretDownOutlined />
        </Search>
      </List>

      <InputProduct>
        <Row>
          <Col lg={8}>
            <Item>
              <label>Tìm kiếm</label>
              <Input
                size="middle"
                placeholder="Nhập tên mã thuốc, mã vạch"
                prefix={<SearchOutlined />}
              />
            </Item>
          </Col>

          <Col lg={8}>
            <Item>
              <label>Phân nhóm</label>
              <Select
                defaultValue="Tất cả"
                style={{ width: 200 }}
                size="middle"
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Item>
          </Col>
          <Col lg={8}>
            <Item>
              <label>Hãng sản xuất</label>
              <Input
                size="middle"
                placeholder="Nhập tên mã sản xuất"
                prefix={<SearchOutlined />}
              />
            </Item>
          </Col>

          <Col lg={8}>
            <Item>
              <label>Ngày nhập</label>
              <DatePicker style={{ width: "100%" }} />
            </Item>
          </Col>

          <Col lg={8}>
            <Item>
              <label>Nhóm thuốc</label>
              <Select
                defaultValue="Tất cả"
                style={{ width: 200 }}
                size="middle"
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Item>
          </Col>
        </Row>


        <Access>

          <Checkbox

          >
            Đang kinh doanh
          </Checkbox>
          <Checkbox

          >
            Đã ngừng kinh doanh
          </Checkbox>
          <Button type="primary" icon={<SearchOutlined />} style={styleButton}>
            Tìm kiếm
          </Button>
        </Access>
      </InputProduct>

      <List>
        <Add>

          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            style={styleButton}
          >
            Danh sách
          </Button>
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            style={styleButton}
          >
            Hình ảnh
          </Button>

          <h3> Có hai sản phẩm </h3>
        </Add>
        <Button type="primary" shape="round" icon={<DownloadOutlined />}  >
          Xuất Excel
        </Button>
      </List>

      <Tablel dataSource={data} />
    </Container>
  );
};

export default ListProduct;
