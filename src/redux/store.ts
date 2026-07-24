<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
=======
﻿import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import dashboardReducer from "./dashboardSlice";
import employeeReducer from "./employeeSlice";
>>>>>>> eaa902ea (Added Day 6 and Day 7 React Redux dashboard structure)

export const store = configureStore({
  reducer: {
    auth: authReducer,
<<<<<<< HEAD
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
=======
    dashboard: dashboardReducer,
    employees: employeeReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
>>>>>>> eaa902ea (Added Day 6 and Day 7 React Redux dashboard structure)
