// import { createReducer } from "@reduxjs/toolkit";
// import { increment, decrement } from "../Action/counter.action";

// export const counterState = 0;

// // const counter = createReducer(0, {
// //   [increment.type]: (state) => state + 1,
// //   [decrement.type]: (state) => state - 1,
// // });

// const counter = createReducer(counterState, (builder) => {
//   builder.addCase(increment, (state, _) => {
//     return state + 1;
//   });
//   builder.addCase(decrement, (state, _) => {
//     return state - 1;
//   });
// });

// export default counter;

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state, action) => {
      console.log(state);
      state.count = state.count + 1;
    },
    decrement: (state, action) => {
      state.count = state.count - 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
