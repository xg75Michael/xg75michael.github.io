import { Typography, Box } from '@mui/material';

const AboutUs = () => {
  return (
    <Box
      id='aboutus'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'lightcoral',
      }}>
      <Typography variant='h2' gutterBottom>
        About Us
      </Typography>
      <Typography variant='body1'>Information about TFL Homes and its mission.</Typography>
    </Box>
  );
};
export default AboutUs;
