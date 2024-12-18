import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    themeColor: window.localStorage.getItem("theme")
      ? window.localStorage.getItem("theme")
      : window.localStorage.setItem("theme", "dark"),
  },
  reducers: {
    themeStatus: (stata, action) => {
      stata.themeColor = action.payload;
      if (action.payload === "dark") {
        window.localStorage.setItem("theme", "dark");
      } else {
        window.localStorage.setItem("theme", "light");
      }
    },
  },
});

export const { themeStatus } = themeSlice.actions;
