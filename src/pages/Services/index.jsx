import { Typography, Box } from '@mui/material';

const Hero = () => {
  return (
    <Box
      id='services'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'lightgreen',
      }}>
      <Typography variant='h2' gutterBottom>
        Services
      </Typography>
      <Typography variant='body1'>Description of services offered by TFL Homes.</Typography>
    </Box>
  );
};
export default Hero;
