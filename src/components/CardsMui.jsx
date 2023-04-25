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
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mr: 2,
          flexWrap: "wrap",
        }}
      >
        <Button onClick={handlePrint}>Print Recipe</Button>
      </Box>
      <Typography gutterBottom variant="h5" component="div" sx={{ ml: 7 }}>
        {recipe.name}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          ml: 3,
        }}
      >
        <Card
          sx={{
            minHeight: 300,
            maxWidth: 850,
            minWidth: 850,
            maxHeight: 300,
            display: "flex",
            justifyContent: "center",
            ml: 4,
          }}
        >
          <CardMedia component="img" alt={recipe.name} image={recipe.image} />
          <CardContent
            sx={{
              minWidth: 600,
              maxWidth: 600,
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
            }}
          >
            <Typography variant="subtitle1" color="text.secondary">
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
