import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './CadastroPaciente.css';

const CadastroPaciente = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/exames');
  };

  return (
    <main className="cadastro-container">
      <section className="cadastro-card">
        <header className="text-center mb-4">
          <h1>Cadastro Paciente</h1>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              {/* Primeira Coluna */}
              <article className="mb-3">
                <label htmlFor="nome" className="form-label">Nome</label>
                <input type="text" id="nome" placeholder="Digite seu nome" className="form-control"/>
              </article>
              <article className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input type="email" id="email" placeholder="nome@email.com" className="form-control"/>
              </article>
              <article className="mb-3">
                <label htmlFor="senha" className="form-label">Senha</label>
                <input type="password" id="senha" placeholder="Crie uma senha" className="form-control"/>
              </article>
              <article className="mb-3">
                <label htmlFor="confirma-senha" className="form-label">Confirmação da senha</label>
                <input type="password" id="confirma-senha" placeholder="Confirme sua senha" className="form-control"/>
              </article>
            </div>
            <div className="col-md-6">
              {/* Segunda Coluna */}
              <article className="mb-3">
                <label htmlFor="convenio" className="form-label">Tipo de Convênio</label>
                <input type="text" id="convenio" placeholder="ex. Santa Saúde" className="form-control"/>
              </article>
              <article className="mb-3">
                <label htmlFor="carteirinha" className="form-label">Número Carteirinha</label>
                <input type="text" id="carteirinha" placeholder="ex. 123.456-78" className="form-control"/>
              </article>
              <article className="mb-3 form-check">
                <input type="checkbox" id="termos" className="form-check-input"/>
                <label className="form-check-label" htmlFor="termos">
                  Eu li e concordo com os <a href="#" style={{ color: 'var(--secondary-color)' }}>Termos e Condições</a> e a <a href="#" style={{ color: 'var(--secondary-color)' }}>Política de Privacidade</a>.
                </label>
              </article>
              <article className="mb-3 form-check">
                <input type="checkbox" id="compartilhar" className="form-check-input"/>
                <label className="form-check-label" htmlFor="compartilhar">
                  Eu permito e concordo com o <a href="#" style={{ color: 'var(--secondary-color)' }}>Compartilhamento de Informações Médicas</a> para o aplicativo e os profissionais da saúde.
                </label>
              </article>
            </div>
          </div>
          <footer className="text-center mt-3">
            <button type="submit" className="btn btn-primary">Avançar</button>
          </footer>
        </form>
      </section>
    </main>
  );
}

export default CadastroPaciente;
