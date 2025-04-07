import { createContext, useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas";
import { onLogout } from "../features/authSlice";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  const logout = () => {
    dispatch(onLogout());
  };

  const value = { user, logout, form};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
