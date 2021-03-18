import { configureStore } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import countEpic from "../Epic/counter.epic";
import countReducer from "../Reducer/counterReducer";

export const rootEpic = combineEpics(countEpic);
const epicMiddleWare = createEpicMiddleware();

const store = configureStore({
  reducer: {
    counter: countReducer,
  },
  middleware: [epicMiddleWare],
});

epicMiddleWare.run(rootEpic);

export default store;
