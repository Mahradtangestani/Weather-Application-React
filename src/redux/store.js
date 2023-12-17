import weatherReducer from "./weather/weatherReducer";
import { configureStore } from "@reduxjs/toolkit";

// const store = createStore(weatherReducer , applyMiddleware(thunk))
const store = configureStore({
  reducer: weatherReducer,
});
export default store;
