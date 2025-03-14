import { Container, Typography, Box } from '@mui/material';
import heroBackground from '@/assets/heroBackground.jpg';

const Hero = () => {
  return (
    <Box
      id='hero'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vh',
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        pt: 12,
      }}>
      <Typography variant='h2' gutterBottom>
        Welcome to TFL Homes
      </Typography>
      <Typography variant='subtitle1' gutterBottom>
        Your Comfort, Our Priority
      </Typography>
      <Typography variant='body1'>We provide quality services to make your stay comfortable and memorable.</Typography>
    </Box>
  );
};

export default Hero;
