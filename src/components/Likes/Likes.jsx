import { useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { colors } from "../styleBase";
import { getLikes } from "../../api/list.api";

export function Likes() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const [isDislike, setIsDislike] = useState(false);

  const onLikes = () => {
    setIsLike((current) => !current);
    isLike === true ? setLikes(likes - 1) : setLikes(likes + 1);
  };
  const onDislikes = () => {
    setIsDislike((current) => !current);
    isDislike === true ? setDislikes(dislikes - 1) : setDislikes(dislikes + 1);
  };



  useEffect(() => {// cargar los likes
    async function loadLikes() {
      const resp = await getLikes();
      setLikes(resp.data.like);
      setDislikes(resp.data.dislike);
      
    }
    loadLikes();
  }, []);

  // console.log(likes);
  // console.log(dislikes);

  return (
    <div className="center">
      
      <Box
        align="right"
        sx={{
          minWidth: 60,
          textAlign: "center",
        }}>
        <IconButton onClick={onLikes}>
          {isLike ? (
            <ThumbUpIcon sx={{ color: colors.pink }} />
          ) : (
            <ThumbUpOffAltIcon />
          )}
        </IconButton>
        {likes}
      </Box>

      <Box
        align="right"
        sx={{
          minWidth: 60,
          textAlign: "center",
        }}>
        <IconButton onClick={onDislikes}>
          {isDislike ? (
            <ThumbDownAltIcon sx={{ color: colors.pink }} />
          ) : (
            <ThumbDownOffAltIcon />
          )}
        </IconButton>
        {dislikes}
      </Box>
    </div>
  );
}
