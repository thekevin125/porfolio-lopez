import { createSlice } from "@reduxjs/toolkit";

export const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    isActive: true,
    widthSizeOn: "",
  },
  reducers: {
    navbarStatus: (stata, action) => {
      stata.isActive = action.payload;
    },
    widthSizeStatus: (stata, action) => {
      stata.widthSizeOn = action.payload;
    },
  },
});

export const { navbarStatus, widthSizeStatus } = navbarSlice.actions;
