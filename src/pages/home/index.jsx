import { get } from "../../services";
import { useState, useEffect } from "react";
import { Typography, Container, Grid } from "@mui/material";
import { CardProduct, NavBar } from "../../components";

const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const result = await get("/");
    setProducts(result.data);
  };
  console.log(products);
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <NavBar />
      <Typography variant="h4" textAlign="center" fontWeight={800}>
        LISTA DE PRODUCTOS
      </Typography>
      <Container maxWidth="xl" sx={{ padding: 4 }}>
        <Grid container spacing={3}>
          {products.length > 0 &&
            products.map((product, index) => (
              <Grid xs={12} item sm={4} sx={{ padding: 2 }}>
                <CardProduct productos={product} key={index} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
