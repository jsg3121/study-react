import React from 'react';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import HeaderComponents from '../Components/HeaderComponents';
import { login } from '../modules/module/loginModule';



const mapStateToProps = ((state: { isLogin: { loginVal: any; }; }) => ({
  loginVal: state.isLogin.loginVal
}));

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      login
    },
    dispatch
  );

const HeaderContainer = ({ loginVal }: any) => {
  return (
    <HeaderComponents login={loginVal}></HeaderComponents>
  );
};

connect(mapStateToProps, mapDispatchToProps)(HeaderComponents);

export default HeaderContainer;