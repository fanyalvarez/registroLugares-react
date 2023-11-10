import {
  Card,
  CardContent,
  CardHeader,
  Input,
  Button,
  Stack,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { colors } from "../styleBase";

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const onSubmit = (event) => {
    event.reventDefault();
  };

  return (
    <div>
      {" "}
      <Card sx={{ mt: 5,backgroundColor: colors.brown, }}>
        <CardHeader title="Inicio de sesion" sx={{ textAlign: "center" }} />
        <CardContent>
          <form onSubmit={onSubmit}>
            <Stack spacing={2} margin={2}>
              <Input
                placeholder="User name"
                fullWidth
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                {...register("userName", { required: true })}
              />
              {errors.userName && <span>EL dato es requerido</span>}
              <Input
                placeholder="Nombre"
                fullWidth
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                {...register("nombre", { required: true })}
              />
              {errors.nombre && <span>EL dato es requerido</span>}

              <Input
                placeholder="Apellido"
                fullWidth
                type="text"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                {...register("apellido", { required: true })}
              />
              {errors.apellido && <span>EL dato es requerido</span>}

              <Input
                placeholder="Contrasena"
                fullWidth
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                {...register("password", { required: true })}
              />
              {errors.password && <span>EL dato es requerido</span>}

              <Input
                placeholder="Correo"
                fullWidth
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                {...register("email", { required: true })}
              />
              {errors.email && <span>EL dato es requerido</span>}

              <Button
                sx={{
                  backgroundColor: colors.pink,
                  m: 2,
                  color: "white",
                  "&:hover": { backgroundColor: colors.btnHover },
                }}
                variant="content"
                type="submit"
              >
                Guardar
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
