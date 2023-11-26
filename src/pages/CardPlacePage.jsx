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
import { getPlaceById, getAllList } from "../api/list.api";

export function CardPlacePage() {
  const navigate = useNavigate();
  const params = useParams();
  const [place, setPlace] = useState({});
  // console.log(place)

  useEffect(() => {
    async function loadPlace() {
      const resp = await getPlaceById(params.id);
      setPlace(resp.data);
    }
    loadPlace();
  }, []);


  return (
    <Box className="center">
      <Box sx={{ maxWidth: 600 }}>
        <Card sx={{ p: 2, backgroundColor: colors.brown, my: 3 }}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                my: 2,
              }}>
              <Typography variant="h5">{place.nombre}</Typography>
              <Box
                sx={{
                  display: "flex",
                  mr: 1,
                  textAlign: "center",
                }}>
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
        <Card sx={{ p: 2, backgroundColor: colors.brown }} align="center">
          <CardHeader
            action={
              <IconButton
                sx={{
                  my: 3,
                  float: "right",
                  backgroundColor: colors.pink,
                  color: "white",
                  "&:hover": { backgroundColor: colors.btnHover },
                }}
                onClick={() => {
                  navigate("/FormComments");
                }}>
                <AddIcon sx={{ color: "whitesmoke" }}></AddIcon>
              </IconButton>
            }
            title="Comentarios"
          />
          <CommentsList></CommentsList>
        </Card>
      </Box>
    </Box>
  );
}

