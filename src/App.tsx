import { ReactNode } from 'react';
import { Layout } from 'antd';
import { Sidebarlayout } from './components/Sidebar/Sidebarlayout';
import './App.css';
import { CommentLayout } from './components/CommentLayout/CommentLayout';

function App() {
  const { Content, Sider } = Layout;
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ background: "#f2f6fc", padding: '30px 30px' }}>
        <Layout style={{ background: "#f2f6fc", height: 'auto' }} >
          <Sider style={{ background: "#ffffff", marginRight: "20px", padding: '10px' }} width={350}>
            <Sidebarlayout />
          </Sider>
          <Content style={{ background: "#ffffff",  padding: '15px' }}>
            <CommentLayout />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
}

export default App;

type LayoutProps = {
  children: ReactNode;
};
