import {
  AppBar,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import {  useSelector } from "react-redux";

import type { RootState } from "../../../redux/store";

const Header = () => {

  const user = useSelector(
    (state: RootState) => state.auth.user
  );

 

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "#ffffff",
        color: "#0b1c30",
        borderBottom: "1px solid #dce9ff",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
          }}
        >
          Workforce Analytics
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Typography
          sx={{
            mr: 3,
            color: "#434655",
            fontWeight: 500,
          }}
        >
          {user?.username}
        </Typography>

       
      </Toolbar>
    </AppBar>
  );
};

export default Header;