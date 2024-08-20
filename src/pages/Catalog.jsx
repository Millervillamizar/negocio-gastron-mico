// src/pages/Catalog.jsx
import { Grid, Card, CardContent, Typography, CardMedia, Container } from '@mui/material';

const products = [
  { id: 1, name: 'Pizza Margarita', price: '$12', image: '/images/pizza.jpg' },
  { id: 2, name: 'Pasta Carbonara', price: '$15', image: '/images/pasta.jpg' },
  { id: 3, name: 'Hamburguesa Clásica', price: '$10', image: '/images/hamburguesa.jpg' },
  { id: 4, name: 'Ensalada César', price: '$8', image: '/images/ensalada.jpg' },
  { id: 5, name: 'Tacos al Pastor', price: '$12', image: '/images/tacos.jpeg' },
  { id: 6, name: 'Sushi Roll', price: '$18', image: '/images/sushi.png' },
  { id: 7, name: 'Pollo Asado', price: '$14', image: '/images/pollo.jpg' },
  { id: 8, name: 'Lasagna', price: '$16', image: '/images/lasana.jpg' },
  { id: 9, name: 'Empanadas', price: '$7', image: '/images/empanadas.png' },
  { id: 10, name: 'Panqueques', price: '$9', image: '/images/panqueques.jpg' },
  { id: 11, name: 'Helado', price: '$5', image: '/images/helado.jpg' },
  { id: 12, name: 'Brownie', price: '$6', image: '/images/brownie.jpg' },
];

function Catalog() {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, overflowX: 'hidden' }}>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
  
  

export default Catalog;

