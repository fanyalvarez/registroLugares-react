import { useEffect, useState } from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  IconButton,
  TableRow,
  Button,
  Box,
} from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import EditIcon from "@mui/icons-material/Edit";

import { useNavigate } from "react-router-dom";
import { getAllList, getLikesById } from "../../api/list.api";
import { colors } from "../styleBase";

export function PlacesList() {
  const navigate = useNavigate();

  // ----consulta de lugares-----
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    // console.log("pagina cargada");
    async function loadList() {
      const respList = await getAllList();
      setPlaces(respList.data);
      // console.log(places)
    }
    loadList();
  }, []);

  // ----likes-----
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const [isDislike, setIsDislike] = useState(false);
  const [prueba, setPrueba] = useState(0);

  const onLikes = () => {
    setIsLike((current) => !current);
    isLike === true ? setLikes(likes - 1) : setLikes(likes + 1);
  };
  const onDislikes = () => {
    setIsDislike((current) => !current);
    isDislike === true ? setDislikes(dislikes - 1) : setDislikes(dislikes + 1);
  };

  // ----cargar likes ----
  useEffect(() => {
    async function loadLikes() {
      const resp = await getLikesById(1);
      setLikes(resp.data.like);
      setDislikes(resp.data.dislike);
      // console.log(likes);
      // console.log(dislikes);
    }
    loadLikes();
  }, []);

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ mt: 5, backgroundColor: colors.brown, maxWidth: 1200 }}>
        <Table sx={{}} aria-label="simple table">
          <TableHead sx={{ backgroundColor: colors.deepBrown }}>
            <TableRow>
              <TableCell sx={{ color: colors.white }}>Nombre</TableCell>
              <TableCell sx={{ color: colors.white }} align="center">
                Descripcion
              </TableCell>
              <TableCell sx={{ color: colors.white }} align="center">
                Direccion
              </TableCell>
              <TableCell sx={{ color: colors.white }} align="center">
                Like
              </TableCell>
              <TableCell sx={{ color: colors.white }} align="center">
                Disike
              </TableCell>
              <TableCell sx={{ color: colors.white }} align="center">
                Ver
              </TableCell>
              <TableCell sx={{ color: colors.white }} align="center">
                Edit
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {places.map((place) => (
              <TableRow key={place.id}>
                {/* nombre */}
                <TableCell component="th" scope="row">
                  {place.nombre}
                </TableCell>
                {/* descrip */}
                <TableCell
                  sx={{ maxWidth: 300, minWidth: 200, textAlign: "center" }}>
                  {place.descripcion}
                </TableCell>
                {/* direcc */}
                <TableCell
                  align="center"
                  sx={{
                    maxWidth: 300,
                    minWidth: 150,
                  }}>
                  {`${place.calle} #${place.numero} Col.${place.colonia} 
              ${place.ciudad} ${place.estado} C.P.${place.cp}`}
                </TableCell>
                {/* likes */}
                <TableCell sx={{ minWidth: 60 }}>
                  <IconButton onClick={onLikes}>
                    {isLike ? (
                      <ThumbUpIcon sx={{ color: colors.pink }} />
                    ) : (
                      <ThumbUpOffAltIcon />
                    )}
                  </IconButton>
                  {likes}
  
                </TableCell>
                {/* dislikes */}
                <TableCell sx={{ minWidth: 60 }}>
                  <IconButton onClick={onDislikes}>
                    {isDislike ? (
                      <ThumbDownAltIcon sx={{ color: colors.pink }} />
                    ) : (
                      <ThumbDownOffAltIcon />
                    )}
                  </IconButton>
                  {dislikes}
                </TableCell>
                {/* ir */}
                <TableCell>
                  <Button
                    sx={{
                      backgroundColor: colors.pink,
                      color: colors.white,
                      "&:hover": { backgroundColor: colors.btnHover },
                    }}
                    size="small"
                    variant="contained"
                    onClick={() => {
                      navigate(`/CardPlacePage/${place.id}`);
                    }}>
                    Ir
                  </Button>
                </TableCell>
                {/* edit */}
                <TableCell>
                  <IconButton
                    onClick={() => {
                      navigate(`/FormPlace/${place.id}`);
                    }}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
