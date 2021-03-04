import { createReducer } from "@reduxjs/toolkit";
import { increment, decrement } from "../Action/counter.action";

const counter = createReducer(0, (builder) => {
  builder.addCase(increment, (state, _) => {
    return state + 1;
  });
  builder.addCase(decrement, (state, _) => {
    return state - 1;
  });
});

export default counter;
