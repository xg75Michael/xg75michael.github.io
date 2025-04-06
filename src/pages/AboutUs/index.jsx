import { Typography, Box } from '@mui/material';
import { motion, useScroll, useTransform, useMotionValue, animate, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const AboutUs = () => {
  const refScrollY = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refScrollY,
    offset: ['start center', 'start start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['50vh', '0vh']);

  const count1 = useMotionValue(0);
  const roundedNumber1 = useTransform(() => Math.round(count1.get()));
  const inViewRef1 = useRef(null);
  const isInView1 = useInView(inViewRef1, { margin: '0px 0px -120px 0px' });
  useEffect(() => {
    if (isInView1) {
      const controls = animate(count1, 100, { duration: 5 });
      return () => controls.stop();
    }
  }, [isInView1]);

  const count2 = useMotionValue(0);
  const roundedNumber2 = useTransform(() => Math.round(count2.get()));
  const inViewRef2 = useRef(null);
  const isInView2 = useInView(inViewRef2, { margin: '0px 0px -120px 0px' });
  useEffect(() => {
    if (isInView2) {
      const controls = animate(count2, 200, { duration: 8 });
      return () => controls.stop();
    }
  }, [isInView2]);

  const count3 = useMotionValue(0);
  const roundedNumber3 = useTransform(() => Math.round(count3.get()));
  const inViewRef3 = useRef(null);
  const isInView3 = useInView(inViewRef3, { margin: '0px 0px -120px 0px' });
  useEffect(() => {
    if (isInView3) {
      const controls = animate(count3, 123, { duration: 5 });
      return () => controls.stop();
    }
  }, [isInView3]);

  return (
    <motion.div style={{ position: 'relative', zIndex: 2, y }}>
      <Box
        id='aboutus'
        ref={refScrollY}
        sx={(theme) => ({
          marginTop: '-50vh',
          height: '100vh',
          px: theme.spacing(12),
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'left',
          backgroundColor: '#000',
          [theme.breakpoints.down('sm')]: {
            px: theme.spacing(4), // Smaller padding for small screens
          },
          [theme.breakpoints.up('xl')]: {
            px: theme.spacing(24), // Smaller padding for small screens
          },
        })}>
        <Typography variant='h1' gutterBottom color='primary'>
          About Us
        </Typography>
        <Typography variant='body1' gutterBottom color='secondary'>
          TFL Homes is a provider of specialized plumbing and drainage solutions. We are committed to delivering
          high-quality services with professionalism, reliability, and attention to detail. With years of experience in
          the industry, we offer a range of services to meet both residential and commercial needs.
        </Typography>
        <Typography ref={inViewRef1} variant='body1' gutterBottom color='secondary'>
          <motion.span
            color='primary'
            style={{
              display: 'inline-block',
              minWidth: '120px',
              paddingRight: '24px',
              fontSize: '48px',
              color: '#3275bc',
            }}>
            {roundedNumber1}
          </motion.span>
          years years years years yearsyears
        </Typography>
        <Typography ref={inViewRef2} variant='body1' gutterBottom color='secondary'>
          <motion.span
            color='primary'
            style={{
              display: 'inline-block',
              minWidth: '120px',
              paddingRight: '24px',
              fontSize: '48px',
              color: '#3275bc',
            }}>
            {roundedNumber2}
          </motion.span>
          project project project project projectproject project project project projectproject project project project
          project
        </Typography>
        <Typography ref={inViewRef3} variant='body1' gutterBottom color='secondary'>
          <motion.span
            color='primary'
            style={{
              display: 'inline-block',
              minWidth: '120px',
              paddingRight: '24px',
              fontSize: '48px',
              color: '#3275bc',
            }}>
            {roundedNumber3}
          </motion.span>
          xxxxx xxxxx xxxxx xxxxx xxxxx
        </Typography>
      </Box>
    </motion.div>
  );
};
export default AboutUs;
