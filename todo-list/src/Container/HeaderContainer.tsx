import { Button } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux-actions';
import { login } from '../modules/module/loginModule';

const HeaderContainer = () => {
  return (
    <div>
      <Button onClick={login}>Login</Button>
    </div>
  );
};

const mapStateToProps = (state: { isLogin: { loginVal: any; }; }) => ({
  loginVal: state.isLogin.loginVal
});

const mapDispatchToProps = (dispatch: (arg0: Action<any>) => any) => ({
  login: () => dispatch(login()),
});


connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

export default HeaderContainer;