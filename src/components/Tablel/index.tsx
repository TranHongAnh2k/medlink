// import React from 'react'
import { Form, Table } from 'antd';
import { useState } from 'react';
import { typeDataAll } from '../../model/Model';
import Modals from '../Modal';
import { Container } from './Tables'

interface typeProp {
  dataSource: typeDataAll[]
}



const Tablel = ({ dataSource }: typeProp) => {

  const [data, setData] = useState<typeDataAll | object>({})

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const columns = [
    {
      title: 'Mã thuốc',
      dataIndex: 'drg_drug_cd',
      key: 'drg_drug_cd',
    },
    {
      title: 'Tên thuốc',
      dataIndex: 'drg_drug_name',
      key: 'drg_drug_name',
    },
    {
      title: 'Số đăng kí',
      dataIndex: 'license_cd',
      key: 'license_cd',
    },
    {
      title: 'Hoạt chất',
      dataIndex: 'active_ingredient',
      key: 'active_ingredient',
    },
    {
      title: 'Nhà sản xuất',
      dataIndex: 'company_name',
      key: 'company_name',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Cập nhập ',
      dataIndex: 'created_date',
      key: 'created_date',
    },
  ];
  return (
    <Container>

      <Table
        dataSource={dataSource}
        columns={columns}
        onRow={(record, rowIndex) => {
          return {
            onClick: () => {
              setData([record])
              setIsModalVisible(true)
            },

          };
        }}


      />

      <Modals
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        data={data}

      />
    </Container>
  )
}

export default Tablel
