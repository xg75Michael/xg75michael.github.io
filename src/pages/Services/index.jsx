import { Typography, Box } from '@mui/material';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import service1 from '@/assets/service1.jpeg';
import service2 from '@/assets/service2.jpeg';
import service3 from '@/assets/service3.jpeg';
import { useRef } from 'react';

const Services = () => {
  const refscale1 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refscale1,
    offset: ['center end', 'end center'],
  });
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const refscale2 = useRef(null);
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: refscale2,
    offset: ['center end', 'end center'],
  });
  const scale2 = useTransform(scrollYProgress2, [0, 1], [1, 1.2]);

  const reftransform3 = useRef(null);
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: reftransform3,
    offset: ['center end', 'end center'],
  });
  const transform3 = useTransform(scrollYProgress3, [0, 1], [30, -30]);

  // const scale2 = useTransform(scrollY, [0, (window.innerHeight / 4) * 3], [1, 1.2]);

  const textRef1 = useRef(null);
  const textInView1 = useInView(textRef1, { margin: '0px 0px -100px 0px' });

  const textRef2 = useRef(null);
  const textInView2 = useInView(textRef2, { margin: '0px 0px -100px 0px' });

  const textRef3 = useRef(null);
  const textInView3 = useInView(textRef3, { margin: '0px 0px -100px 0px' });

  return (
    <>
      <Box
        id='services'
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          pt: 36, // Padding top and bottom, and safety space on the sides
        }}>
        <Box
          ref={refscale1}
          sx={{
            width: '60vw',
            height: '30vw',
            flexShrink: 0,
            overflow: 'hidden',
          }}>
          <motion.div style={{ scale: scale1 }}>
            <Box
              component='img'
              src={service1}
              alt='Service Image'
              sx={{
                width: '100%',
              }}
            />
          </motion.div>
        </Box>
        <Box
          ref={textRef1}
          sx={{
            maxWidth: '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            marginLeft: 4, // Space between image and text
          }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={textInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1 }}>
            <Typography variant='h2' gutterBottom color='primary'>
              Public Drainage
            </Typography>
            <Typography variant='body1' color='primary' pb={4}>
              Our Public Drainage service ensures that municipal drainage systems are installed, maintained, and
              repaired to meet the highest standards. We provide advice on Construction Programme and Method. We do the
              set up and risk assessment. Our team ensures that your public drainage infrastructure remains efficient
              and reliable.
            </Typography>
          </motion.div>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          pt: 24, // Padding top and bottom, and safety space on the sides
        }}>
        <Box
          ref={textRef2}
          sx={{
            maxWidth: '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            marginRight: 4, // Space between image and text
          }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={textInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1 }}>
            <Typography variant='h2' gutterBottom color='primary'>
              Private Drainage
            </Typography>
            <Typography variant='body1' color='primary' pb={4}>
              Our team provide expert Private Drainage services, which focus on the drainage systems within your
              property. From the installation of new drainage solutions to the maintenance and repair of existing
              systems, our skilled technicians ensure that your private drainage operates without issue. This service is
              essential for homeowners and businesses alike to prevent flooding, blockages, and other drainage problems.
            </Typography>
          </motion.div>
        </Box>
        <Box
          ref={refscale2}
          sx={{
            width: '60vw',
            height: '30vw',
            flexShrink: 0,
            overflow: 'hidden',
          }}>
          <motion.div style={{ scale: scale2 }}>
            <Box
              component='img'
              src={service2}
              alt='Service Image'
              sx={{
                width: '100%',
              }}
            />
          </motion.div>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          pt: 24, // Padding top and bottom, and safety space on the sides
          pb: 24, // Padding top and bottom, and safety space on the sides
        }}>
        <Box
          ref={textRef3}
          sx={{
            maxWidth: '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            marginRight: 4, // Space between image and text
          }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={textInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1 }}>
            <Typography variant='h2' gutterBottom color='primary'>
              Plumbing
            </Typography>
            <Typography variant='body1' color='primary' pb={4}>
              Our Plumbing service covers all aspects of residential and commercial plumbing needs. Whether it's pipe
              installation, leak repairs, or routine maintenance, we offer comprehensive plumbing solutions. We handle
              everything from bathroom fittings to kitchen plumbing, ensuring that your plumbing system functions
              properly and efficiently.
            </Typography>
          </motion.div>
        </Box>
        <Box
          ref={reftransform3}
          sx={{
            width: '40vw',
            // height: '60vw',
            flexShrink: 0,
            overflow: 'hidden',
          }}>
          <motion.div style={{ scale: 1.5, translateX: transform3 }}>
            <Box
              component='img'
              src={service3}
              alt='Service Image'
              sx={{
                width: '100%',
              }}
            />
          </motion.div>
        </Box>
      </Box>
    </>
  );
};

export default Services;
