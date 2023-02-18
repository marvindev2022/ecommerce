import { Outlet, Navigate } from "react-router-dom";

export default function ProtectRouter({ logado, redirectTo }) {
  const isAuth = logado;
  return isAuth ? <Outlet /> : <Navigate to={redirectTo} />;
}
