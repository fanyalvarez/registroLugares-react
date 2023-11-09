import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import { Typography, Button, } from "@mui/material";

export function Navigation() {

  return (
    <div>
      <Card sx={{ p: 2 }}>
        
        <Typography variant="h3">Lugares Seguros</Typography>
        <Typography variant="h3">Barra de navegacion</Typography>

        <div sx={{ display: "flex", alignItems: "center" }} spacing={2}>
          <Button><Link spacing={2} to="/ListPage">Lista de lugares</Link></Button>
          <Button><Link spacing={2} to="/Login">Login</Link></Button>
          <Button><Link spacing={2} to="/SignUp">Sign up</Link></Button>
          <Link spacing={2} to="/LandinPage">
            <img src='/logo.png' alt='Logo' width={50} height={50} />
          </Link> 
        </div>

      </Card>
    </div>
  );
}
