import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({ recipe }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={recipe.name}
        height="140"
        image={recipe.image}
      />
     <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {recipe.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
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
  );
}






