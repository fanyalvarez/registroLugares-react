import { useForm } from "react-hook-form";
import {
  Card,
  Box,
  CardContent,
  CardHeader,
  IconButton,
  Input,
  Button,
  TextField,
  CardMedia,
  Stack,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { colors } from "../styleBase";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../api/list.api";

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUsers() {
      const respUsers = (await getAllUsers()).data;
      setUsers(respUsers);
    }
    loadUsers();
  }, []);

  const onSubmit = handleSubmit((data) => {
    const findIndex = users.findIndex(
      (element) => element.userName === data.userName
    );
    if (findIndex === -1) {
      window.alert("los datos ingresados son incorrectos");
    } else if (users[findIndex].password !== data.password) {
      window.alert("los datos ingresados son incorrectos");
    } else {
      window.alert("bienvenido");
      navigate(`/`);
    }
  });

  return (
    <div className="center">
      <Card sx={{ mt: 5, backgroundColor: colors.brown, width: 620 }}>
        <CardHeader title="Inicio de sesion" sx={{ textAlign: "center" }} />

        <Box sx={{ display: "flex", mr: 2 }}>
          <CardContent sx={{ minWidth: 300, minHeight: 310 }}>
            <form onSubmit={onSubmit} sx={{ mt: 5 }}>
              <Stack spacing={2} margin={2}>
                <Input
                  placeholder="User name"
                  fullWidth
                  type="text"
                  {...register("userName", { required: true })}
                />
                {errors.nombre && <span>El dato es requerido</span>}

                <Input
                  placeholder="Contrasena"
                  fullWidth
                  type="text"
                  {...register("password", { required: true })}
                />
                {errors.nombre && <span>El dato es requerido</span>}
                <Button
                  sx={{
                    backgroundColor: colors.pink,
                    m: 2,
                    color: "white",
                    "&:hover": { backgroundColor: colors.btnHover },
                  }}
                  variant="content"
                  type="submit">
                  Guardar
                </Button>
              </Stack>
            </form>
          </CardContent>
          <CardMedia
            component="img"
            height="310"
            image="https://c0.wallpaperflare.com/preview/677/314/544/interior-tech-technology-coffee.jpg"
            alt="green iguana"
          />
        </Box>
      </Card>
    </div>
  );
}
