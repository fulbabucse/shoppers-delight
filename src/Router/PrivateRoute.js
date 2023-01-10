import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner";
import { AuthContext } from "../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  }

  if (loading) {
    return <Spinner />;
  }

  return <Navigate to="/sign-in" state={{ from: location }} replace />;
};

export default PrivateRoute;
