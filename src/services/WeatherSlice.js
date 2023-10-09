import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

export const WeatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

export const { setData } = WeatherSlice.actions;

export default WeatherSlice.reducer;
