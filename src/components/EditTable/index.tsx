import * as React from 'react'
import { useContext, useState,useEffect } from 'react';
import { Table, Button, Popconfirm, Form, Select, InputNumber } from 'antd';

import { DeleteOutlined } from '@ant-design/icons'
import { DrgUnitsModel, typeDataSource } from '../../model/Model';



const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();

  return (
    <Form form={form} component={false} >
      <EditableContext.Provider value={form} >
        <tr {...props} key={Math.random()} />

      </EditableContext.Provider>

    </Form>
  );
};

interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: keyof DrgUnitsModel;
  record: DrgUnitsModel;
  handleSave: (record: DrgUnitsModel) => void;
  check:boolean
}

const EditableCell: React.FC<EditableCellProps>  = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  check,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const form = useContext(EditableContext);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;
  const { Option } = Select;  

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        {dataIndex === 'unit_name' ?
          <Select onBlur={save} >
            <Option value="Viên">Viên</Option>
            <Option value="Vỉ">Vỉ</Option>
            <Option value="Tuýt">Tuýt</Option>
            <Option value="Túi">Túi</Option>
          </Select> :
          <InputNumber  onPressEnter={save} onBlur={save} />}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};


interface Props {
  setTable: (active: object) => void;
  data: typeDataSource[]
  check:boolean
  setCheck:(active:boolean)=>void;
}

interface State {
  dataSource: typeDataSource[],
  count: number,
}


class EditTable extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      dataSource:this.props.data?this.props.data: [],
      count: this.props.data ? this.props.data.length : 0,
    };

  }

  handleDelete = (key: number) => {
    const dataSource = [...this.state.dataSource]
    this.setState({
      dataSource: dataSource.filter((item) => item.drug_unit_id !== key),
      count: this.state.count - 1,
    });
  };
  handleAdd = () => {
    const { count, dataSource } = this.state;
    const dvi = { id: [14, 2, 11], name: ['Viên', 'Vỉ', 'Tuýt'] }

    const newData = {
      key:count,
      drug_unit_id: count,
      drug_id: count,
      unit_id: dvi.id[count],
      unit_name: dvi.name[count],
      parent_unit: `${dvi.id[count]}`,
      parent_unit_name: 'Viên',
      status: 1,
      unit_qty: count,
      inv_qty_alarm: 0,
      max_price: 0,
      drug_price_id: 0,
      price: 0,
      price_before_vat: 0,
      wholesale_price: 0,
      wholesale_price_before_vat: 0,
      default_flg: 1,
      active_flg: count,
    };

    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
    
  };

  handleSave = (row: typeDataSource) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.drug_unit_id === item.drug_unit_id);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
      
    });
    
  
  };


  // componentWillReceiveProps(data) {
  //   data!==this.props.data&&this.setState({dataSource:data})
  
  // }

  componentDidUpdate(prevProps, prevState) {
      // if (prevState.dataSource!==this.state.dataSource){
      //   this.props.setTable(this.state.dataSource)
      // }

      if (!this.props.check&&prevProps.data!==this.props.data){
        this.setState({dataSource:this.props.data})
        this.props.setCheck(false)
      }
  }

  render() {
    const { dataSource } = this.state;
    this.props.check&&this.props.setTable(this.state.dataSource)
    // console.log(this.props.check);
    
    const columns = [
      {
        title: 'Loại đơn vị',
        dataIndex: 'active_flg',
        width: '20%',
      },
      {
        title: 'Đơn vị',
        dataIndex: 'unit_name',
        width: '20%',
        editable: true,

      },
      {
        title: 'Giá trị quy đổi',
        dataIndex: 'unit_qty',
        editable: true,
      },
      {
        title: 'Giá bán lẻ',
        dataIndex: 'price',
        editable: true,

      },
      {
        title: 'Cảnh báo tồn kho',
        dataIndex: 'inv_qty_alarm',
        editable: true,
      },
      {

        dataIndex: 'operation',

        render: (_, record) =>
          dataSource.length >= 1 ? (
            <Popconfirm title="Bạn muốn xóa đơn vị này?" onConfirm={() => this.handleDelete(record.drug_unit_id)}>
              <DeleteOutlined />
            </Popconfirm>
          ) : null,
      },
    ];
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell
      },
    };
    const columnss = columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
          
        }),
      };
    });

    return (
      <>

        <Table
          components={components}
          bordered
          dataSource={dataSource}
          columns={columnss}
          pagination={false}
        />
        <Button
          onClick={this.handleAdd}
          type="primary"
          style={{
            margin: '5px 16px',
            borderRadius: 5
          }}
        >
          Thêm đơn vị
        </Button >

      </>
    );
  }
}

export default EditTable
