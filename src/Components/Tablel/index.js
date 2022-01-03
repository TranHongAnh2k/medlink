import React from 'react'
import { Table } from 'antd';
import {Container} from './Tables'

const Tablel = () => {
    const dataSource = [
        {
          key: '1',
          drg_drug_cd:'mã thuốc',
          drg_drug_name:'tên thuốc',
          license_cd:'số đăng kí',
          active_ingredient:'hoạt chất',
          company_name:'nhà sản xuất'
        },
        {
          key: '2',
          drg_drug_cd:'mã thuốc',
          drg_drug_name:'tên thuốc',
          license_cd:'số đăng kí',
          active_ingredient:'hoạt chất',
          company_name:'nhà sản xuất'
        },
        {
          key: '3',
          drg_drug_cd:'mã thuốc',
          drg_drug_name:'tên thuốc',
          license_cd:'số đăng kí',
          active_ingredient:'hoạt chất',
          company_name:'nhà sản xuất'
        },
        {
          key: '4',
          drg_drug_cd:'mã thuốc',
          drg_drug_name:'tên thuốc',
          license_cd:'số đăng kí',
          active_ingredient:'hoạt chất',
          company_name:'nhà sản xuất'
        },
      
      ];
      
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
          dataIndex: 'address',
          key: 'address',
        },
      ];
    return (
        <Container>

          <Table dataSource={dataSource} columns={columns} />
        </Container>
    )
}

export default Tablel



  
  
