import { Box, Typography, TextField, Button, Stack, Container } from '@mui/material';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import ContactIcons from '../../components/ContactIcons';

const schema = z.object({
  name: z.string().min(2, `Name is required`),
  email: z.string().email(`Invalid email address`),
  message: z.string().min(10, `Message must be at least 10 characters`),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    // TODO: handle form submission
    reset();
  };

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

        <Stack component="form" spacing={3} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Name"
            fullWidth
            {...register(`name`, { required: `Name is required` })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            {...register(`email`, {
              required: `Email is required`,
              pattern: {
                value: /^\S+@\S+$/i,
                message: `Enter a valid email`,
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Message"
            fullWidth
            multiline
            minRows={4}
            {...register(`message`, { required: `Message is required` })}
            error={!!errors.message}
            helperText={errors.message?.message}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            disabled={isSubmitting}
            sx={{ textTransform: `none`, py: 1.5 }}
          >
            Send Message
          </Button>

          {isSubmitSuccessful && (
            <Typography color="success.main" align="center">
              Thanks! I’ll be in touch soon.
            </Typography>
          )}
        </Stack>

        <ContactIcons />
      </Container>
    </Box>
  );
}
