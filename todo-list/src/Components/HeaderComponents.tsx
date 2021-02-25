import { Button } from 'antd';
import React from 'react';

const HeaderComponents = ({ login }: any) => {
  return (
    <div>
      <Button onClick={login} >Login</Button>
    </div>
  );
};

export default HeaderComponents;