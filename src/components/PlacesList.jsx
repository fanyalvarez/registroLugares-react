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
import { useNavigate } from "react-router-dom";
import { getAllList } from "../api/list.api";
import { colors } from "./styleBase";

export function PlacesList() {
  const [places, setPlaces] = useState([]); // guardar elementos en vez de usar una variable
  const navigate = useNavigate();

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
    <div>
      <TableContainer
        component={Paper}
        sx={{ mt: 5, backgroundColor: colors.brown }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                <TableCell sx={{ maxWidth: 300 }}>
                  {place.descripcion}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ maxWidth: 300 }}
                >{`${place.calle} #${place.numero} Col.${place.colonia} 
              ${place.ciudad} ${place.estado} C.P.${place.cp}`}</TableCell>
                <TableCell align="right">
                  <IconButton>
                    <ThumbUpOffAltIcon></ThumbUpOffAltIcon>
                  </IconButton>
                  {place.like}
                </TableCell>
                <TableCell align="right">
                  <IconButton>
                    <ThumbDownOffAltIcon></ThumbDownOffAltIcon>
                  </IconButton>
                  {place.dislike}
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
                    }}
                  >
                    Ir
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
