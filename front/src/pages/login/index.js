import React, { useState, useContext } from "react";
import { message } from 'antd';
import "./index.css";

import { Context } from "../../Context/AuthContext";

function Login() {
  const [email, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const { handleLogin } = useContext(Context);

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
    handleLogin(email, senha, successMessage, errorMessage);
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
            <input type="email" value={email} onChange={(e) => setUsuario(e.target.value)} className="inputLogin" />
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

export default Login;
