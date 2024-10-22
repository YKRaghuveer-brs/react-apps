import React from 'react';
import { Layout } from 'antd';
import Navbar from './Navbar';

const { Content } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar />
      <Content style={{ padding: '20px', backgroundColor: '#f0f2f5' }}>
        <h1>Welcome to My App</h1>
        <p>This is a simple layout using Ant Design.</p>
      </Content>
    </Layout>
  );
};

export default App;
