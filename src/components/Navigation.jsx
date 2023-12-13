import { Link } from "react-router-dom";
import { colors } from "./styleBase";
import {
  Box,
  Button,
  Card,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Logout from "@mui/icons-material/Logout";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { useState, useEffect } from "react";

export function Navigation() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [login, setLogin] = useState(true);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setLogin((current) => !current);
    // console.log(login);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setLogin((current) => !current);
    // console.log(login);
  };

  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(login));
    // console.log(login, "local");
  }, [login]);

  return (
    <Card sx={{ p: 2 }}>
      {/* LINKS */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
        spacing={2}>
        <Link spacing={2} to="/">
          <img src="/logo.png" alt="Logo" width={50} height={50} />
        </Link>
        <Box>
          <Button
            onClick={() => {
              setLogin(false);
            }}>
            <Link spacing={2} to="/ListPage">
              Lista de lugares
            </Link>
          </Button>
        </Box>
        <Box>
          <Button>
            <Link spacing={2} to="/SignUp">
              Sign up
            </Link>
          </Button>
          <Button>
            <Link spacing={2} to="/Login">
              Login
            </Link>
          </Button>
          <IconButton
            sx={{ color: colors.iconUser }}
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}>
            <AccountCircle sx={{ fontSize: 35 }} />
          </IconButton>
        </Box>
      </Box>

      {/* MENU USER */}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
        <Link spacing={2} to="/DashboardUser/">
          <MenuItem>
            <Avatar /> Profile
          </MenuItem>
        </Link>
        <Divider />
        <Link spacing={2} to="/FormPlace">
          <MenuItem>
            <ListItemIcon>
              <AddIcon fontSize="small" />
            </ListItemIcon>
            Agregar lugar
          </MenuItem>
        </Link>
        <Link spacing={2} to="/placesListUser">
          <MenuItem>
            <ListItemIcon>
              <EditIcon fontSize="small" />
            </ListItemIcon>
            Mis lugares
          </MenuItem>
        </Link>
        <Link spacing={2} to="/">
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Link>
      </Menu>
    </Card>
  );
}
