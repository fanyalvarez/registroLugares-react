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
} from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { useNavigate, useParams } from "react-router-dom";
import { getAllList } from "../api/list.api";
import { colors } from "./styleBase";
import PropTypes from "prop-types";

export function PlacesList() {
  const navigate = useNavigate();
  const [places, setPlaces] = useState([]);

  // cargar los datos
  useEffect(() => {
    // console.log("pagina cargada");
    async function loadList() {
      const resp = await getAllList();
      setPlaces(resp.data); // guardar los datos desde usestate dentro de la peticion
      // console.log(resp.data);
    }
    loadList();
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
            </TableRow>
          </TableHead>
          <TableBody>
            {places.map((place) => (
              <TableRow key={place.id}>
                <TableCell component="th" scope="row">
                  {place.nombre}
                </TableCell>
                <TableCell sx={{ maxWidth: 300, minWidth: 200 }}>
                  {place.descripcion}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    maxWidth: 300,
                    minWidth: 150,
                  }}>{`${place.calle} #${place.numero} Col.${place.colonia} 
              ${place.ciudad} ${place.estado} C.P.${place.cp}`}</TableCell>

                <TableCell align="right" sx={{ minWidth: 60 }}>
                  <IconButton>
                    <ThumbUpOffAltIcon></ThumbUpOffAltIcon>
                  </IconButton>
                  {place.likes.like}
                </TableCell>

                <TableCell align="right" sx={{ minWidth: 60 }}>
                  <IconButton>
                    <ThumbDownOffAltIcon></ThumbDownOffAltIcon>
                  </IconButton>
                  {place.likes.dislike}
                </TableCell>
                <TableCell align="right">
                  <Button
                    sx={{
                      backgroundColor: colors.pink,
                      m: 2,
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
