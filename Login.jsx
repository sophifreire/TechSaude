import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Login.css';

const Login = () => {
  return (
    <main className="login-container">
      <section className="login-card">
        <div className="left-section">
          <div className="logo-container">
            <img src="/logo.png" alt="Logo" className="logo" />
            <h2 className="site-name">Tech Saúde</h2>
          </div>
        </div>
        <div className="form-container">
          <header className="text-center mb-4">
            <h1>Bem vindo!</h1>
          </header>
          <form>
            <article className="mb-3">
              <label htmlFor="usuario" className="form-label">Usuário</label>
              <input type="text" id="usuario" placeholder="Digite seu usuário" className="form-control" />
            </article>
            <article className="mb-3">
              <label htmlFor="senha" className="form-label">Senha</label>
              <input type="password" id="senha" placeholder="Digite sua senha" className="form-control" />
            </article>
            <aside className="mb-3 text-end">
              <a href="#" style={{ color: 'var(--secondary-color)' }}>Esqueceu a senha?</a>
            </aside>
            <footer className="text-center mt-3">
              <button type="submit" className="btn btn-primary">Entrar</button>
              <div>
                <a href="/cadastro" style={{ color: 'var(--secondary-color)' }}>Cadastre-se</a>
              </div>
            </footer>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Login;
