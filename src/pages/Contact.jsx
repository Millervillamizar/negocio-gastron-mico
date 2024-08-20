// src/pages/Contact.jsx
import { Container, Box, TextField, Button, Typography } from '@mui/material';

function Contact() {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', py: 5 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contáctanos
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Si tienes alguna pregunta o comentario, por favor llena el formulario a continuación.
        </Typography>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            maxWidth: 600,
            margin: '0 auto',
            mt: 3
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            fullWidth
            label="Nombre"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Correo Electrónico"
            variant="outlined"
            type="email"
            required
          />
          <TextField
            fullWidth
            label="Mensaje"
            variant="outlined"
            multiline
            rows={4}
            required
          />
          <Button variant="contained" color="primary" type="submit">
            Enviar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Contact;
