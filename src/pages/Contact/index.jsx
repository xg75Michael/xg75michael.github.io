import { Container, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Container
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
    </Container>
  );
};
export default Contact;
