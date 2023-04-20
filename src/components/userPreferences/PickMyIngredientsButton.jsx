import { Box, Button } from "@mui/material";

function PickMyIngredientsButton() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        size="large"
        sx={{
          my: 2,
          color: "white",
          background: "black",
          fontSize: "large",
          fontFamily: "inherit",
          "&:hover": {
            background: "#717744",
            color: "white",
          },
        }}
        href="/ingredients"
        variant="contained"
      >
        Select Ingredients
      </Button>
    </div>
  );
}

export default PickMyIngredientsButton;
