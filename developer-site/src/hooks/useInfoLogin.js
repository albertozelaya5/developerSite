import { useState, useEffect } from 'react';

export const useInfoLogin = () => {
  const [loged, setLoged] = useState(null);

  const login = () => setLoged({ user: "admin", password: "admin" });
  const logout = () => setLoged(null);

  useEffect(() => {
    // Supongamos que intentamos autenticar automáticamente al usuario
    login();
  }, []);

  return { loged, login, logout };
};
