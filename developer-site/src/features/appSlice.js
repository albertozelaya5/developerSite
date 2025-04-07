import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: sessionStorage.getItem("banhcafedevtheme")
    ? JSON.parse(sessionStorage.getItem("banhcafedevtheme"))
    : "light",
  menu: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    themeToggler: (state, { payload }) => {
      state.theme = payload;
    },
  },
});

export const { themeToggler } = appSlice.actions;
