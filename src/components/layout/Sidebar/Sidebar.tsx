import {
  Box,
  Button,
  Divider,
  Drawer,
  Toolbar,
  Typography,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import type { AppDispatch } from "../../../redux/store";
import { logout } from "../../../redux/authSlice";
import authApi from "../../../services/authApi";

import "./Sidebar.css";

const drawerWidth = 240;

const Sidebar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogout = () => {
    authApi.removeUser();
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  return (
    <Drawer
      variant="permanent"
      className="sidebar"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
        },
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          className="sidebar-title"
        >
          Workforce
        </Typography>
      </Toolbar>

      <Divider className="sidebar-divider" />

      <Box className="sidebar-content" />

      <Box className="sidebar-footer">
        <Button
          fullWidth
          variant="contained"
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
          className="logout-btn"
        >
          Logout
        </Button>
      </Box>
    </Drawer>
  );
};

export default Sidebar;