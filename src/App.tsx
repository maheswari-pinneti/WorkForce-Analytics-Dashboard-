import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import type { AppDispatch } from "./redux/store";

import { restoreSession } from "./redux/authSlice";
import authApi from "./services/authApi";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [initializing, setInitializing] =
    useState(true);

  useEffect(() => {
    const restoreAuth = () => {
      const user = authApi.getCurrentUser();

      dispatch(restoreSession(user));

      setInitializing(false);
    };

    restoreAuth();
  }, [dispatch]);

  if (initializing) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "18px",
          fontWeight: 600,
        }}
      >
        Loading...
      </div>
    );
  }

  return <AppRoutes />;
};

export default App;