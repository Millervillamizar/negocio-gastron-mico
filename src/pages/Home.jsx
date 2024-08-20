import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Box
      sx={{
        backgroundImage: 'url(/images/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 3,
        color: 'white',
      }}
    >
      <Box sx={{ maxWidth: '500px' }}>
        <Typography variant="h3" component="h1" gutterBottom color="primary">
          Bienvenidos a Nuestro Restaurante
        </Typography>
        <Typography variant="h6" component="p" gutterBottom color="textSecondary">
          Disfruta de la mejor comida gourmet con ingredientes frescos y recetas únicas.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/catalog"
          sx={{ mt: 2 }}
        >
          Ver Catálogo
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
