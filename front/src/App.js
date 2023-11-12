import React, { useState } from "react";
import "./index.css";
import api from "./services/api";
import { message } from 'antd';

function App() {
  const [email, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const successMessage = (success) => {
    messageApi.open({
      type: 'success',
      content: success,
    });
  };

  const errorMessage = (error) => {
    messageApi.open({
      type: 'error',
      content: error,
    });
  };

  const handleSubimit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/auth/signin", { username: email, password: senha });
      localStorage.setItem("token", JSON.stringify(data.accessToken));
      console.log(data);
      successMessage("Logado com sucesso");
    } catch (error) {
      console.log(error.response.data.message)
       errorMessage(error.response.data.message);
    }
  }
  

  return (
    <div className="mainContainer">
      {contextHolder}
      <div className="container">
        <div className="header">
          <p>Onzemais</p>
        </div>
        <div className="content">
          <div className="email">
            <p className="pLogin">E-mail</p>
            <input type="text" value={email} onChange={(e) => setUsuario(e.target.value)} className="inputLogin" />
          </div>
          <div className="senha">
            <p className="pLogin">Senha</p>
            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} className="inputLogin" />
          </div>
          <button className="btnLogin" onClick={handleSubimit} type="button">
            Entrar
          </button>
        </div>
        <footer className="footerLogin">
          <p className="pFooter">Todos os direitos reservados</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
