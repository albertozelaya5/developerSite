// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import dialogReducer from "../features/dialogSlice"; // Asegúrate de que la ruta es correcta

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dialog: dialogReducer,
  },
});
