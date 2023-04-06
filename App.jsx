import logo from './logo.svg';
import './App.css';
import {
  
  UserOutlined,
  BankOutlined,
  EditOutlined,
  BgColorsOutlined,
  CarOutlined,
  ProfileOutlined,
  PhoneOutlined,
  SnippetsOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, Input, Tooltip } from 'antd';
import React, { useState } from 'react';
const { Header, Sider, Content, Footer } = Layout;
const { TextArea } = Input;
const formatNumber = (value) => new Intl.NumberFormat().format(value);
const NumericInput = (props) => {
  const { value, onChange } = props;
  const handleChange = (e) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
      onChange(inputValue);
    }
  };

  // '.' at the end or only '-' in the input box.
  const handleBlur = () => {
    let valueTemp = value;
    if (value.charAt(value.length - 1) === '.' || value === '-') {
      valueTemp = value.slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, '$1'));
  };
  const title = value ? (
    <span className="numeric-input-title">{value !== '-' ? formatNumber(Number(value)) : '-'}</span>
  ) : (
    'Input a number'
  );
  return (
    <Tooltip trigger={['focus']} title={title} placement="topLeft" overlayClassName="numeric-input">
      <Input
        {...props}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Ingrese numero de telefono"
        maxLength={8}
      />
    </Tooltip>
  );
};
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
    getItem('Pedidos', 'sub1', <SnippetsOutlined />, [
    getItem('Registrar', '3',<EditOutlined />),
    getItem('Lista', '4',<ProfileOutlined />), 
    
  ]),
  
];
const App = () => {
  const [value, setValue] = useState('');
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header
            />
        <Content
>
        </Content>
        Clinica
        <Input  size="small" placeholder="Ingrese nombre de la clinica" prefix={<BankOutlined />}/>
        Odontologo
        <Input size="small" placeholder="Ingrese nombre completo del odontologo" prefix={<UserOutlined/>}/>
        Direccion
        <Input size="small" placeholder="Ingrese direccion de la clinica" prefix={<CarOutlined />}/>
        Telefono
        <NumericInput size="small" prefix={<PhoneOutlined />}
      style={{width: 300,}}
      value={value}
      onChange={setValue}
    />
        Descripcion
        <>
        <TextArea rows={4} />
        Paciente
        <Input size="small" placeholder="Ingrese nombre del paciente" prefix={<UserOutlined/>}/>
        Colorimetro
        <Input size="small" placeholder="Ingrese codigo de colorimetro" prefix={<BgColorsOutlined />}/>
        
  </>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Dent All app ©2023 Created by OmegaDev
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
