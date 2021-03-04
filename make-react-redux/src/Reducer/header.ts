import { createSlice } from "@reduxjs/toolkit";

export const loginReducer = createSlice({
  name: "login",
  initialState: {
    value: false,
  },
  reducers: {
    loginCheck: (state) => {
      state.value = !state.value;
    },
  },
});

export const { loginCheck } = loginReducer.actions;

export default loginReducer.reducer;
