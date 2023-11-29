import { useForm } from "react-hook-form";
import {
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Input,
  Button,
  Stack,
  Box,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { colors } from "../styleBase";
import { postUser } from "../../api/list.api";

export function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const sendUser = await postUser(data);
    // console.log(sendUser.status);
    if (sendUser.status === 201) {
      window.alert("Tu usuario fue guardado");
      navigate(`/Login/`);
    } else {
      window.alert("Ha ocurrido un error, intentar nuevamente");
    }
  });

  return (
    <div className="center">
      <Card sx={{ mt: 5, backgroundColor: colors.brown, width: 620 }}>
        <CardHeader title="Registro" sx={{ textAlign: "center" }} />
        <Box sx={{ display: "flex", ml: 2 }}>
          <CardMedia
            component="img"
            height="310"
            image="https://c0.wallpaperflare.com/preview/677/314/544/interior-tech-technology-coffee.jpg"
            alt="green iguana"
          />
          <CardContent sx={{ minWidth: 300, minHeight: 310 }}>
            <form onSubmit={onSubmit}>
              <Stack spacing={3} margin={2}>
                <Input
                  placeholder="User name"
                  {...register("userName", { required: true })}
                />
                {errors.userName && <span>EL dato es requerido</span>}

                <Input
                  placeholder="Nombre"
                  {...register("name", { required: true })}
                />
                {errors.name && <span>EL dato es requerido</span>}

                <Input
                  placeholder="Apellido"
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && <span>EL dato es requerido</span>}

                <Input
                  placeholder="Contrasena"
                  {...register("password", { required: true })}
                />
                {errors.password && <span>EL dato es requerido</span>}

                <Button
                  sx={{
                    backgroundColor: colors.pink,
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
        </Box>
      </Card>
    </div>
  );
}

{
  /* <Input
                  placeholder="Correo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  {...register("email", { required: true })}
                />
                {errors.email && <span>EL dato es requerido</span>} */
}
