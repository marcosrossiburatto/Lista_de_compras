import './App.css';
import { Menu, Layout } from 'antd';
import Routes from './routes';
import { PlusOutlined, UnorderedListOutlined, BackwardOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  let history = useHistory();

  return (
    <div className="main">
      <Layout className='main__content'>
        <Header className='header'>Lista de Compras de Marcos Rossi Buratto</Header>
        <Layout>
          <Sider className='menu'>
            <Menu className='menu__section'>
              <Menu.Item key={1} icon={<BackwardOutlined />} onClick={() => history.push('')}>Pagina Inicial</Menu.Item>              
              <Menu.Item key={2} icon={<UnorderedListOutlined />} onClick={() => history.push('./produtos')}>Listar Produtos</Menu.Item>
              <Menu.Item key={3} icon={<PlusOutlined />} onClick={() => history.push('./adicionar')}>Adicionar Produtos</Menu.Item>
            </Menu>
          </Sider>
          <Content>
            <Routes />  
          </Content>
        </Layout>
        <Footer className='footer'>Todos os direitos reservados</Footer>
      </Layout>
    </div>
  );
}

export default App;
