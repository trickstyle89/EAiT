import * as React from "react";
import Card from "@mui/material/Card";
// import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";

export default function ImgMediaCard({ recipe }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mr: 2 }}>
        <Button onClick={handlePrint}>Print Recipe</Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card
          sx={{
            maxWidth: "95%",
            maxHeight: 300,
            display: "flex",
            justifyContent: "center",
            m: 4,
          }}
        >
          <CardMedia component="img" alt={recipe.name} image={recipe.image} />
          <CardContent sx={{ minWidth: 800 }}>
            <Typography gutterBottom variant="h4" component="div">
              {recipe.name}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Cooking time: {recipe.cookingTime} <br />
              {recipe.nutrition.map((nutrient, index) => (
                <React.Fragment key={index}>
                  <br />
                  {nutrient}
                </React.Fragment>
              ))}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
