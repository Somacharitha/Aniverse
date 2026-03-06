import { createContext, useState, useEffect } from "react";
import { loginUser, registerUser, getProfile } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // check if user already logged in
  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    getProfile()
      .then((res) => {
        setUser(res.data);
      })
      .catch(() => {
        localStorage.removeItem("token");
      })
      .finally(() => {
        setLoading(false);
      });

  }, []);

  // LOGIN
  const login = async (formData) => {

    const res = await loginUser(formData);

    const token = res.data.data.token;
    localStorage.setItem("token", token);

    const profile = await getProfile();

    setUser(profile.data);

  };

  // REGISTER
  const register = async (formData) => {

    await registerUser(formData);

  };

  // LOGOUT
  const logout = () => {

    localStorage.removeItem("token");
    setUser(null);

  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );

};