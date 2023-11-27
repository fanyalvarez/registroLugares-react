import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { autocompleteClasses } from "@mui/material";

export function LandingPage() {
  return (
    <Box className="center">
      <Card sx={{ display: "flex", width: 1000, marginTop: 8 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            padding: 3,
          }}>
          <Typography variant="h1">Welcome</Typography>
          <CardContent>
            <Typography variant="h2"> registro</Typography>
            <Typography variant="h2">de lugares </Typography>
          </CardContent>
        </Box>
        <ImageList
          sx={{ width: 800, height: autocompleteClasses, margin: 0 }}
          cols={2}
          rowHeight={350}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Card>
    </Box>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGNhZmV8ZW58MHx8MHx8fDA%3D",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1521161908453-1cacd0215437?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW38MHx8fHx8",
    title: "Coffee",
  },

  {
    img: "https://i.pinimg.com/originals/85/72/56/857256ec2baff725d46700ca64ca8bfe.jpg",
    title: "Honey",
  },
];
