
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import StarIcon from "../assets/icons/StarIcon";


const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: "16px",
  background: theme.palette.background.card,
  cursor: "pointer",
  boxShadow: "0px 2px 6px rgba(0,0,0,0.05)",
  "&:hover": {
    boxShadow: "0px 2px 6px rgba(0,0,0,0.05)", 
    transform: "none",
  },
}));

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <StyledCard onClick={handleClick}>
      <Box>
      
        <CardMedia
          component="img"
          height="200"
          image={product.img}
          alt={product.title}
          sx={{
            objectFit: "contain",
            background: " #f0eeed",
            borderRadius: "12px",
            p: 1,
          }}
        />

       
        <CardContent sx={{ textAlign: "center" }}>
       
          <Typography variant="h6" color="text.primary" gutterBottom noWrap>
            {product.title}
          </Typography>

          
          <Box display="flex" alignItems="center" justifyContent="center" gap={0.5}>
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                size={16}
                color={i < product.rating ? "#FFD700" : "#ccc"}
              />
            ))}
            <Typography variant="body2" color="text.secondary">
              {product.rating}/5
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" justifyContent="center" gap={1} mt={1}>
            <Typography variant="h6" color="text.primary">
              ${product.price}
            </Typography>

            {product.oldPrice && (
              <>
                <Typography
                  variant="body2"
                  sx={{
                    textDecoration: "line-through",
                    color: "text.secondary",
                  }}
                >
                  ${product.oldPrice}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    background: "#f33",
                    color: "secondary.main",
                    borderRadius: "6px",
                    px: 1,
                    fontWeight: 600,
                  }}
                >
                  -
                  {Math.round(
                    ((product.oldPrice - product.price) / product.oldPrice) * 100
                  )}
                  %
                </Typography>
              </>
            )}
          </Box>
        </CardContent>
      </Box>
    </StyledCard>
  );
};

export default ProductCard;
