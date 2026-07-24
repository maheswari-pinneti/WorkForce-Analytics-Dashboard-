<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { AuthUser } from "../services/authApi";
import authApi from "../services/authApi";
interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
}

const currentUser = authApi.getCurrentUser();

const initialState: AuthState = {
  user: currentUser,
  isAuthenticated: currentUser !== null,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    login(state, action: PayloadAction<AuthUser>) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },

    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },

    restoreSession(state, action: PayloadAction<AuthUser | null>) {
      state.user = action.payload;
      state.isAuthenticated = action.payload !== null;
    },
  },
=======
﻿import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({

  name: "auth",

  initialState: {
    user: null,
    isAuthenticated: false
  },

  reducers: {

    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem(
        "user",
        JSON.stringify(action.payload)
      );
    },

    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
    }

  }

>>>>>>> eaa902ea (Added Day 6 and Day 7 React Redux dashboard structure)
});

export const {
  login,
<<<<<<< HEAD
  logout,
  restoreSession,
} = authSlice.actions;

export default authSlice.reducer;
=======
  logout
} = authSlice.actions;

export default authSlice.reducer;
>>>>>>> eaa902ea (Added Day 6 and Day 7 React Redux dashboard structure)
