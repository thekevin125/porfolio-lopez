import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "color",
  initialState: {
    currentColor: window.localStorage.getItem("color")
      ? window.JSON.parse(window.localStorage.getItem("color"))
      : window.localStorage.setItem(
          "color",
          window.JSON.stringify({ bg: "bg-red-500", text: "text-red-500" })
        ),
  },
  reducers: {
    colorStatus: (state, action) => {
      const { bg, text } = action.payload;
      state.currentColor = {
        bg,
        text,
      };
      window.localStorage.setItem("color", window.JSON.stringify({ bg, text }));
    },
  },
});

export const { colorStatus } = colorSlice.actions;
