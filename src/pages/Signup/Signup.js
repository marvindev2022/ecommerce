import { Link, useNavigate } from "react-router-dom";
import "./style.css";

export default function Signup({ stateSignup, setStateSignup }) {
  const navegate = useNavigate();

  return (
    <div className="container-form">
      <section className="form">
        <h1>Formulário de Cadastro</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <label>
            <input
              type="text"
              placeholder="Digite seu Nome"
              value={stateSignup.name}
              onChange={(event) => {
                setStateSignup({ ...stateSignup, name: event.target.value });
              }}
            />
          </label>
          <label>
            <input
              type="email"
              placeholder="Digite seu Email"
              value={stateSignup.email}
              onChange={(event) => {
                setStateSignup({ ...stateSignup, email: event.target.value });
              }}
            />
          </label>
          <label>
            <input
              type="tel"
              placeholder="Digite seu Telefone"
              value={stateSignup.telefone}
              onChange={(event) => {
                setStateSignup({
                  ...stateSignup,
                  telefone: event.target.value,
                });
              }}
            />
          </label>
          <label>
            <input
              type="number"
              placeholder="Digite seu cpf"
              maxLength={11}
              minLength={11}
              value={stateSignup.cpf}
              onChange={(event) => {
                setStateSignup({ ...stateSignup, cpf: event.target.value });
              }}
            />
          </label>
          <label>
            <input
              type="password"
              placeholder="Digite sua Senha"
              maxLength={10}
              minLength={6}
              value={stateSignup.senha}
              onChange={(event) => {
                setStateSignup({ ...stateSignup, senha: event.target.value });
              }}
            />
          </label>
          {stateSignup.alert ? (
            <strong style={{ color: "red" }}> Preencha todos os campos</strong>
          ) : (
            <></>
          )}
          <span>
            Já tem cadastro?
            <Link className="link" to="/signin">
              Clique aqui
            </Link>
          </span>
          <button
            type="submit"
            className="btn-form"
            onClick={() => {
              if (
                stateSignup.name === "" ||
                stateSignup.cpf === "" ||
                stateSignup.email === "" ||
                stateSignup.telefone === "" ||
                stateSignup.senha === ""
              ) {
                setStateSignup({ ...stateSignup, alert: true });
              } else {
                setStateSignup({ ...stateSignup, cadastrado: true });
                navegate("/signin");
              }
            }}
          >
            Cadastrar
          </button>
        </form>
      </section>
    </div>
  );
}
