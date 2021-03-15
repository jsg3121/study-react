import { createAction } from "@reduxjs/toolkit";

export const INCREMENT = "counter/INCREMENT";
export const DECREMENT = "counter/DECREMENT";

export const increment = createAction<number>(INCREMENT);
export const decrement = createAction<number>(DECREMENT);
