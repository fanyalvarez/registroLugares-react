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
import { useForm } from "react-hook-form";
import { postPlace, deletePlace, upPlace, getPlaceById } from "../../api/list.api";
import { useEffect } from "react";

export function FormPlace() {
  const navigate = useNavigate();
  const {
    register, //get info
    handleSubmit, //send info after click
    formState: { errors }, //cheack errors
    setValue, // get values on form
  } = useForm({
    defaultValues: {
      like: 0,
      dislike: 0,
    },
  }); // more validation use yup zod

  // send data of place up and create
  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      const actplace = await upPlace(params.id, data);
    } else {
      const respData = await postPlace(data);
    }
    navigate(`/placesListUser/`);
  });

  // get place by id
  useEffect(() => {
    async function loadPLace() {
      if (params.id) {
        const respPlace = await getPlaceById(params.id);
        setValue("nombre", respPlace.data.nombre);
        setValue("descripcion", respPlace.data.descripcion);
        setValue("calle", respPlace.data.calle);
        setValue("numero", respPlace.data.numero);
        setValue("colonia", respPlace.data.colonia);
        setValue("ciudad", respPlace.data.ciudad);
        setValue("estado", respPlace.data.estado);
        setValue("cp", respPlace.data.cp);
        setValue("dislike",respPlace.data.dislike);
        setValue("like",respPlace.data.like);
        setValue("stateLike",respPlace.data.stateLike);
        setValue("stateDislike",respPlace.data.stateDislike);
      }
    }
    loadPLace();
  }, []);
  
  //delete place
  const params = useParams();

  return (
    <Box className="center">
      <Card sx={{ mt: 5, backgroundColor: colors.brown, width: 550 }}>
        <CardHeader
          action={
            <IconButton
              sx={{
                float: "right",
                color: colors.pink,
                "&:hover": { backgroundColor: colors.btnHoverIcon },
              }}
              onClick={() => {
                navigate(`/placesListUser/`);
              }}>
              <CloseIcon sx={{ color: colors.pink }}></CloseIcon>
            </IconButton>
          }
          title="Formulario de Lugar"
        />
        <CardContent>
          <form onSubmit={onSubmit}>
            <Stack spacing={2} margin={2}>
              <Input
                placeholder="Nombre del lugar"
                {...register("nombre", { required: true })}></Input>

              <TextField
                multiline
                rows={4}
                placeholder="Descripcion"
                {...register("descripcion", { required: true })}></TextField>
              <h3>Direccion</h3>
              <Grid container direction="row" justifyContent="center">
                <Stack spacing={2} marginRight={2}>
                  <Input
                    placeholder="Calle"
                    {...register("calle", { required: true })}></Input>

                  <Input
                    placeholder="Numero"
                    {...register("numero", { required: true })}></Input>

                  <Input
                    placeholder="Colonia"
                    {...register("colonia", { required: true })}></Input>
                </Stack>

                <Stack spacing={2} marginLeft={2}>
                  <Input
                    placeholder="Ciudad"
                    {...register("ciudad", { required: true })}></Input>

                  <Input
                    placeholder="Estado"
                    {...register("estado", { required: true })}></Input>

                  <Input
                    placeholder="CP"
                    {...register("cp", { required: true })}></Input>
                </Stack>
              </Grid>
            </Stack>
            <Button
              sx={{
                backgroundColor: colors.pink,
                marginTop: 3,
                width: 250,
                color: "white",
                textAlign: "center",
                "&:hover": { backgroundColor: colors.btnHover },
              }}
              variant="content"
              type="submit">
              Guardar
            </Button>
          </form>

          {params.id && (
            <Button
              sx={{
                backgroundColor: colors.pink,
                m: 2,
                color: "white",
                "&:hover": { backgroundColor: colors.btnHover },
              }}
              variant="content"
              type="submit"
              onClick={async () => {
                const confirm = window.confirm("Estas seguro?");
                if (confirm) {
                  await deletePlace(params.id);
                  navigate(`/placesListUser/`);
                }
              }}>
              ELiminar
            </Button>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

{
  /* {errors.nombre && <span>El dato es requerido</span>}
            {errors.descripcion && <span>El dato es requerido</span>}
            {errors.calle && <span>El dato es requerido</span>}
            {errors.numero && <span>El dato es requerido</span>}
            {errors.colonia && <span>El dato es requerido</span>}
            {errors.ciudad && <span>El dato es requerido</span>}
            {errors.ciudad && <span>El dato es requerido</span>} */
}
