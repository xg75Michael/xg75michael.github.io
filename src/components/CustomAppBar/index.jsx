import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import logo from '@/assets/logo.svg';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  padding: '16px 32px',
}));

const StyledLogo = styled('img')({
  cursor: 'pointer',
  height: '60px',
  display: 'block',
});

const CustomAppBar = (props) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <AppBar
        position='fixed'
        enableColorOnDark
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          width: '100%',
        }}>
        <StyledToolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: 12,
            }}>
            <Link to='hero' smooth={true} duration={500} style={{ textDecoration: 'none', color: 'inherit' }}>
              <StyledLogo src={logo} alt='Logo' />
            </Link>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Link to='services' smooth={true} duration={500} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button variant='text' color='primary' size='medium'>
                  Services
                </Button>
              </Link>
              <Link to='aboutus' smooth={true} duration={500} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button variant='text' color='primary' size='medium'>
                  About Us
                </Button>
              </Link>
              <Link to='contact' smooth={true} duration={500} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button variant='text' color='primary' size='medium'>
                  Contact
                </Button>
              </Link>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <IconButton aria-label='Menu button' onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor='top'
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}>
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}>
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Link to='services' smooth={true} duration={500} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <MenuItem onClick={toggleDrawer(false)}>Services</MenuItem>
                </Link>
                <Link to='aboutus' smooth={true} duration={500} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <MenuItem onClick={toggleDrawer(false)}>About Us</MenuItem>
                </Link>
                <Link to='contact' smooth={true} duration={500} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <MenuItem onClick={toggleDrawer(false)}>Contact</MenuItem>
                </Link>
                <Divider sx={{ my: 3 }} />
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </AppBar>
    </motion.div>
  );
};

export default CustomAppBar;
