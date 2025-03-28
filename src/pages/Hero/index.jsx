import { Container, Typography, Box } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { styled } from '@mui/material/styles';

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: '4rem', // Adjust the font size as needed
  fontWeight: 'thin',
  marginBottom: theme.spacing(8), // Adjust the spacing as needed
}));

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, window.innerHeight / 2], ['50vh', '0vh']);
  const background = useTransform(
    scrollY,
    [0, window.innerHeight / 2],
    ['linear-gradient(135deg, #ffffff 10%,#6196ec 100%)', 'linear-gradient(-135deg, #ffffff 10%, #6196ec 100%)'],
  );

  return (
    <motion.div style={{ position: 'relative', zIndex: 2, y, background }}>
      <Box
        id='hero'
        sx={{
          position: 'relative', // Ensure the section is positioned relative to its normal position
          height: '100vh',
          marginTop: '-50vh',
          padding: '0 96px', // Safety space
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            maxWidth: '1200px',
          }}>
          <StyledTypography variant='h1' color='primary'>
            Contact us today for all your drainage, plumbing, and gas fitting needs!
          </StyledTypography>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default Hero;
