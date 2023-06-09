import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function SecondRecipeCard({ recipe }) {
  return (
    <>
      <Typography variant="subtitle1" sx={{ mt: 3.6 }}>You May Also Like:</Typography>
      <Card sx={{ width: 300, height: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={recipe.image}
            alt={recipe.name}
          />
          <CardContent>
            <Typography variant="h6" color="text.secondary">
              {recipe.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
