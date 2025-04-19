import { Container, Typography, Box, Button } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { styled } from '@mui/material/styles';
import backgroundpc from '@/assets/hero/backgroundpc.jpg'; // Import desktop background image
import backgroundmb from '@/assets/hero/backgroundmb.jpg'; // Import mobile background image

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: '4rem', // Adjust the font size as needed
  fontWeight: 'bold',
  marginBottom: theme.spacing(4), // Adjust the spacing as needed
  [theme.breakpoints.down('sm')]: {
    fontSize: '3rem', // Adjust the font size for small screens
  },
}));

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, window.innerHeight / 2], ['50vh', '0vh']);

  return (
    <motion.div style={{ position: 'relative', zIndex: 2, y }}>
      <Box
        id='hero'
        sx={(theme) => ({
          position: 'relative', // Ensure the section is positioned relative to its normal position
          height: '100vh',
          marginTop: '-50vh',
          padding: theme.spacing(0, 12), // Safety space using theme.spacing
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          backgroundImage: `url(${backgroundpc})`, // Default to desktop background
          backgroundSize: 'cover', // Ensure the image covers the entire section
          backgroundPosition: 'center', // Center the image
          backgroundRepeat: 'no-repeat', // Prevent the image from repeating
          [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2, 4), // Smaller padding for small screens
            backgroundImage: `url(${backgroundmb})`, // Use mobile background for small screens
          },
          [theme.breakpoints.up('xl')]: {
            padding: theme.spacing(2, 24), // Larger padding for extra-large screens
          },
        })}>
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }}>
          <StyledTypography color='secondary'>
            Welcome{' '}
            <span
              style={{
                whiteSpace: 'nowrap',
              }}>
              TFL HOMES
            </span>
          </StyledTypography>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 3 }}>
          <Button
            component='a'
            href='tel:+64210398136'
            variant='contained'
            color='secondary'
            size='large'
            sx={{
              mt: 2, // Add margin-top for spacing
              fontWeight: 'bold',
            }}>
            Call Us: +64 210398136
          </Button>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default Hero;
