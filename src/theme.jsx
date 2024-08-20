import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556B2F', // Verde oliva
    },
    secondary: {
      main: '#8B4513', // Marrón tierra
    },
    background: {
      default: '#F5F5DC', // Beige
      paper: '#FFF8DC',  // Crema
    },
    text: {
      primary: '#333333', // Negro para un buen contraste
      secondary: '#8B4513', // Marrón tierra para detalles
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;

