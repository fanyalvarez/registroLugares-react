import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Input,
  Button,
  TextField,
  Stack,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { colors } from "../styleBase";

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  return (
    <div>
      {" "}
      <Card sx={{ mt: 5,backgroundColor: colors.brown, }}>
        <CardHeader title="Inicio de sesion" sx={{ textAlign: "center" }} />
        <CardContent>
          <form action="">
            <Stack spacing={2} margin={2}>
              <Input
                placeholder="User name"
                fullWidth
                type="text"
                {...register("userName", { required: true })}
              />
              {errors.userName && <span>EL dato es requerido</span>}

              <Input
                placeholder="Contrasena"
                fullWidth
                type="text"
                {...register("password", { required: true })}
              />
              {errors.password && <span>EL dato es requerido</span>}

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
