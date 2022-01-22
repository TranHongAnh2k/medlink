import HeaderHome from "./HeaderHome";
import SideBar from "./SideBar";
import ListProduct from "./ListProduct";
import AddProduct from "./AddProduct";
import { Route, Routes } from "react-router-dom";
import { Layout } from 'antd';
import { useState } from "react";





const HomeScreen:React.FC = () => {
  const { Content } = Layout;
  const [toggle,setToggle] = useState<boolean>(false)

  const handleToggle=():void=>{
    setToggle(!toggle)
  }

  return (
    <Layout>
      <HeaderHome handleToggle={handleToggle} toggle={toggle} />
      <Layout style={{ minHeight: '100vh', }} >
        <SideBar handleToggle={handleToggle} toggle={toggle} />
        <Layout   >
          <Content style={{ margin: `60px 0 0 ${!toggle?'220px':'100px'}` }}>
            <Routes>
              <Route index element={<ListProduct />} />
              <Route path='/taophieunhapkho' element={<AddProduct />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default HomeScreen;







