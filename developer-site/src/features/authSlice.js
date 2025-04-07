import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  status: "pending", // Considera 'pending' como estado inicial antes del chequeo
  error: null, // Nuevo campo para almacenar mensajes de error
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onChecking: (state) => {
      state.status = "checking";
      state.user = null;
      state.error = null; // Limpiar errores previos
    },
    onLogin: (state, { payload }) => {
      state.status = "authenticated"; // Cambia directamente a 'authenticated' si el login es exitoso
      state.user = payload;
      state.error = null;
    },
    onAuthenticated: (state) => {
      state.status = "authenticated";
    },
    onLogout: (state) => {
      state.status = "not-authenticated";
      state.user = null;
    },
    onLoginFailed: (state, action) => {
      state.status = "not-authenticated";
      state.error = action.payload; // Almacenar el mensaje de error
    },
  },
});

export const { onAuthenticated, onChecking, onLogin, onLogout, onLoginFailed } = authSlice.actions;
export default authSlice.reducer;
