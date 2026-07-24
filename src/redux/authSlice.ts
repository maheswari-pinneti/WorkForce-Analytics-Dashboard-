import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { AuthUser } from "../services/authApi";

import authApi from "../services/authApi";

interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  rememberMe: boolean;
  lastLogin: number | null;
}

const currentUser = authApi.getCurrentUser();

const initialState: AuthState = {
  user: currentUser,
  isAuthenticated: currentUser !== null,
  isLoading: false,
  error: null,
  rememberMe: false,
  lastLogin: currentUser ? Date.now() : null,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    loginStart(state) {
      state.isLoading = true;
      state.error = null;
    },

    loginSuccess(
      state,
      action: PayloadAction<{
        user: AuthUser;
        rememberMe: boolean;
      }>
    ) {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
      state.rememberMe =
        action.payload.rememberMe;
      state.lastLogin = Date.now();
    },

    loginFailure(
      state,
      action: PayloadAction<string>
    ) {
      state.isLoading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
      state.user = null;
    },

    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = null;
      state.rememberMe = false;
      state.lastLogin = null;
    },

    restoreSession(
      state,
      action: PayloadAction<AuthUser | null>
    ) {
      state.user = action.payload;
      state.isAuthenticated =
        action.payload !== null;
      state.isLoading = false;
    },

    clearError(state) {
      state.error = null;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  restoreSession,
  clearError,
} = authSlice.actions;

export default authSlice.reducer;