import * as React from "react";
import Card from "@mui/material/Card";
// import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function ImgMediaCard({ recipe }) {

  return (
    <>
      <Typography gutterBottom variant="h5" component="div" sx={{ ml: 4, mt: 2 }}>
        {recipe.name}
      </Typography>
      <Card sx={{ ml: 4, height: 300, display: "flex" }}>
        <CardMedia
          component="img" sx={{ maxWidth: 350 }} alt={recipe.name} image={recipe.image}
        />
        <CardContent>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2, fontSize: "1.1rem" }}>
            Cooking time: {recipe.cookingTime}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
            {recipe.nutrition.map((nutrient, index) => (
              <Box key={index} sx={{ mb: 2, fontSize: "1.1rem" }}>
                {nutrient}
              </Box>
            ))}
          </Typography>
        </CardContent>
      </Card>
    </>
  );

}
