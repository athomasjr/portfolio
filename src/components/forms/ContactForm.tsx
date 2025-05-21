import { Typography, TextField, Button, Stack } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import encode from './encode';
import { toast } from 'react-toastify';

const schema = z.object({
  name: z.string().min(2, `Name is required`),
  email: z.string().email(`Invalid email address`),
  message: z.string().min(10, `Message must be at least 10 characters`),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data, e) => {
    e?.preventDefault();
    try {
      await fetch(`/`, {
        method: `POST`,
        headers: { 'Content-Type': `application/x-www-form-urlencoded` },
        body: encode({ 'form-name': `contact-form`, ...data }),
      });

      if (isSubmitted) {
        reset();
        toast.success(`Thank you for reaching out! I will get back to you soon.`);
      }
    } catch (error) {
      console.error(error);
      toast.error(`Oops! Something went wrong. Please try again later.`);
    }
  };

  return (
    <Stack
      component="form"
      name="contact-form"
      method="POST"
      action="#"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      spacing={3}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete="off"
    >
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
          Thanks! I'll be in touch soon.
        </Typography>
      )}
    </Stack>
  );
}
