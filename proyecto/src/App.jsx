import './App.css';
import { Space, Layout } from 'antd'
import DentHome from './DentHome'
const { Header, Footer, Content } = Layout

function App(){
  return(
    <Space direction="vertical" className="App-container">
      <Layout>
        <Header className='App-header'>DENT ALL</Header>
        <Content className='App-content'>
          <DentHome></DentHome>
        </Content>
        <Footer className='App-footer'>UMSS &copy; 2023</Footer>
      </Layout>
    </Space> 
  )   
}
export default App;
