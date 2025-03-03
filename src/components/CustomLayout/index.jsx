import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import CustomAppBar from '@/components/CustomAppBar';

const CustomLayout = () => {
  return (
    <div>
      <CustomAppBar></CustomAppBar>
      <Container>
        <Outlet />
      </Container>
      <footer style={{ textAlign: 'center', padding: '1rem', marginTop: '2rem', background: '#f1f1f1' }}>
        <Typography variant='body1'>Footer content</Typography>
      </footer>
    </div>
  );
};

export default CustomLayout;
