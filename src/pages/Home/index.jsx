import { Button, Container, Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <div>
      <Container
        id='hero'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '120vh',
          backgroundColor: 'lightblue',
        }}>
        <Typography variant='h2' gutterBottom>
          Hero
        </Typography>
      </Container>
      <Container
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
      </Container>

      <Container
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
      </Container>

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
    </div>
  );
};

export default Home;
