import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import type { RootState } from "../redux/store";

import authApi from "../services/authApi";

const ProtectedRoute = () => {
  const location = useLocation();

  const {
    isAuthenticated,
    isLoading,
  } = useSelector(
    (state: RootState) => state.auth
  );

  // Wait while restoring authentication
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Verify stored session
  if (!authApi.isAuthenticated()) {
    return (
      <Navigate
        to="/login"
        replace
        state={{
          from: location,
        }}
      />
    );
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
        state={{
          from: location,
        }}
      />
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;