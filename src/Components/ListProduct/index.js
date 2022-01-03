import React from "react";
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
import { Button, Select, Input, Col, Row, DatePicker, Checkbox, Table } from "antd";
import {
  PlusCircleOutlined,
  SearchOutlined,
  CaretDownOutlined,
  DownloadOutlined
} from "@ant-design/icons";

import Tablel from '../Tablel'
const ListProduct = () => {
  const { Option } = Select;

  return (
    <Container>
      <List>
        <Add>
          <h3> Danh mục sản phẩm </h3>
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            style={styleButton}
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
                size="middle "
                // onChange={handleChange}
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
                size="middle "
                // onChange={handleChange}
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
          // onChange={onChange}
          >
            Đang kinh doanh
          </Checkbox>
          <Checkbox
          // onChange={onChange}
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
        <Button type="primary" shape="round" icon={<DownloadOutlined />} size={20} >
          Xuất Excel
        </Button>
      </List>

      <Tablel/>
    </Container>
  );
};

export default ListProduct;
