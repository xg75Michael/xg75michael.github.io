import { Box, Typography, TextField, Button } from '@mui/material';
import { useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha'; // Import hCaptcha component
import emailjs from '@emailjs/browser';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [captchaToken, setCaptchaToken] = useState(null); // Store hCaptcha token

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptchaVerify = (token) => {
    setCaptchaToken(token); // Save the hCaptcha token when verified
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert('Please complete the CAPTCHA.');
      return;
    }

    // Send email using EmailJS
    emailjs
      .send(
        'service_565xxcq', // Replace with your EmailJS Service ID
        'template_2z3jlse', // Replace with your EmailJS Template ID
        { ...formData, 'h-captcha-response': captchaToken }, // Include the hCaptcha token
        '_p75ckpW6tujMjyrP', // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Message sent successfully!');
          setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' }); // Reset form
          setCaptchaToken(null); // Reset CAPTCHA token
        },
        (error) => {
          console.error('Error sending email:', error.text);
          alert('Failed to send message. Please try again.');
        },
      );
  };

  return (
    <Box
      id='contact'
      sx={(theme) => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(16, 12), // Safety space using theme.spacing
        [theme.breakpoints.down('sm')]: {
          padding: theme.spacing(8, 4), // Smaller padding for small screens
          flexDirection: 'column',
          alignItems: 'flex-start',
        },
        [theme.breakpoints.up('xl')]: {
          padding: theme.spacing(16, 24), // Smaller padding for small screens
        },
      })}>
      {/* Left Side: Title and Text */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          pr: { xs: 0, sm: 2, md: 8 },
        }}>
        <Typography variant='h2' gutterBottom sx={{ mb: 4 }}>
          Contact Us
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <LocationOnIcon color='primary' />
          <Typography variant='body1'>1234 Street Name, City, State, 12345</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <PhoneIcon color='primary' />
          <Typography variant='body1'>Phone: (123) 456-7890</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <EmailIcon color='primary' />
          <Typography variant='body1'>Email: info@tflhomes.com</Typography>
        </Box>
      </Box>

      {/* Right Side: Form */}
      <Box
        component='form'
        onSubmit={handleSubmit}
        sx={(theme) => ({
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          [theme.breakpoints.down('sm')]: {
            width: '100%',
            pt: 4,
          },
        })}>
        <TextField
          label='First Name'
          name='firstName'
          value={formData.firstName}
          onChange={handleChange}
          required
          sx={{
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                borderColor: 'primary.main',
              },
            },
          }}
        />
        <TextField
          label='Last Name'
          name='lastName'
          value={formData.lastName}
          onChange={handleChange}
          required
          sx={{
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                borderColor: 'primary.main',
              },
            },
          }}
        />
        <TextField
          label='Email'
          name='email'
          type='email'
          value={formData.email}
          onChange={handleChange}
          required
          sx={{
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                borderColor: 'primary.main',
              },
            },
          }}
        />
        <TextField
          label='Phone Number'
          name='phone'
          type='tel'
          value={formData.phone}
          onChange={handleChange}
          required
          sx={{
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                borderColor: 'primary.main',
              },
            },
          }}
        />
        <TextField
          label='Message (optional)'
          name='message'
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          sx={{
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                borderColor: 'primary.main',
              },
            },
          }}
        />
        {/* hCaptcha Widget */}
        <HCaptcha
          sitekey='5d96359e-32ea-46e2-bbaa-3aa43906e2fa' // Replace with your hCaptcha Site Key
          onVerify={handleCaptchaVerify} // Callback when CAPTCHA is verified
        />
        <Button type='submit' variant='contained' color='primary'>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
