import { Button, Container, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

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
        elevation={4}
        sx={{
          p: 5,
          textAlign: "center",
          borderRadius: 3,
          width: "100%",
        }}
      >
        <Typography >
          403
        </Typography>

        <Typography
          variant="h5"
          sx={{ mt: 2 }}
          gutterBottom
        >
          Unauthorized Access
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          You don't have permission to access this page.
        </Typography>

        <Button
          variant="contained"
          onClick={() => navigate("/dashboard")}
        >
          Go to Dashboard
        </Button>
      </Paper>
    </Container>
  );
};

export default Unauthorized;