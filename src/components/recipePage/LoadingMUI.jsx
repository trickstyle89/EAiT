import React from 'react';
import { styled } from '@mui/material/styles';
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

const PreparingText = styled('h1')({
  fontFamily: 'monospace',
  fontWeight: 'bold',
  fontSize: '3rem',
  color: '#5E671B',
  margin: '0 1rem',
});

const ImageContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: '1rem',
});

const Container = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});

const MyCustomLogo = () => {
  return (
    <>
      <Container>
        <PreparingText>Generating Recipe...</PreparingText>
        <ImageContainer>
          <img
            src="https://www.icegif.com/wp-content/uploads/chef-pusheen-icegif.gif"
            alt="logo"
            height={"250rem"}
            width={"350rem"}
          />
        </ImageContainer>
      </Container>
    </>
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
