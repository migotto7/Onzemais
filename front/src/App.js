function App() {
  return (
    <div className="mainContainer">
      <div className="container">
            <div className="header">
                <p>Onzemais</p>
            </div>
            <div className="content">
                <div className="usuario">
                    <p className="pLogin">Usuário</p>
                    <input type="text" className="inputLogin" />
                </div>
                <div className="senha">
                    <p className="pLogin">Senha</p>
                    <input type="password" className="inputLogin" />
                </div>
                <button className="btnLogin" type="button">Entrar</button>
            </div>
            <footer className="footerLogin">
                <p className="pFooter">Todos os direitos reservados</p>
            </footer>
        </div>
    </div>
  );
}

export default App;
