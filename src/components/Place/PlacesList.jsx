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
import { getAllList, uplikes } from "../../api/list.api";
import { colors } from "../styleBase";

export function PlacesList() {
  const navigate = useNavigate();

  // ----consulta de lugares-----
  const [places, setPlaces] = useState([]);
  const [isDislike, setIsDislike] = useState(false);
  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    // console.log("pagina cargada");
    async function loadList() {
      const respList = await getAllList();
      setPlaces(respList.data);
      // console.log(places)
    }
    loadList();
  }, [isDislike, isLike]);

  // ----likes-----
  const addLike = async (id, originLike) => {
    // console.log(id);
    // console.log(originLike);
    setIsLike((current) => !current);
    isLike === true
      ? await uplikes(id, { like: originLike - 1 })
      : await uplikes(id, { like: originLike + 1 });
  };

  const addDislike = async (id, originLike) => {
    setIsDislike((current) => !current);
    isDislike === true
      ? await uplikes(id, { dislike: originLike - 1 })
      : await uplikes(id, { dislike: originLike + 1 });
  };

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
                  <IconButton onClick={() => addLike(place.id, place.like)}>
                    {isLike && place.id ? (
                      <ThumbUpIcon sx={{ color: colors.pink }} />
                    ) : (
                      <ThumbUpOffAltIcon />
                    )}
                  </IconButton>
                  {place.like}
                </TableCell>
                {/* dislikes */}
                <TableCell sx={{ minWidth: 60 }}>
                  <IconButton
                    onClick={() => addDislike(place.id, place.dislike)}>
                    {isDislike ? (
                      <ThumbDownAltIcon sx={{ color: colors.pink }} />
                    ) : (
                      <ThumbDownOffAltIcon />
                    )}
                  </IconButton>
                  {place.dislike}
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
