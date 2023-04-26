import * as React from "react";
import { useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

import "../scss/homePage.scss";

import Logo from "../css/logo.png";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  height: 70,
  backgroundColor: " primary",
});

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isRecipePage = location.pathname === "/recipes";
  const isIngredientsPage = location.pathname === "/ingredients";
  const handleButtonClick = () => {
    window.localStorage.clear();
  };

  return (
    <AppBar position="sticky">
      <Box>
        <StyledToolBar>
          <Box
            sx={{
              display: "flex",
              alignContent: "flex-start",
            }}
          >
            <a href="/">
              <img
                src={Logo}
                alt="logo"
                style={{
                  marginTop: "1.1rem",
                  width: "10rem",
                  height: "auto",
                }}
              />
            </a>
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
            ></Typography>
          </Box>

          <Box>
            {(isRecipePage || isIngredientsPage) && (
              <Button
                sx={{
                  my: 2,
                  mr: 2,
                  color: "white",
                  background: "#5E671B",
                  "&:hover": {
                    background: "white",
                    color: "black",
                  },
                }}
                href={"/preferences"}
                variant="contained"
              >
                Edit Preferences
              </Button>
            )}
            {isRecipePage && (
              <Button
                sx={{
                  my: 2,
                  mr: 2,
                  color: "white",
                  background: "#5E671B",
                  "&:hover": {
                    background: "white",
                    color: "black",
                  },
                }}
                href={"/ingredients"}
                variant="contained"
              >
                Edit Ingredients
              </Button>
            )}
            <Button
              sx={{
                my: 2,
                color: "white",
                background: "#5E671B",
                "&:hover": {
                  background: "white",
                  color: "black",
                },
              }}
              href={"/preferences"}
              variant="contained"
              onClick={handleButtonClick}
            >
              {isHomePage ? "Get Started" : "Start Over"}
            </Button>
          </Box>
        </StyledToolBar>
      </Box>
    </AppBar>
  );
}
