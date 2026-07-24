import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

import { useSelector } from "react-redux";

import type { RootState } from "../../redux/store";

const Dashboard = () => {
  const { user } = useSelector(
    (state: RootState) => state.auth
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f8f9ff",
        p: 4,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 1,
          color: "#0b1c30",
        }}
      >
        Workforce Analytics Dashboard
      </Typography>

      <Typography
        sx={{
          color: "#64748B",
          mb: 4,
        }}
      >
        Welcome back, {user?.username}
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow:
                "0 10px 20px rgba(0,0,0,.05)",
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                }}
              >
                User Information
              </Typography>

              <Divider
                sx={{
                  my: 2,
                }}
              />

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Avatar
                  sx={{
                    width: 64,
                    height: 64,
                    bgcolor: "#2563EB",
                  }}
                >
                  <PersonIcon />
                </Avatar>

                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                    }}
                  >
                    {user?.username}
                  </Typography>

                  <Chip
                    icon={<VerifiedUserIcon />}
                    label={user?.role}
                    color="primary"
                    size="small"
                    sx={{
                      mt: 1,
                    }}
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow:
                "0 10px 20px rgba(0,0,0,.05)",
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                }}
              >
                Authentication Status
              </Typography>

              <Divider
                sx={{
                  my: 2,
                }}
              />

              <Typography
                sx={{
                  mb: 2,
                }}
              >
                Status
              </Typography>

              <Chip
                label="Authenticated"
                color="success"
              />

              <Typography
                sx={{
                  mt: 3,
                }}
              >
                Current Role
              </Typography>

              <Chip
                label={user?.role}
                color="primary"
                sx={{
                  mt: 1,
                }}
              />

              <Typography
                sx={{
                  mt: 3,
                }}
              >
                Session
              </Typography>

              <Chip
                label="Active"
                color="success"
                sx={{
                  mt: 1,
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Paper
            sx={{
              mt: 3,
              p: 4,
              borderRadius: 3,
              boxShadow:
                "0 10px 20px rgba(0,0,0,.05)",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 2,
              }}
            >
              Authentication Module
            </Typography>

            <Divider
              sx={{
                mb: 3,
              }}
            />

            <Typography>
              ✅ Login
            </Typography>

            <Typography>
              ✅ Logout
            </Typography>

            <Typography>
              ✅ Protected Routes
            </Typography>

            <Typography>
              ✅ Role-Based Access
            </Typography>

            <Typography>
              ✅ Session Restore
            </Typography>

            <Typography>
              ✅ Remember Me
            </Typography>

            <Typography>
              ✅ Unauthorized Page
            </Typography>

            <Typography>
              ✅ 404 Page
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;