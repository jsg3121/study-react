import { createAction } from "@reduxjs/toolkit";

export const INCREMENT = "counter/INCREMENT";
export const DECREMENT = "counter/DECREMENT";
export const INCREMENTASYNC = "async/INCREMENT";

export const increment = createAction<number | undefined>(INCREMENT);
export const decrement = createAction<number | undefined>(DECREMENT);

export const incrementAsync = createAction<number | undefined>(INCREMENTASYNC);
