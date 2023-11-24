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
    <div className="center">
      <Card sx={{ mt: 5, backgroundColor: colors.brown, width: 620 }}>
        <CardHeader title="Inicio de sesion" sx={{ textAlign: "center" }} />

        <Box sx={{ display: "flex", mr: 2 }}>
          <CardContent sx={{ minWidth: 300, minHeight: 310 }}>
            <form action="" sx={{ mt: 5 }}>
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
