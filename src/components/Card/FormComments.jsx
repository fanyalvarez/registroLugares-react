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
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  postComment,
  deleteComment,
  upComment,
  getComment,
} from "../../api/list.api";
import { colors } from "../styleBase";

export function FormComments(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm(); // validar el form, submit, check errors,
  const navigate = useNavigate();
  const params = useParams();
  // const return = window.history.back();

  // hacer el post y verlo en el json
  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      // console.log(data)
      await upComment(params.id, data);
    } else {
      const respComment = await postComment(data);
      // console.log(respComment);
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
    <Card sx={{ mt: 5, backgroundColor: colors.purple }}>
      <CardHeader
        action={
          <IconButton
            sx={{ float: "right", color: colors.green }}
            onClick={() => {
              window.history.back();
              // navigate(`/CardPlacePage/${params.id}`);
            }}
          >
            <CloseIcon sx={{ color: colors.green }}></CloseIcon>
          </IconButton>
        }
        title="Formulario de comentario"
      />

      <CardContent>
        <form onSubmit={onSubmit}>
          <Stack spacing={2} margin={2}>
            <TextField
              fullWidth
              placeholder="Comentario"
              multiline
              rows={4}
              {...register("comment", { required: true })}
            />
            {errors.comment && <span>El comentario es requerido</span>}
            <p>https://picsum.photos/589</p>
            <Input
              placeholder="Imagen"
              fullWidth
              type="text"
              {...register("img", { required: true })}
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

            <Button
              sx={{
                backgroundColor: colors.green,
                m: 2,
                color: "white",
                "&:hover": { backgroundColor: colors.greenHover },
              }}
              variant="content"
              type="submit"
            >
              Guardar
            </Button>
          </Stack>
        </form>

        {/* eliminar comentario */}
        {params.id && (
          <Button
            sx={{
              backgroundColor: colors.green,
              m: 2,
              color: colors.white,
              "&:hover": { backgroundColor: colors.greenHover },
            }}
            variant="content"
            onClick={() => {
              onDelete(params.id);
            }}
          >
            Eliminar
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
