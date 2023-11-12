import { useState, useEffect } from 'react';

import { useNavigate  } from "react-router-dom";

import api from "../../services/api";

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if(token){
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);

  async function handleLogin(email, senha, successFunc, errorFunc){
    try {
      const { data } = await api.post("/auth/signin", { username: email, password: senha });
      localStorage.setItem("token", JSON.stringify(data.accessToken));
      api.defaults.headers.Authorization = `Bearer ${data.accessToken}`;
      setAuthenticated(true);
      successFunc("Logado com sucesso!");
      navigate("/privado");
    } catch (error) {
      errorFunc(error.response.data.message);
    }
    
  }

  
  async function handleLogout(){
    setAuthenticated(false);
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = undefined;
    navigate("/login");
  }
  
  return { authenticated, handleLogin, handleLogout, loading };
}