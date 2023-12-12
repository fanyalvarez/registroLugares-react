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
} from "@mui/material";
import { useForm, useFormState } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  postComment,
  deleteComment,
  upComment,
  getComment,
} from "../../api/list.api";
import { colors } from "../styleBase";

export function FormComments({ filid }) {
  const storedPlaceId = JSON.parse(localStorage.getItem("placeId"));
  // console.log(storedPlaceId,"local form");
  const params = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: { idPLace: storedPlaceId },
  }); // validar el form, submit, check errors,
  const navigate = useNavigate();

  // hacer el post y verlo en el json
  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await upComment(params.id, data);
    } else {
      const respComment = await postComment(data);
      window.alert("Tu comentario fue guardado");
    }
    window.history.back();
  });

  const onDelete = async () => {
    const accept = window.confirm("Estas seguro de eliminar?");
    if (accept) {
      await deleteComment(params.id);
      window.history.back();
      // navigate(`/CardPlacePage/${paramsID}`);
      // window.location.reload(true);
    }
  };

  useEffect(() => {
    async function loadComment() {
      if (params.id) {
        // console.log("data");
        const resp = await getComment(params.id);
        setValue("comment", resp.data.comment);
        setValue("img", resp.data.img);
        setValue("name", resp.data.name);
      }
    }
    loadComment();
  }, []);

  return (
    <Box className="center">
      <Card sx={{ mt: 5, backgroundColor: colors.brown, width: 400 }}>
        <CardHeader
          action={
            <IconButton
              sx={{
                float: "right",
                color: colors.pink,
                "&:hover": { backgroundColor: colors.btnHoverIcon },
              }}
              onClick={() => {
                window.history.back();
                // navigate(`/CardPlacePage/${params.id}`);
              }}>
              <CloseIcon sx={{ color: colors.pink }}></CloseIcon>
            </IconButton>
          }
          title="Formulario de comentario"
        />

        <CardContent>
          <form onSubmit={onSubmit}>
            <Stack spacing={2} margin={2}>
            {/* Comment */}
              <TextField
                fullWidth
                placeholder="Comentario"
                multiline
                rows={4}
                {...register("comment", { required: true })}
              />
              {errors.comment && <span>El comentario es requerido</span>}
               {/* Img */}
              <p>https://picsum.photos/589</p>
              <Input
                placeholder="Imagen"
                fullWidth
                type="text"
                {...register("img", { required: false })}
              />
              {errors.img && <span>La imagen es requerida</span>}
              {/* <Input fullWidth accept="image/*" type="file"  {...register("description", { required: true })} /> */}

              <Input
                placeholder="Nombre"
                fullWidth
                type="text"
                {...register("name", { required: true })}
              />
              {errors.img && <span>El nombre es requerido</span>}
              {/* <Input fullWidth accept="image/*" type="file"  {...register("description", { required: true })} /> */}
              <input {...register("idPLace")} type="hidden" />

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

          {/* eliminar comentario */}
          {params.id && (
            <Button
              sx={{
                backgroundColor: colors.pink,
                m: 2,
                color: colors.white,
                "&:hover": { backgroundColor: colors.btnHover },
              }}
              variant="content"
              onClick={() => {
                onDelete(params.id);
              }}>
              Eliminar
            </Button>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
