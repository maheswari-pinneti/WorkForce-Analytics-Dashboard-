import { Button, Container, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
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
        elevation={4}
        sx={{
          p: 5,
          width: "100%",
          textAlign: "center",
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            color: "primary.main",
          }}
        >
          404
        </Typography>

        <Typography
          variant="h5"
          sx={{ mt: 2 }}
        >
          Page Not Found
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mt: 2, mb: 4 }}
        >
          The page you are looking for doesn't exist or has been moved.
        </Typography>

        <Button
          variant="contained"
          onClick={() => navigate("/dashboard")}
        >
          Back to Dashboard
        </Button>
      </Paper>
    </Container>
  );
};

export default NotFound;