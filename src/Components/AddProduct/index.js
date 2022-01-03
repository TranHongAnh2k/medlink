import React, { useState }  from "react";
import { ArrowLeftOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Input, Button, Modal } from "antd";
import Tablel from "../Tablel";
import { Container, Content, Search, styleButton } from "./AddProducts";
import AddModal from "../AddModal";


const AddProduct = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Container>
      <Content>
        <ArrowLeftOutlined />
        <h3>Thêm sản phẩm kinh doanh</h3>
      </Content>

      <Search>
        <div>
          <h4>Thuốc từ danh mục</h4>
          <Input placeholder="Tìm thuốc danh mục" style={{ minWidth: '50%' }} />
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            style={styleButton}
            onClick={showModal}
          >
            Tạo mới
          </Button>
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            style={styleButton}
          >
            Thêm từ excel
          </Button>
        </div>

        <div>
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            style={styleButton}
          >
            Thêm thuốc
          </Button>
        </div>
      </Search>

      <Tablel />

      <Modal 
      title="Tạo mới sản phẩm" 
      visible={isModalVisible} 
      onOk={handleOk}
      onCancel={handleCancel}
      width={1000}
      >
        
        <AddModal/>
      </Modal>
    </Container>

    
  );
};

export default AddProduct;
