import { Box, Typography, Container } from '@mui/material';
import ContactIcons from '../../components/ContactIcons';
import ContactForm from '../../components/forms/ContactForm';

export default function Contact() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        backgroundColor: `background.paper`,
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h2" align="center" gutterBottom sx={{ fontWeight: 700 }}>
          Contact Me
        </Typography>
        <Typography align="center" color="text.secondary" sx={{ mb: 4 }}>
          Have a project in mind or just want to say hi? Drop me a line below.
        </Typography>

        <ContactForm />
        <ContactIcons />
      </Container>
    </Box>
  );
}
