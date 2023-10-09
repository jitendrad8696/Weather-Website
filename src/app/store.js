import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../services/WeatherSlice";

export const store = configureStore({
  reducer: weatherReducer,
});
