import React from 'react';
import AntDesignComponents from '../components/AntDesignComponents';
import SnbNavigation from '../components/SnbNavigationComponents';
import HeaderComponents from '../components/HeaderComponents';
import '../style/AntDesignContainer.scss';
import { Layout } from 'antd';

const { Header, Sider, Content } = Layout;
const AntDesignContainer = () => {
  return (
    <Layout>
      <Sider>
        <SnbNavigation></SnbNavigation>
      </Sider>
      <Layout>
        <Header>
          <HeaderComponents></HeaderComponents>
        </Header>
        <Content>
          <AntDesignComponents></AntDesignComponents>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AntDesignContainer;