
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Box, Typography, Button, IconButton, Container, Divider } from "@mui/material";

import { newProducts } from "../home/new-products-data";


import StarIcon from "../assets/icons/StarIcon";
import AddIcon from "../assets/icons/AddIcon";
import RemoveIcon from "../assets/icons/RemoveIcon";
import { NewProductss } from "../home/NewProductss";
import Rating from "../components/Rating";

const ProductDetail = () => {
  const { id } = useParams();
  const product = newProducts.find((p) => p.id === parseInt(id, 10));

  const [qty, setQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Large");
  

  if (!product) return <Typography>Product not found</Typography>;


  const fullStars = Math.floor(product.rating || 0); 
  const total = 5;

  return (
    <Container sx={{ py: 6 }}>
      <Box display="flex" gap={6} alignItems="flex-start" flexWrap="wrap">
        
        <Box flex="1 1 420px">
          <Box
            component="img"
            src={product.img}          
            alt={product.title}
            sx={{ width: "100%", borderRadius: 2, boxShadow: 1 }}
          />
        </Box>
        <Box flex="1 1 520px">
          <Typography variant="h5" fontWeight={700} gutterBottom>
            {product.title}
          </Typography>
          <Box display="flex" alignItems="center" gap={0.5} mb={1}>
            {Array.from({ length: total }).map((_, i) => (
              <StarIcon
                key={i}
                size={20}
                color={i < fullStars ? "#FFD700" : "#E0E0E0"} 
              />
            ))}
            <Typography variant="body2" color="text.secondary" ml={1}>
              {product.rating}/5
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={2} mt={1}>
            <Typography variant="h5" fontWeight={700}>${product.price}</Typography>
            {product.oldPrice && (
              <Typography variant="h6" sx={{ textDecoration: "line-through", color: "gray" }}>
                ${product.oldPrice}
              </Typography>
            )}
          </Box>
          <Typography variant="body1" color="text.secondary" mt={2}>
            This graphic t-shirt which is perfect for any occasion. Crafted from a soft and
            breathable fabric, it offers superior comfort and style.
          </Typography>

          <Divider sx={{ my: 3 }} />
          <Typography fontWeight={600} gutterBottom>
            Choose Size
          </Typography>
          <Box display="flex" gap={1.5} mb={3}>
            {["Small", "Medium", "Large", "X-Large"].map((s) => (
              <Button
                key={s}
                variant={selectedSize === s ? "contained" : "outlined"}
                onClick={() => setSelectedSize(s)}
                sx={{ borderRadius: 12, textTransform: "none", px: 2.5,  }}
              >
                {s}
              </Button>
            ))}
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <Box display="flex" alignItems="center" border="1px solid #ddd" borderRadius={2}>
              <IconButton onClick={() => setQty((q) => Math.max(1, q - 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography minWidth={25} textAlign="center">
                {qty}
              </Typography>
              <IconButton onClick={() => setQty((q) => q + 1)}>
                <AddIcon />
              </IconButton>
            </Box>

            <Button
              variant="contained"
              sx={{
                bgcolor: "black",
                color: "white",
                px: 16,
                py: 1.5,
                borderRadius: "12px",
                textTransform: "none",
                "&:hover": { bgcolor: "#333" },
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>
      <Box>
        <Rating />
      < NewProductss />
      </Box> 
    </Container>
  );
};

export default ProductDetail;
