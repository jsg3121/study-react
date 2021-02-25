import { createAction, handleActions } from "redux-actions";

const LOGIN = "header/LOGIN";

export const login = createAction(LOGIN);

const initialState = {
  loginVal: false,
};

const header = handleActions(
  {
    [LOGIN]: (state, action) => {
      console.log(state.loginVal);
      return {
        loginVal: !state.loginVal,
      };
    },
  },
  initialState
);

export default header;
