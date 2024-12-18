import { configureStore } from "@reduxjs/toolkit";
import { colorSlice } from "./colorSlice";
import { navbarSlice } from "./navbarSlice";
import { themeSlice } from "./themeSlice";

export const store = configureStore({
  reducer: {
    navbar: navbarSlice.reducer,
    theme: themeSlice.reducer,
    color: colorSlice.reducer,
  },
});
