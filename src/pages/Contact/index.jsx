import { Box, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Box
      id='contact'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'lightyellow',
      }}>
      <Typography variant='h2' gutterBottom>
        Contact
      </Typography>
      <Typography variant='body1'>Contact details and form for TFL Homes.</Typography>
    </Box>
  );
};
export default Contact;
