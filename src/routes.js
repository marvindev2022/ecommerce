import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Signin from "./pages/Signin/Signin";
import ProtectRouter from "./components/ProtectRouter/ProtectRouter";
import Signup from "./pages/Signup/Signup";
import Main from "./pages/main/Main";

export default function MyRoutes() {
  const [stateSignin, setStateSignin] = useState({
    email: null,
    senha: null,
    showPassword: null,
    alerta: false,
    mensagemErro: "",
    logado: false,
    user: null,
  });
  const [stateSignup, setStateSignup] = useState({
    name: "",
    cpf: "",
    email: "",
    telefone: "",
    senha: "",
    alert: false,
    cadastrado: false,
  });
  return (
    <Routes>
      <Route
        path="/signin"
        element={
          <Signin setStateSignin={setStateSignin} stateSignin={stateSignin} />
        }
      />
      <Route
        path="/signup"
        element={
          <Signup stateSignup={stateSignup} setStateSignup={setStateSignup} />
        }
      />

      <Route
        element={
          <ProtectRouter
            logado={stateSignin.logado}
            stateSignin={stateSignin}
            redirectTo={"signin"}
          />
        }
      >
        <Route
          path="/main"
          element={
            <Main stateSignin={stateSignin} setStateSignin={setStateSignin} />
          }
        />
        <Route path="/comprar" element={""} />
      </Route>
      <Route path="*" element={<h1>404-NO FOUND</h1>} />
    </Routes>
  );
}
