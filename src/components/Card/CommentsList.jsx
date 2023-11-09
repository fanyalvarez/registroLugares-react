import { CardContent, CardMedia, Typography, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import ModeIcon from "@mui/icons-material/Mode";
import { useNavigate } from "react-router-dom";
import { colors } from "../styleBase";
import { getAllComments } from "../../api/list.api";

export function CommentsList() {
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // console.log("comments cargados");
    async function loadComments() {
      const resp = await getAllComments();
      setComments(resp.data);
      // console.log(resp);
    }
    loadComments();
  }, []);

  return (
    <div>
      {comments.map((comment) => (
        <CardContent key={comment.id}>
          <IconButton
            sx={{ float: "right", p: 0, mr: 3, color: colors.green }}
            onClick={() => {
              navigate(`/FormComments/${comment.id}`);
            }}
          >
            <ModeIcon sx={{ color: colors.green }}></ModeIcon>
          </IconButton>
          <Typography variant="h5" textAlign="left" sx={{ mb: 3 }}>
            {comment.name}
          </Typography>
          <Typography textAlign="left" sx={{ mb: 3 }}>
            {comment.comment}
          </Typography>
          <CardMedia component="img" height="200" image={comment.img} />
        </CardContent>
      ))}
    </div>
  );
}
