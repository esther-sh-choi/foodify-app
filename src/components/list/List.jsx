import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import "./list.scss";

export default function List() {
  return (
    <Card sx={{ display: "flex", height: 100 }} className="card">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            EatList Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Type of cuisine | Location
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
