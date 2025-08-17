
import { Container, Typography, Button, Box } from "@mui/material";
import { newProducts } from "./new-products-dataa";
import ProductCard from "../components/ProductCard";

export const NewProductss = () => {
  return (
    <Container sx={{ py: 6 }}>
     
      <Typography
        variant="h4"
        fontWeight="700"
        align="center"
        gutterBottom
      >
        TOP SELLING 
      </Typography>

     
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 3,
          mt: 4,
        }}
      >
        {newProducts.slice(0, 4).map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </Box>

    
      <Button
        variant="outlined"
        sx={{
          mt: 4,
          display: "block",
          mx: "auto",
          borderRadius: "50px",
          px: 4,
          fontWeight: 600,
        }}
      >
        View All
      </Button>
    </Container> 
  );
};
