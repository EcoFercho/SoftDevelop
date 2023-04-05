import logo from './logo.svg';
import './App.css';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, Input } from 'antd';
import React, { useState } from 'react';
const { Header, Sider, Content } = Layout;
const { TextArea } = Input;

const App = () => {
  
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UploadOutlined/>,
              label: 'Registro de Pedidos',
            },
            {
              key: '2',
              icon: <UserOutlined />,
              label: 'Lista de Pedidos',
            },
            
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
         >
        </Content>
        Clinica
        <Input placeholder="Ingrese nombre de la clinica" />
        Odontologo
        <Input placeholder="Ingrese nombre completo del odontologo" />
        Direccion
        <Input placeholder="Ingrese direccion de la clinica" />
        Telefono
        <Input placeholder="Ingrese telefono de Odontologo/clinica" />
        Descripcion
        <>
        <TextArea rows={4} />
        Paciente
        <Input placeholder="Ingrese nombre del paciente" />
        Colorimetro
        <Input placeholder="Ingrese codigo de colorimetro" />
        
  </>

      </Layout>
    </Layout>
  );
};
export default App;