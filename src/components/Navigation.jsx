import { Link } from "react-router-dom";
import { colors } from './styleBase'
import { Typography, Box, Button,Card,IconButton } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';

export function Navigation() {

  return (
  
      <Card sx={{ p: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent:"space-evenly" }} spacing={2}>
          <Link spacing={2} to="/">
            <img src='/logo.png' alt='Logo' width={50} height={50} />
          </Link> 
          <Box>
            <Button><Link spacing={2} to="/ListPage">Lista de lugares</Link></Button>
            <Button><Link spacing={2} to="/FormPlace">Agregar Lugar</Link></Button>
            <Button><Link spacing={2} to="/Likes">Likes</Link></Button>
          </Box>
          <Box>
            <Button><Link spacing={2} to="/SignUp">Sign up</Link></Button>
            <Button><Link spacing={2} to="/Login">Login</Link></Button>
            <IconButton sx={{ color:colors.iconUser }}>
              <AccountCircle sx={{ fontSize: 35 }} />
            </IconButton>
          </Box>

        </Box>
      </Card>
   
  );
}
