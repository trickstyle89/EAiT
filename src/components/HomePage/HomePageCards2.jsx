import * as React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function HomePageCard(props) {
  return (
    <div>
      <Card sx={{ maxWidth: "400px" }}>
        <CardMedia
          component="img"
          height="170rem"
          alt={props.alt}
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
