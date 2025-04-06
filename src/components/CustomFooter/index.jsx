import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={(theme) => ({
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Responsive layout
        justifyContent: 'space-between',
        alignItems: 'center',
        p: {
          xs: 4,
          md: theme.spacing(4, 12),
          xl: theme.spacing(8, 24),
        },
        background: '#f1f1f1',
        textAlign: { xs: 'center', md: 'left' },
      })}>
      <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
        <Typography variant='body1'>TFL Homes</Typography>
        <Typography variant='body2'>1234 Street Name, City, State, 12345</Typography>
        <Typography variant='body2'>Email: info@tflhomes.com</Typography>
        <Typography variant='body2'>Phone: (123) 456-7890</Typography>
      </Box>
      <Box sx={{ mt: { xs: 4, md: 0 } }}>
        <IconButton
          component='a'
          href='https://www.facebook.com/yourprofile'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Facebook'
          sx={{
            '&:hover': {
              color: '#4267B2', // Facebook blue
            },
          }}>
          <Facebook />
        </IconButton>
        <IconButton
          component='a'
          href='https://www.twitter.com/yourprofile'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Twitter'
          sx={{
            '&:hover': {
              color: '#1DA1F2', // Twitter blue
            },
          }}>
          <Twitter />
        </IconButton>
        <IconButton
          component='a'
          href='https://www.instagram.com/yourprofile'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Instagram'
          sx={{
            '&:hover': {
              color: '#E1306C', // Instagram pink
            },
          }}>
          <Instagram />
        </IconButton>
        <IconButton
          component='a'
          href='https://www.linkedin.com/yourprofile'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
          sx={{
            '&:hover': {
              color: '#0077B5', // LinkedIn blue
            },
          }}>
          <LinkedIn />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
