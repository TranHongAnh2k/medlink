import { Col, Row, Input, Select, Form, Button } from 'antd'
import { useEffect } from 'react'
import { typeDataAll } from '../../model/Model'
import { Container } from './TabInf1'

interface prop {
  data: typeDataAll[],
  form: any
}

const TabInf1 = ({ data, form }: prop) => {
  const { Option } = Select;

  useEffect(() => {
    data[0] && form.setFieldsValue({
      drg_drug_cd: data[0].drg_drug_cd,
      drug_kind: data[0].drug_kind,
      drg_drug_name: data[0].drg_drug_name,
      drug_group: data[0].drug_group,
      concentration: data[0].concentration,
      description: data[0].description,
      active_ingredient: data[0].active_ingredient,
      drg_barcode: data[0].drg_barcode,
      unit_name: data[0].unit_name,
      drg_ref_cd: data[0].drg_ref_cd,
      license_cd: data[0].license_cd,
      company_name: data[0].company_name,
      prefix: data[0].prefix,
      vat_percent: data[0].vat_percent
    })

  }, [data[0]])


  return (

    <Container>
      <Row>
        <Col span={12}  >
          <Form.Item name='drg_drug_cd' label='Mã thuốc:'    >
            <Input
              placeholder="Mã thuốc(Nhà thuốc tự định nghĩa)"/>
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item name='drug_kind' label='Nghành hàng'  >
            <Select style={{ width: '100%' }} >
              <Option value="Dược mĩ phẩm">Dược mĩ phẩm</Option>
              <Option value="Làm đẹp">Làm đẹp</Option>
              <Option value="Khác">Khác</Option>
            </Select>
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item name='drg_drug_name'
            rules={[
              {
                required: true,
                message: 'Nhập tên thuốc'
              }
            ]}
            label='Tên thuốc:'
          >
            <Input placeholder="Nhập tên thuốc" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item name='drug_group' label='Phân nhóm:' >
            <Select style={{ width: '100%' }} >
              <Option value="Thuốc lợi tiểu">Thuốc lợi tiểu</Option>
              <Option value="Thuốc tim mạch">Thuốc tim mạch</Option>
              <Option value="Khác">Khác</Option>
            </Select>
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item name='concentration' label='Hàm lượng:' >
            <Input placeholder="Nhập hàm lượng thuốc" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item name='description' label='Bào chế:'>
            <Select style={{ width: '100%' }} >
              <Option value="Bình">Bình</Option>
              <Option value="Bông">Bông</Option>
              <Option value="Hộp">Hộp</Option>
            </Select>
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item name='active_ingredient' label='Hoạt chất:'>
            <Input placeholder="Nhập hoạt chất thuốc" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item name='drg_barcode' label='Hoạt chất:'>
            <Input placeholder="Nhập mã vạch" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item name='unit_name' label='Quy cách đóng gói:'>
            <Input placeholder="Nhập quy cách đóng gói" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item name='drg_ref_cd' label='Mã dược quốc gia:'>
            <Input placeholder="Nhập mã dược quốc gia"/>
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item name='license_cd' label='Số đăng kí:'>
            <Input placeholder="Nhập số đăng kí" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item name='company_name' label='Hãng sản suất:'>
            <Input placeholder="Nhập hãng sản xuất" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item name='prefix' label='Tiền tố:'>
            <Select
              mode="multiple"
              style={{ width: '100%' }}
            >
              <Option value="S">S( Mã có hóa đơn 0% 5% 10% 14%)</Option>
              <Option value="E">E( Mã không có hóa đơn(không có mã số thuế))</Option>
            </Select>
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item name='vat_percent' label='Thuế VAT %:'>
            <Select style={{ width: '100%' }}  >
              <Option value="0">0%</Option>
              <Option value="10">10%</Option>
              <Option value="15">15%</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </Container>
  )
}

export default TabInf1


