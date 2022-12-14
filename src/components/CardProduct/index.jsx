import {
  Container,
  CardMedia,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
const CardProduct = ({ productos }) => {
  return (
    <Container>
      <Card>
        <CardMedia component="img" image={productos.url_image} height={400} />
        <CardContent>
          <Typography variant="h5" component="div" fontWeight={600}>
            Nombre: {productos.name}
          </Typography>
          <Typography variant="h6" component="div">
            Precio: {productos.precio}
          </Typography>

          <Typography variant="h6" component="div">
            Categoria: {productos.category}
          </Typography>
          <Typography variant="h6" component="div">
            Stock: {productos.stock}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button color="secondary" variant="contained">
            COMPRAR
          </Button>
          <Button color="primary" variant="contained">
            AÑADIR AL CARRITO
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default CardProduct;
