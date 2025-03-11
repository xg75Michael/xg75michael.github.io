import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import CustomAppBar from '@/components/CustomAppBar';

const CustomLayout = () => {
  return (
    <div>
      <CustomAppBar></CustomAppBar>
      <Outlet />
      <footer style={{ textAlign: 'center', padding: '2rem', background: '#f1f1f1' }}>
        <Typography variant='body1'>Footer content</Typography>
      </footer>
    </div>
  );
};

export default CustomLayout;
