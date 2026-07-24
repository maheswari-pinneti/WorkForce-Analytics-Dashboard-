import {
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import { useSelector } from "react-redux";

import type { RootState } from "../redux/store";
import type { UserRole } from "../services/authApi";

interface RoleBasedRouteProps {
  allowedRoles: UserRole[];
}

const RoleBasedRoute = ({
  allowedRoles,
}: RoleBasedRouteProps) => {
  const location = useLocation();

  const {
    user,
    isAuthenticated,
    isLoading,
  } = useSelector(
    (state: RootState) => state.auth
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated || !user) {
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

  if (
    !allowedRoles.includes(user.role)
  ) {
    return (
      <Navigate
        to="/unauthorized"
        replace
        state={{
          from: location,
        }}
      />
    );
  }

  return <Outlet />;
};

export default RoleBasedRoute;