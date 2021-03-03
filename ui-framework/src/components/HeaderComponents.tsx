import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Dropdown, Input, Menu, Space } from 'antd';
import React, { useState } from 'react';

const HeaderComponents = () => {
  const [dropdownVal, setDropdownVal] = useState('1st menu item');

  const selectDropdown = (e: any) => {
    setDropdownVal(e.key);
  };

  const menu = (
    <Menu>
      <Menu.Item key="1st menu item" onClick={selectDropdown} >
        1st menu item
      </Menu.Item>
      <Menu.Item key="2nd menu item" onClick={selectDropdown}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3rd menu item" onClick={selectDropdown}>
        3rd menu item
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="header">
      <Dropdown overlay={menu} trigger={['click']} arrow>
        <Button>
          {dropdownVal} <DownOutlined />
        </Button>
      </Dropdown>
      <Input placeholder="Basic usage" />
      <Button type="primary" icon={<SearchOutlined />}>Search</Button>
    </div>
  );
};

export default HeaderComponents;