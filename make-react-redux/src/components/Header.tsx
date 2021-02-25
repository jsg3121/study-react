import React from 'react';

const Header = ({ login }: any) => {
  return (
    <div>
      <button onClick={login}></button>
    </div>
  );
};

export default Header;