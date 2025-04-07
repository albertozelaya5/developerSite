import { useDispatch, useSelector } from "react-redux";
import { onLogin, onLogout, onAuthenticated, onChecking, onLoginFailed } from "../features/authSlice";
import { loginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLogin } from "./useLogin";
import axios from "axios";
import { useState } from "react";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { startLogin } = useLogin();
  const user = useSelector((state) => state.auth.user);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    dispatch(onChecking());
    let url = import.meta.env.VITE_BASE_API_URL + "openBanking/auth";
    try {
      let response = await axios.post(url, data);
      if (response.data.status === "error") {
        // console.error("Error: Las credenciales no son correctas.");
        alert("Error: Las credenciales no son correctas.");
        dispatch(onLoginFailed("Las credenciales no son correctas."));
        return { success: false, errors: { general: "Las credenciales no son correctas." } };
      } else {
        const payload = {
          user: data.userName,
          password: data.password,
        };
        await startLogin(payload);
        dispatch(onLogin(payload));
        dispatch(onAuthenticated());
        return { success: true };
      }
    } catch (error) {
      // console.error("Usuario o contraseña incorrectos", error);
      alert("Error: Las credenciales no son correctas.");
      dispatch(onLoginFailed("Usuario o contraseña incorrectos"));
      return { success: false, errors: { general: "Usuario o contraseña incorrectos" } };
    }
  };

  const logout = () => {
    dispatch(onLogout());
  };

  return {
    user,
    form,
    showPassword,
    setShowPassword,
    logout,
    onSubmit,
  };
};
