import { CardContent, CardMedia, Typography, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import ModeIcon from "@mui/icons-material/Mode";
import { useNavigate } from "react-router-dom";
import { colors } from "../styleBase";
import { getAllComments } from "../../api/list.api";

export function CommentsList({ filid }) {
  const [comments, setComments] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // console.log("comments cargados");
    async function loadComments() {
      const { data } = await getAllComments();
      setComments(data);
    }
    loadComments();
  }, []);

  const commentsFiltrados = comments.filter(
    (comment) => comment.idPLace == filid.id
  );

  return (
    <div>
      {commentsFiltrados.map((comment) => (
        <CardContent key={comment.id}>
          <Typography variant="h5" textAlign="left" sx={{ mb: 3 }}>
            {comment.name}
          </Typography>
          <Typography textAlign="left" sx={{ mb: 3 }}>
            {comment.comment}
          </Typography>
         { comment.img &&
          <CardMedia component="img" height="200" image={comment.img} />
         } 
        </CardContent>
      ))}
    </div>
  );
}
