/*
 * @Author: 天勇 343975805@qq.com
 * @Date: 2023-04-27 11:14:09
 * @LastEditors: 天勇 343975805@qq.com
 * @LastEditTime: 2023-05-04 11:14:46
 * @FilePath: \demo\react\react-mangement\src\views\home\home.tsx
 * @Description:Home页面 
 */
import React, { useState } from 'react';
import { Breadcrumb, Layout,theme } from 'antd';
import { Outlet } from 'react-router-dom'
import MainMenu from '@/components/MainMenu/index'
const { Header, Content, Footer, Sider } = Layout;
const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 左边侧边栏 */}
      <Sider collapsible collapsed={collapsed} onCollapse={(value: any) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <MainMenu/>


      </Sider>
      {/* 右边类容 */}
      <Layout className="site-layout">
        {/* 右边头部 */}
        <Header style={{ paddingLeft: '16px', background: colorBgContainer }} >
          {/* 面包屑 */}
          <Breadcrumb style={{ lineHeight: '64px', }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        {/* 右边内容 */}
        <Content style={{ margin: '16px' }} className="site-layout-background">
          <Outlet />

        </Content>
        <Footer style={{ textAlign: 'center', padding: '0', lineHeight: "48px" }}>Author 天勇 2023 antd-react-ts-vite</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;