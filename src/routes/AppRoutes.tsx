import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Unauthorized from "../pages/Unauthorized/Unauthorized";
import NotFound from "../pages/NotFound/NotFound";

import ProtectedRoute from "./ProtectedRoute";
import RoleBasedRoute from "./RoleBasedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          element={
            <RoleBasedRoute
              allowedRoles={[
                "Admin",
                "HR",
                "Manager",
              ]}
            />
          }
        >
          <Route
            path="/employees"
            element={<div>Employees</div>}
          />

          <Route
            path="/analytics"
            element={<div>Analytics</div>}
          />
        </Route>

        <Route
          element={
            <RoleBasedRoute
              allowedRoles={["Admin"]}
            />
          }
        >
          <Route
            path="/settings"
            element={<div>Settings</div>}
          />
        </Route>
      </Route>

      <Route
        path="/unauthorized"
        element={<Unauthorized />}
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;