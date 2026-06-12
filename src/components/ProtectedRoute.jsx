import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Loading from "./Loading";

const ProtectedRoute = ({ children }) => {
  const { admin, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  if (!admin) {
    return <Navigate to="/auth/login" />;
  }

  return children;
};

export default ProtectedRoute;