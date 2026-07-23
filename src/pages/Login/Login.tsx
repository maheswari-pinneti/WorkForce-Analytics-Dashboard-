import {
  Box,
  Divider,
  Paper,
  Typography,
} from "@mui/material";

import LoginForm from "./LoginForm";
import "./Login.css";

const Login = () => {
  return (
    <Box className="login-container">
      <Paper
        elevation={0}
        className="login-card"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 3,
          }}
        >
          <img
            src="https://thestackly.com/assets/imgs/logo-stackly%20(1).png"
            alt="Stackly"
            style={{
              width: "320px",
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Box>

        <Typography
          variant="h4"
          align="center"
          className="login-title"
          sx={{
            fontWeight: 700,
            mb: 0.5,
          }}
        >
          Welcome
        </Typography>

        <Typography
          align="center"
          className="login-subtitle"
          sx={{
            mb: 3,
          }}
        >
          Sign in to access your Stackly account
        </Typography>

        <LoginForm />

        <Divider
          sx={{
            my: 2.5,
          }}
        />

        <Typography
          className="login-footer"
        >
          Workforce Analytics Dashboard
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;