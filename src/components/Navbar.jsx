import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

import "../scss/homePage.scss";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  height: 70,
  backgroundColor: " #717744",
});

function Navbar() {
  return (
    <AppBar position="sticky">
      <Box>
        <StyledToolBar>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              EAiT
            </Typography>
          </Box>

          <Box>
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "flex",
                background: "#373d20",
                "&:hover": {
                  background: "white",
                  color: "black",
                },
              }}
              href="/preferences"
              variant="contained"
            >
              Get Started
            </Button>
          </Box>
        </StyledToolBar>
      </Box>
    </AppBar>
  );
}
export default Navbar;
