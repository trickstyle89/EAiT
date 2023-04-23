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
        href="/ingredients"
        variant="contained"
        color="primary"
        sx={{
          my: 2,
          mb: 5,
          fontSize: "large",
          fontFamily: "inherit",
          "&:hover": {
            background: "#a6ad70",
            color: "white",
          },
        }}
      >
        Select Ingredients
      </Button>
    </div>
  );
}

export default PickMyIngredientsButton;
