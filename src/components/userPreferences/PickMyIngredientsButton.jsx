import { Box, Button } from "@mui/material";

function PickMyIngredientsButton() {
  return (
    <Box>
      <Button
        sx={{
          my: 2,
          color: "white",
          display: "flex",
          background: "black",
          "&:hover": {
            background: "white",
            color: "black",
          },
        }}
        href="/ingredients"
        variant="contained"
      >
        Select Ingredients
      </Button>
    </Box>
  );
}

export default PickMyIngredientsButton;
