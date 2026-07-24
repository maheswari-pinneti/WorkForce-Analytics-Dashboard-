import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        <Box
          sx={{
            width: 80,
            height: 80,
            mx: "auto",
            mb: 3,
            borderRadius: "50%",
            bgcolor: "#FEE2E2",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LockOutlinedIcon
            sx={{
              fontSize: 42,
              color: "#DC2626",
            }}
          />
        </Box>

        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: "error",
          }}
        >
          403
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mt: 2,
            fontWeight: 600,
          }}
        >
          Access Denied
        </Typography>

        <Typography
          sx={{
            mt: 2,
            color: "#64748B",
            mb: 4,
          }}
        >
          You don't have permission to
          access this page.

          <br />

          Please contact your administrator
          if you believe this is a mistake.
        </Typography>

        <Button
          variant="contained"
          startIcon={<HomeIcon />}
          onClick={() =>
            navigate("/dashboard")
          }
          sx={{
            textTransform: "none",
            px: 4,
            borderRadius: 2,
          }}
        >
          Back to Dashboard
        </Button>
      </Paper>
    </Container>
  );
};

export default Unauthorized;