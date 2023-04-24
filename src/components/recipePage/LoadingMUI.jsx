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
    <>
      <h1>hi</h1>
      <br />
      <img
        src="https://www.icegif.com/wp-content/uploads/chef-pusheen-icegif.gif"
        //https://i.pinimg.com/originals/4e/e9/c7/4ee9c7420c4231bc38ababc9c088bf93.gif
        //https://www.icegif.com/wp-content/uploads/chef-pusheen-icegif.gif
        //https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif
        alt="logo"
        height={"250rem"}
        width={"350rem"}
      />
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
