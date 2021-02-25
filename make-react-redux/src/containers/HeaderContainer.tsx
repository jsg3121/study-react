import React from 'react';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import Header from '../components/Header';
import { login } from "../modules/module/header";


const mapStateToProps = ((state: any) => {
  return state;
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return bindActionCreators({
    login
  }, dispatch);
};

const HeaderContainer = ({ login }: any) => {
  return (
    <div>
      <Header login={login}></Header>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);