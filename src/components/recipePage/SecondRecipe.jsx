import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function SecondRecipeCard({ recipe }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={recipe.image}
          alt={recipe.name}
        />
        <CardContent>
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
      </CardActionArea>
    </Card>
  );
}