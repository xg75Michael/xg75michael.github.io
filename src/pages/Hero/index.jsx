import { Container, Typography, Box } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { styled } from '@mui/material/styles';

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: '4rem', // Adjust the font size as needed
  fontWeight: 'thin',
  marginBottom: theme.spacing(4), // Adjust the spacing as needed
  [theme.breakpoints.down('sm')]: {
    fontSize: '3rem', // Adjust the font size as needed
  },
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
        sx={(theme) => ({
          position: 'relative', // Ensure the section is positioned relative to its normal position
          height: '100vh',
          marginTop: '-50vh',
          padding: theme.spacing(0, 12), // Safety space using theme.spacing
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2, 4), // Smaller padding for small screens
          },
          [theme.breakpoints.up('xl')]: {
            padding: theme.spacing(2, 24), // Smaller padding for small screens
          },
        })}>
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <StyledTypography color='primary'>
            Contact us today for all your drainage, plumbing, and gas fitting needs!
          </StyledTypography>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default Hero;
