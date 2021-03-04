import { createAction } from "@reduxjs/toolkit";

export const increment = createAction<number>("INCREMENT");
export const decrement = createAction<number>("DECREMENT");
