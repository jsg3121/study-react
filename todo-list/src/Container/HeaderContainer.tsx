import React from 'react';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import HeaderComponents from '../Components/HeaderComponents';
import { login } from '../modules/module/loginModule';

const mapStateToProps = ((state: { isLogin: { loginVal: any; }; }) => {
  console.log(state);
  return state;
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      login
    },
    dispatch
  );

const HeaderContainer = ({ login }: any) => {
  return (
    <HeaderComponents login={login}></HeaderComponents>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);;