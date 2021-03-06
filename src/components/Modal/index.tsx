import { Button, Form, Modal, notification, Tabs } from "antd"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import productApi from "../../api/productApi"
import { typeDataAll } from "../../model/Model"

import { RootState } from "../../redux/reducers"
import EditTable from "../EditTable"
import TabInf1 from "../TabInf1"
import UploadImg from "../UploadImg"

interface prop {
  isModalVisible: boolean,

  setIsModalVisible: (active: boolean) => void,

  data: typeDataAll[]|any

}


const Modals = ({ isModalVisible, setIsModalVisible, data }:prop) => {

  const { TabPane } = Tabs;

  const { accessToken } = useSelector((state: RootState) => state.auth)


  const [table, setTable] = useState([])

  const [check,setCheck] = useState<boolean>(false)

  const [form] = Form.useForm();

  const navigate = useNavigate()

  console.log(table);
  
  const handleOk = async (): Promise<void> => {
    
    setCheck(true);

    const values = await form.validateFields();

    const payload = {
      ...values,
      drug_units: table,
      key: 0,

      validate: true,
      drug_id: 0,


      drg_drug_alias: '',

      direction_for_use: '',

      company_code: '',

      provider_code: '',
      provider_name: '',
      country: '',

      original_product: '',
      package_desc: '',
      image_number: 0,
      image_url: '',
      avatar_url: '',

      drug_classified: '',

      drug_flg: '',
      administration: '',
      indication: '',

      dosage: '',
      adverse_reaction: '',
      contraindication: '',
      interation: '',
      precaution: '',
      overdosage: '',
      atc_code: '',

      status: 1,
      barcode_url: '',
      source: '',
      note: '',
      revision: 0,
      ref_code: '',
      storage_temperature: '',
      moisture: '',
      special_control: '',
      loyalty_flg: 0,
      employee_commissions: 0,
      updated_user: '',
      active_flg: 1,
      created_date: '',
      updated_date: '',
      account_id: 0,

    }

    const new_drugs = { new_drugs: [payload] }

    const {status} = !check&&data[0]? await productApi.update(payload,accessToken): await productApi.add(new_drugs, accessToken)

    console.log(status);

    if (status === 200) {
      
      form.resetFields()
      
      setIsModalVisible(false);
      openNotification('th??nh c??ng',data[0]?'c???p nh???t thu???c th??nh c??ng': 'th??m thu???c th??nh c??ng')
      navigate('/nhathuoc')
    } else openNotification('th???t b???i', data[0]?'c???p nh???t thu???c th???t b???i':'th??m thu???c th???t b???i')


  };

 

  const handleDelele = async () => {
    const {status} = await productApi.remove(data[0].drug_id, accessToken)
    if (status === 200) {

      openNotification('th??nh c??ng', 'x??a thu???c th??nh c??ng')
      navigate('/')
    } else openNotification('th???t b???i', 'x??a thu???c th???t b???i')
  }
  const handleCancel = (): void => {
    setIsModalVisible(false);
    
  };


  const openNotification = (mess: string, descrip: string) => {
    notification.open({
      message: mess,
      description: descrip,
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };



  return (
    <Form
      layout="inline"
      autoComplete="off"
      form={form}

    >
      <Modal
        title="T???o m???i s???n ph???m"
        visible={isModalVisible}
        width={1000}
        onOk={handleOk}
        onCancel={handleCancel}
        okText='?????ng ??'
        cancelText='H???y b???'

      >
        <UploadImg />
        <Tabs defaultActiveKey="1">

          <TabPane tab="Th??ng tin c?? b???n" key="1">
            <TabInf1 data={data} form={form} />
          </TabPane>
          <TabPane tab="Th??ng tin n??ng cao" key="2">
            <TabInf1 data={data} form={form} />
          </TabPane>

        </Tabs>

        <EditTable setTable={setTable} data={data[0] ? data[0].drug_units : []} check={check} setCheck={setCheck} />

        {data[0] ? <Button type="primary"
          style={{
            margin: '5px 16px',
            borderRadius: 5
          }}
          onClick={handleDelele}
        >X??a</Button> : null}
      </Modal>

    </Form>
  )
}

export default Modals
