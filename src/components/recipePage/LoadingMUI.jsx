import React from 'react';
import { styled } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const LoadingPage = () => {
  return (
    <LoadingContainer>
      <CircularProgress />
    </LoadingContainer>
  );
};

export default LoadingPage;
