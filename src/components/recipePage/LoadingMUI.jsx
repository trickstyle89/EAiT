import React from 'react';
import { styled } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'transparent',
  zIndex: 9999,
});

const MyCustomLogo = () => {
  return (
    <img
      src="https://cdn.dribbble.com/users/1515327/screenshots/4328124/cooking_loader_2.gif"
      alt="logo"
    />
  );
};

const LoadingPage = ({ loadingLogo }) => {
  const logoToRender = loadingLogo ? loadingLogo : <CircularProgress />;
  return (
    <LoadingContainer>
      {logoToRender}
    </LoadingContainer>
  );
};

export { LoadingPage, MyCustomLogo };
