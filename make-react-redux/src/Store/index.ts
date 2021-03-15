import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../Reducer/counterReducer";

// const reducers = combineReducers({
//   count: counterReducer,
// });

// export type RootState = ReturnType<typeof reducers>;
const store = configureStore({
  reducer: {
    counter: countReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
