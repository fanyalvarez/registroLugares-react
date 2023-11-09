import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  CardHeader,
} from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import AddIcon from "@mui/icons-material/Add";
import { useState, useEffect } from "react";
import { CommentsList } from "../components/Card/CommentsList";
import { colors } from "../components/styleBase";
import { getPlace, getAllList } from "../api/list.api";

export function CardPlacePage() {
  const navigate = useNavigate();
  const params = useParams();
  const [place, setPlace] = useState({});

  const paramsArray = [];
  paramsArray.push(params)




  useEffect(() => {
    async function loadPlace() {
      const resp = await getPlace(params.id);
      // console.log(resp)
      setPlace(resp.data);
    }
    loadPlace();
  }, []);

  return (
    <Box sx={{ maxWidth: 600 }}>
      <Card sx={{ p: 2, backgroundColor: colors.purple, my: 3 }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              my: 2,
            }}
          >
            <Typography variant="h5">{place.nombre}</Typography>
            <Box
              sx={{
                display: "flex",
                mr: 1,
                textAlign: "center",
              }}
            >
              <ThumbUpOffAltIcon />
              <Typography sx={{ mx: 1 }}>{place.like}</Typography>
            </Box>
          </Box>
          <Typography paragraph align="center">
            {`${place.calle} #${place.numero} Col.${place.colonia} 
              ${place.ciudad} ${place.estado} C.P.${place.cp}`}
          </Typography>

          <Typography paragraph align="center">
            {place.descripcion}
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ p: 2, backgroundColor: colors.purple }} align="center">
        <CardHeader
          action={
            <IconButton
              sx={{
                my: 3,
                float: "right",
                backgroundColor: colors.green,
                color: "white",
                "&:hover": { backgroundColor: colors.greenHover },
              }}
              onClick={() => {
                navigate("/FormComments");
              }}
            >
              <AddIcon sx={{ color: "whitesmoke" }}></AddIcon>
            </IconButton>
          }
          title="Comentarios"
        />
        <CommentsList></CommentsList>
      </Card>
    </Box>
  );
}