import { useState } from "react";
import { ArrowLeftOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import Tablel from "../../../components/Tablel";
import { Container, Content, Search, styleButton } from "./AddProducts";
import { useNavigate } from "react-router-dom";

import Modals from "../../../components/Modal";

const AddProduct: React.FC = () => {


  const navigate = useNavigate()
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const showModal = (): void => {
    setIsModalVisible(true);
  };
  return (
    <Container>
      <Content>
        <ArrowLeftOutlined onClick={() => navigate('/nhathuoc')} />
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

      <Tablel dataSource={null} />

      <Modals
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        data={{}}
      />

    </Container>


  );
};

export default AddProduct
