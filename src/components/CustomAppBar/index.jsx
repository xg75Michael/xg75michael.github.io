import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
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
  borderRadius: '0 0 12px 12px',
  backdropFilter: 'blur(4px)',
  padding: theme.spacing(1, 12), // Default padding
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1, 4), // Smaller padding for small screens
    backdropFilter: 'none',
  },
  [theme.breakpoints.up('xl')]: {
    padding: theme.spacing(1, 24), // Larger padding for extra-large screens
  },
}));

const StyledLogo = styled('img')(({ theme }) => ({
  cursor: 'pointer',
  height: '160px',
  display: 'block',
  [theme.breakpoints.down('sm')]: {
    height: '60px', // Smaller logo for small screens
  },
}));

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
          width: '100%',
        }}>
        <StyledToolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Link to='hero' smooth={true} duration={500} style={{ textDecoration: 'none', color: 'inherit' }}>
              <StyledLogo src={logo} alt='Logo' />
            </Link>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
              <Link to='services' smooth={true} duration={500} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button variant='text' color='primary' size='medium' sx={{ fontWeight: 'bold' }}>
                  Services
                </Button>
              </Link>
              <Link to='gallery' smooth={true} duration={500} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button variant='text' color='primary' size='medium' sx={{ fontWeight: 'bold' }}>
                  Gallery
                </Button>
              </Link>
              <Link to='aboutus' smooth={true} duration={500} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button variant='text' color='primary' size='medium' sx={{ fontWeight: 'bold' }}>
                  About Us
                </Button>
              </Link>
              <Link to='contact' smooth={true} duration={500} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button variant='text' color='primary' size='medium' sx={{ fontWeight: 'bold' }}>
                  Contact
                </Button>
              </Link>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'flex', sm: 'none' }, gap: 1 }}>
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
              <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: 'background.default' }}>
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
                  <MenuItem onClick={toggleDrawer(false)} sx={{ fontWeight: 'bold' }}>
                    Services
                  </MenuItem>
                </Link>
                <Link to='gallery' smooth={true} duration={500} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <MenuItem onClick={toggleDrawer(false)} sx={{ fontWeight: 'bold' }}>
                    Gallery
                  </MenuItem>
                </Link>
                <Link to='aboutus' smooth={true} duration={500} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <MenuItem onClick={toggleDrawer(false)} sx={{ fontWeight: 'bold' }}>
                    About Us
                  </MenuItem>
                </Link>
                <Link to='contact' smooth={true} duration={500} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <MenuItem onClick={toggleDrawer(false)} sx={{ fontWeight: 'bold' }}>
                    Contact
                  </MenuItem>
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
