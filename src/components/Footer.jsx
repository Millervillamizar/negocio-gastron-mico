// src/components/Footer.jsx
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 1, mt: 0 }}>
      <Typography variant="body2" align="center">
        © 2024 Negocio Gastronómico
      </Typography>
    </Box>
  );
}

export default Footer;

