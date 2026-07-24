import { useState, type FormEvent } from "react";
import {
  Alert,
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import type { AppDispatch } from "../../redux/store";
import type {
  AuthUser,
  LoginPayload,
} from "../../services/authApi";

import authApi from "../../services/authApi";
import { login } from "../../redux/authSlice";

const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validate = () => {
    if (!username.trim()) {
      setError("Username is required.");
      return false;
    }

    if (!password.trim()) {
      setError("Password is required.");
      return false;
    }

    setError("");
    return true;
  };

  const handleLogin = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setLoading(true);

    try {
      const payload: LoginPayload = {
        username,
        password,
      };

      const user: AuthUser = authApi.login(payload);
      authApi.saveUser(user);
      dispatch(login(user));

      navigate("/dashboard", {
        replace: true,
      });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Login failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleLogin}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      {error && (
        <Alert severity="error">
          {error}
        </Alert>
      )}

      <TextField
        label="Username"
        placeholder="Enter your username"
        fullWidth
        autoComplete="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root": {
            height: 52,
            borderRadius: "8px",
            backgroundColor: "#FFFFFF",

            "& fieldset": {
              borderColor: "#C3C6D7",
            },

            "&:hover fieldset": {
              borderColor: "#2563EB",
            },

            "&.Mui-focused fieldset": {
              borderColor: "#2563EB",
              borderWidth: "2px",
            },

            "&.Mui-focused": {
              boxShadow:
                "0 0 0 3px rgba(37,99,235,.15)",
            },
          },

          "& .MuiInputLabel-root": {
            color: "#434655",
            fontWeight: 500,
          },
        }}
      />

      <FormControl fullWidth>
        <InputLabel>Password</InputLabel>

        <OutlinedInput
          label="Password"
          placeholder="Enter your password"
          autoComplete="current-password"
          type={
            showPassword
              ? "text"
              : "password"
          }
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          sx={{
            height: 52,
            borderRadius: "8px",
            backgroundColor: "#FFFFFF",

            "& fieldset": {
              borderColor: "#C3C6D7",
            },

            "&:hover fieldset": {
              borderColor: "#2563EB",
            },

            "&.Mui-focused fieldset": {
              borderColor: "#2563EB",
              borderWidth: "2px",
            },

            "&.Mui-focused": {
              boxShadow:
                "0 0 0 3px rgba(37,99,235,.15)",
            },
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                edge="end"
                onClick={() =>
                  setShowPassword(
                    (prev) => !prev
                  )
                }
              >
                {showPassword ? (
                  <VisibilityOff />
                ) : (
                  <Visibility />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <Button
        type="submit"
        variant="contained"
        fullWidth
        size="large"
        disabled={loading}
        sx={{
          height: 50,
          borderRadius: "8px",
          backgroundColor: "#2563EB",
          color: "#FFFFFF",
          fontWeight: 600,
          fontSize: "16px",
          textTransform: "none",
          boxShadow:
            "0 4px 10px rgba(37,99,235,0.25)",
          transition: "all .2s ease",

          "&:hover": {
            backgroundColor: "#004AC6",
            transform: "scale(0.98)",
            boxShadow:
              "0 8px 20px rgba(37,99,235,0.35)",
          },

          "&:disabled": {
            backgroundColor: "#CBD5E1",
            color: "#64748B",
          },
        }}
      >
        {loading ? "Signing In..." : "Sign In"}
      </Button>
    </Box>
  );
};

export default LoginForm;