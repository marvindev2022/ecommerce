import { useNavigate } from "react-router-dom";
import profile from "../../assets/Profile-PNG-Free-Image.png";
import './style.css'

function Sidebar({user ,setStateSignin ,stateSignin }) {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="container-usuario">
        <img src={profile} alt="" />
        <span>Bem vindo {!user ? "" : `, ${user.nome}`}</span>
        {user ? (
          <button
            onClick={() => {
              setStateSignin({ ...stateSignin, user: null, logado: false });
              navigate("/main");
            }}
          >
            Sair
          </button>
        ) : (
          <button
            onClick={() => {
              navigate("/signin");
            }}
          >
            Entrar
          </button>
        )}
      </div>
      <nav>
        <button className="" onClick={() => {}}>
          Dados Pessoais
        </button>
        <button className="" onClick={() => {}}>
          Historico
        </button>
        <button className="" onClick={() => {}}>
          Categorias
        </button>
        <button className="" onClick={() => {}}>
          Favoritos
        </button>
        <button className="" onClick={() => {}}>
          Promoções
        </button>
      </nav>
    </div>
  );
}

export default Sidebar;
