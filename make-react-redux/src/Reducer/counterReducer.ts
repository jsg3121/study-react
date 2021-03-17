import { createReducer } from "@reduxjs/toolkit";
import { increment, decrement } from "../Action/counter.action";

export const counterState = 0;

const counter = createReducer(counterState, (builder) => {
  builder.addCase(increment, (state) => {
    return state + 1;
  });
  builder.addCase(decrement, (state) => {
    return state - 1;
  });
});

export default counter;
