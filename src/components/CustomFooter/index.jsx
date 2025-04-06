import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Responsive layout
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: { xs: 2, md: 4 }, // Consistent padding for large and small screens
        background: '#f1f1f1',
        textAlign: { xs: 'center', md: 'left' },
      }}>
      <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
        <Typography variant='body1'>TFL Homes</Typography>
        <Typography variant='body2'>1234 Street Name, City, State, 12345</Typography>
        <Typography variant='body2'>Email: info@tflhomes.com</Typography>
        <Typography variant='body2'>Phone: (123) 456-7890</Typography>
      </Box>
      <Box sx={{ mt: { xs: 2, md: 0 } }}>
        <IconButton
          component='a'
          href='https://www.facebook.com/yourprofile'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Facebook'>
          <Facebook />
        </IconButton>
        <IconButton
          component='a'
          href='https://www.twitter.com/yourprofile'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Twitter'>
          <Twitter />
        </IconButton>
        <IconButton
          component='a'
          href='https://www.instagram.com/yourprofile'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Instagram'>
          <Instagram />
        </IconButton>
        <IconButton
          component='a'
          href='https://www.linkedin.com/yourprofile'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'>
          <LinkedIn />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
