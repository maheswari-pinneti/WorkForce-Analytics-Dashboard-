import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import type { RootState } from "../../redux/store";

const NotFound = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          p: 5,
          borderRadius: 4,
          textAlign: "center",
          border: "1px solid #E2E8F0",
          boxShadow:
            "0 20px 45px rgba(15,23,42,.08)",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            color: "#2563EB",
            lineHeight: 1,
          }}
        >
          404
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mt: 2,
            fontWeight: 600,
          }}
        >
          Page Not Found
        </Typography>

        <Typography
          sx={{
            mt: 2,
            mb: 4,
            color: "#64748B",
          }}
        >
          The page you are looking for doesn't exist
          or has been moved.
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
          >
            Go Back
          </Button>

          <Button
            variant="contained"
            startIcon={<HomeIcon />}
            onClick={() =>
              navigate(
                isAuthenticated
                  ? "/dashboard"
                  : "/login"
              )
            }
          >
            {isAuthenticated
              ? "Dashboard"
              : "Login"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default NotFound;