// filepath: /Users/xiangyangao/workspace/github/xg75michael.github.io/src/components/CustomLayout/index.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomAppBar from '@/components/CustomAppBar';
import BackToTop from '@/components/BackToTop';
import Footer from '@/components/CustomFooter';

const CustomLayout = () => {
  return (
    <div>
      <CustomAppBar />
      <Outlet />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default CustomLayout;
