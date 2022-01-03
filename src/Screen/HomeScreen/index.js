import Sider from "antd/lib/layout/Sider";
import React from "react";
import HeaderHome from "../../Components/HeaderHome";
import { Layout } from "antd";
import SideBar from "../../Components/SideBar";
import ListProduct from "../../Components/ListProduct";
import AddProduct from "../../Components/AddProduct";

const HomeScreen = () => {
  const { Sider, Content } = Layout;
  return (
    <>
      <HeaderHome />
      <Layout>
        <Sider>
          <SideBar />
        </Sider>
        <Content>
          {/* <ListProduct /> */}
          <AddProduct/>
        </Content>
      </Layout>
    </>
  );
};

export default HomeScreen;
