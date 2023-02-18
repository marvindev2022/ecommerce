import { Link, useNavigate } from "react-router-dom";
import "./style.css";

export default function Signin({ stateSignin, setStateSignin }) {
  const navigate = useNavigate();
  return (
    <div className="container-form">
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <h2>Sign-in</h2>
        <label>
          <input
            type="email"
            placeholder="Digite seu E-mail"
            onChange={(event) =>
              setStateSignin({ ...stateSignin, email: event.target.value })
            }
          />
        </label>
        <label>
          <input
            type={!stateSignin.showPassword ? "password" : "text"}
            placeholder="Digite sua senha"
            onChange={(event) =>
              setStateSignin({ ...stateSignin, senha: event.target.value })
            }
          />
        </label>

        <span className="input-ckeckbox">
          <input
            style={{ width: "20px",height:'20px', marginLeft: "-100px" }}
            type={"checkbox"}
            onChange={(event) => {
              if (event.target.checked) {
                setStateSignin({ ...stateSignin, showPassword: true });
              } else {
                setStateSignin({ ...stateSignin, showPassword: false });
              }
            }}
          />
          Mostrar Senha
        </span>

        {stateSignin.alerta ? (
          <span style={{ color: "red",fontSize:"16px" ,position:"fixed",marginTop:"120px"}}>{stateSignin.mensagemErro}</span>
        ) : (
          <></>
        )}
<br/>
        <span>
          Não tem cadastro? <Link className="link" to="/signup">Clique aqui</Link>
        </span>

        <button
          type="submit"
          onClick={() => {
            if (!stateSignin.email || !stateSignin.senha) {
              setStateSignin({
                ...stateSignin,
                alerta: true,
                mensagemErro: "Preencha todos os campos!",
              });
            } else if (
              stateSignin.email !== "adm@test" ||
              stateSignin.senha !== "123456"
            ) {
              setStateSignin({
                ...stateSignin,
                alerta: true,
                mensagemErro: "Email/Senha invalido",
              });
            } else {
              setStateSignin({
                ...stateSignin,
                alerta: false,
                logado: true,
                email: "",
                senha: "",
                user:{
                  id:1,
                  nome:'adm teste'
                }
              });
              navigate("/main");
            }
          }}
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
