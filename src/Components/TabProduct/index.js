import React from 'react'
import { Table, Tabs,Button } from 'antd';
import TabInf1 from '../TabInf1';
import { styleButton } from './TabProducts';


const TabProduct = () => {
  const { TabPane } = Tabs;

  const callback = (key) => {
    console.log(key);
  }

  const dataSource = [
    
  ];

  const columns = [
    {
      title: 'Loại đơn vị',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Đơn vị',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Giá trị quy đổi',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Giá bán lẻ',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Cảnh báo tồn kho',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const Tab = () => (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Thông tin cơ bản" key="1">
        <TabInf1 />
      </TabPane>
      <TabPane tab="Thông tin nâng cao" key="2">
      <TabInf1 />
      </TabPane>

    </Tabs>


  );

  return (
    <>
      <Tab />

      <Table dataSource={dataSource} columns={columns} pagination={false} />
      <Button type='primary' style={styleButton}>Thêm đơn vị</Button>
    </>

  )
}

export default TabProduct
