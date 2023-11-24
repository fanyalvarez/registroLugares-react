import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import { Typography, Button, } from "@mui/material";

export function Navigation() {

  return (
    <div>
      <Card sx={{ p: 2 }}>
        
        <Typography variant="h3">Registro de Lugares</Typography>


        <div sx={{ display: "flex", alignItems: "center" }} spacing={2}>
          <Button><Link spacing={2} to="/ListPage">Lista de lugares</Link></Button>
          <Button><Link spacing={2} to="/Login">Login</Link></Button>
          <Button><Link spacing={2} to="/SignUp">Sign up</Link></Button>
          <Button><Link spacing={2} to="/Likes">Likes</Link></Button>
          <Link spacing={2} to="/">
            <img src='/logo.png' alt='Logo' width={50} height={50} />
          </Link> 
        </div>

      </Card>
    </div>
  );
}
