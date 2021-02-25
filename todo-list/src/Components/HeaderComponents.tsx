import { Button, Input, Modal, PageHeader, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import React, { useState } from 'react';

const HeaderComponents = ({ login, status }: any) => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setLoading(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const loginCheck = async () => {
    setLoading(true);
    await login();
    if (status === false) {
      alert("회원정보가 올바르지 않습니다.");
      setLoading(false);
      setVisible(false);
    } else {
      setLoading(false);
      setVisible(false);
    }
  };


  return (
    <header>
      <PageHeader ghost={false} title="What Are You Doing Totay?" extra={[
        <Button key="1" onClick={showModal} size={'middle'}>
          로그인
        </Button>
      ]}></PageHeader>

      <Modal visible={visible} title="Login" onOk={handleOk} onCancel={handleCancel} footer={[
        <Button key="back" onClick={handleCancel}>Cancel</Button>,
        <Button key="submit" type="primary" loading={loading} onClick={loginCheck}>Login</Button>
      ]}>
        <Space direction="vertical" size="large" className="input-login">
          <Input size="middle" placeholder="아이디를 입력해주세요." className="input-login__id"></Input>
          <Input.Password size="middle" placeholder="비밀번호를 입력해주세요." className="input-login__password" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}></Input.Password>
        </Space>
      </Modal>
    </header>
  );
};

export default HeaderComponents;