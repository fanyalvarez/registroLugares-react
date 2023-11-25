import CloseIcon from "@mui/icons-material/Close";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Input,
  Button,
  TextField,
  Stack,
  Box,
  Grid,
} from "@mui/material";
import { colors } from "../styleBase";
import { useNavigate, useParams } from "react-router-dom";

export function FormPlace() {
  const navigate = useNavigate();

  return (
    <Box className="center">
      <Card sx={{ mt: 5, backgroundColor: colors.brown, width: 600 }}>
        <CardHeader
          action={
            <IconButton
              sx={{
                float: "right",
                color: colors.pink,
                "&:hover": { backgroundColor: colors.btnHoverIcon },
              }}
              onClick={() => {
                navigate(`/ListPage/`);
              }}>
              <CloseIcon sx={{ color: colors.pink }}></CloseIcon>
            </IconButton>
          }
          title="Formulario de Lugar"
        />
        <CardContent>
          <form>
            <Stack spacing={2} margin={2}>
              <Input placeholder="Nombre del lugar"></Input>
              <TextField
                multiline
                rows={4}
                placeholder="Descripcion"></TextField>
              <br />
              <h3>Direccion</h3>

              <Grid container justifyContent="space-around">
                <Stack spacing={2} margin={1}>
                  <Input placeholder="Estado" ></Input>
                  <Input placeholder="Ciudad"></Input>
                  <Input placeholder="Colonia"></Input>
                </Stack>

                <Stack spacing={2} margin={1}>
                  <Input placeholder="Calle"></Input>
                  <Input placeholder="Numero"></Input>
                  <Input placeholder="CP"></Input>
                </Stack>
              </Grid>
              <br />
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
      </Card>
    </Box>
  );
}
